<?php

session_start();

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:8081");
header("Access-Control-Allow-Credentials: true");

if (
    !isset($_SESSION["logged_in"]) ||
    $_SESSION["logged_in"] !== true
) {

    echo json_encode([
        "success" => false,
        "message" => "Not logged in"
    ]);

    exit;
}

if ($_SESSION["user_type"] !== "farmer") {

    echo json_encode([
        "success" => false,
        "message" => "Access denied"
    ]);

    exit;
}

echo json_encode([
    "success" => true,
    "user" => [
        "id" => $_SESSION["user_id"],
        "full_name" => $_SESSION["full_name"],
        "email" => $_SESSION["email"],
        "username" => $_SESSION["username"],
        "user_type" => $_SESSION["user_type"]
    ]
]);

?>