
<?php
header("Content-Type: application/json");
require_once "config.php";

$buyerId = filter_var(
    $_GET["buyer_id"] ?? "",
    FILTER_VALIDATE_INT
);

if (!$buyerId) {
    echo json_encode([
        "success" => false,
        "message" => "Buyer ID is required."
    ]);
    exit;
}

$stmt = $conn->prepare(
    "SELECT id, farmer_name, email, phone, waste_type,
            quantity, price, location, image_path,
            status, created_at
     FROM waste_listings
     WHERE buyer_id = ?
     ORDER BY created_at DESC"
);

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
$conn->close();
?>
