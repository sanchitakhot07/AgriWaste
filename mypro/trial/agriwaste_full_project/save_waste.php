
<?php
header("Content-Type: application/json");

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

function sendResponse($success, $message, $extra = []) {
    echo json_encode(array_merge([
        "success" => $success,
        "message" => $message
    ], $extra));
    exit;
}

try {
    // config.php is in the parent trial folder
    require_once __DIR__ . "/../config.php";

    if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        http_response_code(405);
        sendResponse(false, "Use POST to submit the form.");
    }

    $farmerName = trim($_POST["farmer_name"] ?? "");
    $email      = trim($_POST["email"] ?? "");
    $phone      = trim($_POST["phone"] ?? "");
    $buyerId    = filter_var(
        $_POST["company"] ?? "",
        FILTER_VALIDATE_INT
    );
    $wasteType  = trim($_POST["waste_type"] ?? "");
    $quantity   = $_POST["quantity"] ?? "";
    $price      = $_POST["price"] ?? "";
    $location   = trim($_POST["location"] ?? "");

    if (
        $farmerName === "" ||
        !filter_var($email, FILTER_VALIDATE_EMAIL) ||
        $phone === "" ||
        !$buyerId ||
        $wasteType === "" ||
        !is_numeric($quantity) ||
        !is_numeric($price) ||
        (float)$quantity <= 0 ||
        (float)$price < 0
    ) {
        http_response_code(400);
        sendResponse(false, "Invalid or missing form fields.");
    }

    // Verify that the selected account is a registered buyer
    $check = $conn->prepare(
        "SELECT id FROM users
         WHERE id = ? AND user_type = 'buyer'"
    );

    $check->bind_param("i", $buyerId);
    $check->execute();

    if ($check->get_result()->num_rows === 0) {
        $check->close();
        http_response_code(400);
        sendResponse(false, "Selected buyer was not found.");
    }

    $check->close();

    // Optional waste image
    $imagePath = null;

    if (
        isset($_FILES["waste_image"]) &&
        $_FILES["waste_image"]["error"] !== UPLOAD_ERR_NO_FILE
    ) {
        if ($_FILES["waste_image"]["error"] !== UPLOAD_ERR_OK) {
            sendResponse(false, "Image upload failed.");
        }

        if ($_FILES["waste_image"]["size"] > 5 * 1024 * 1024) {
            sendResponse(false, "Image size must be under 5 MB.");
        }

        $imageInfo = getimagesize($_FILES["waste_image"]["tmp_name"]);

        if ($imageInfo === false) {
            sendResponse(false, "Please select a valid image.");
        }

        $extensions = [
            IMAGETYPE_JPEG => "jpg",
            IMAGETYPE_PNG  => "png",
            IMAGETYPE_WEBP => "webp"
        ];

        if (!isset($extensions[$imageInfo[2]])) {
            sendResponse(false, "Use a JPG, PNG, or WEBP image.");
        }

        $uploadDir = __DIR__ . "/uploads/waste/";

        if (!is_dir($uploadDir) &&
            !mkdir($uploadDir, 0755, true)) {
            sendResponse(false, "Could not create image folder.");
        }

        $fileName = bin2hex(random_bytes(16))
                  . "." . $extensions[$imageInfo[2]];

        if (!move_uploaded_file(
            $_FILES["waste_image"]["tmp_name"],
            $uploadDir . $fileName
        )) {
            sendResponse(false, "Could not save the image.");
        }

        $imagePath = "uploads/waste/" . $fileName;
    }

    // Insert listing into the database
    $sql = "INSERT INTO waste_listings
        (farmer_name, email, phone, buyer_id, waste_type,
         quantity, price, location, image_path, status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'Pending')";

    $stmt = $conn->prepare($sql);

    $quantityValue = (float)$quantity;
    $priceValue = (float)$price;

    // Nine parameters: s, s, s, i, s, d, d, s, s
    $stmt->bind_param(
        "sssisddss",
        $farmerName,
        $email,
        $phone,
        $buyerId,
        $wasteType,
        $quantityValue,
        $priceValue,
        $location,
        $imagePath
    );

    $stmt->execute();
    $listingId = $conn->insert_id;

    $stmt->close();
    $conn->close();

    sendResponse(true, "Waste listing saved successfully.", [
        "listing_id" => $listingId
    ]);

} catch (Throwable $e) {
    error_log("save_waste.php: " . $e->getMessage());
    http_response_code(500);
    sendResponse(
        false,
        "Database save failed. Check the PHP error log."
    );
}
?>
