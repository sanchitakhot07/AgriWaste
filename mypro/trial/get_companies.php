```php
<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");

require_once "config.php";

try {

    // Fetch all registered buyers
    $sql = "SELECT id, full_name, email
            FROM users
            WHERE usertype = 'buyer'
            ORDER BY full_name ASC";

    $result = $conn->query($sql);

    if (!$result) {
        throw new Exception("Database query failed");
    }

    $buyers = [];

    while ($row = $result->fetch_assoc()) {
        $buyers[] = [
            "id" => $row["id"],
            "full_name" => $row["full_name"],
            "email" => $row["email"]
        ];
    }

    echo json_encode([
        "success" => true,
        "buyers" => $buyers
    ]);

    $result->free();
    $conn->close();

} catch (Throwable $e) {

    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Unable to fetch buyers. Check database connection and column names."
    ]);
}
?>
```