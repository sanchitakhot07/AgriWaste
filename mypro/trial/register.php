<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

require_once "config.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    echo json_encode([
        "success" => false,
        "message" => "Only POST requests are allowed"
    ]);

    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$full_name = trim($data["full_name"] ?? "");
$email = trim($data["email"] ?? "");
$username = trim($data["username"] ?? "");
$password = $data["password"] ?? "";
$user_type = trim($data["user_type"] ?? "");
$phone_no = trim($data["phone_no"] ?? "");


/* Check empty fields */

if (
    empty($full_name) ||
    empty($email) ||
    empty($username) ||
    empty($password) ||
    empty($user_type) ||
    empty($phone_no)
) {

    echo json_encode([
        "success" => false,
        "message" => "Please fill all fields"
    ]);

    exit;
}


/* Validate email */

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

    echo json_encode([
        "success" => false,
        "message" => "Invalid email address"
    ]);

    exit;
}


/* Validate user type */

if ($user_type !== "farmer" && $user_type !== "buyer") {

    echo json_encode([
        "success" => false,
        "message" => "Invalid user type"
    ]);

    exit;
}


/* Check existing email or username */

$check = $conn->prepare(
    "SELECT id FROM users WHERE email = ? OR username = ?"
);

$check->bind_param(
    "ss",
    $email,
    $username
);

$check->execute();

$result = $check->get_result();

if ($result->num_rows > 0) {

    echo json_encode([
        "success" => false,
        "message" => "Email or username already exists"
    ]);

    $check->close();
    $conn->close();

    exit;
}

$check->close();


/* Hash password */

$hashed_password = password_hash(
    $password,
    PASSWORD_DEFAULT
);


/* Insert user */

$sql = $conn->prepare(
    "INSERT INTO users
    (full_name, email, username, password, user_type, phone_no)
    VALUES (?, ?, ?, ?, ?, ?)"
);

$sql->bind_param(
    "ssssss",
    $full_name,
    $email,
    $username,
    $hashed_password,
    $user_type,
    $phone_no
);


if ($sql->execute()) {

    echo json_encode([
        "success" => true,
        "message" => "Registration successful"
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "Registration failed"
    ]);
}


$sql->close();
$conn->close();

?>