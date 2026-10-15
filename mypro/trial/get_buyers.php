
<?php
header("Content-Type: application/json; charset=UTF-8");

session_start();
require_once __DIR__ . "/config.php";

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    // Get the buyer ID from the login session.
    // Your login.php must store the authenticated buyer ID in
    // $_SESSION["user_id"] for this to work.
    $buyerId = $_SESSION["user_id"] ?? null;

    if (!$buyerId) {
        http_response_code(401);
        echo json_encode([
            "success" => false,
            "message" => "Buyer session not found. Please log in again."
        ]);
        exit;
    }

    $sql = "SELECT
                id,
                farmer_name,
                email,
                phone,
                buyer_id,
                waste_type,
                quantity,
                price,
                location,
                image_path
            FROM waste_listings
            WHERE buyer_id = ?
            ORDER BY id DESC";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $buyerId);
    $stmt->execute();

    $result = $stmt->get_result();
    $listings = [];

    while ($row = $result->fetch_assoc()) {
        $listings[] = $row;
    }

    echo json_encode([
        "success" => true,
        "listings" => $listings
    ]);

    $stmt->close();

} catch (Throwable $e) {
    error_log("get_buyer_waste.php error: " . $e->getMessage());

    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Unable to retrieve waste listings."
    ]);
}
?>
