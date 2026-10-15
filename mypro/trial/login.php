<?php

session_start();

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: http://localhost:8081");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

/* Handle preflight request */
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

/* Database connection */
require_once "config.php";


/* Only POST allowed */
if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    echo json_encode([
        "success" => false,
        "message" => "Only POST requests are allowed"
    ]);

    exit;
}


/* Get JSON data */
$input = file_get_contents("php://input");

$data = json_decode($input, true);


/* Check JSON */
if (!is_array($data)) {

    echo json_encode([
        "success" => false,
        "message" => "Invalid request data"
    ]);

    exit;
}


/* Get login details */
$username = trim($data["username"] ?? "");
$password = $data["password"] ?? "";
$login_type = trim($data["login_type"] ?? "");


/* Validate fields */
if ($username === "" || $password === "") {

    echo json_encode([
        "success" => false,
        "message" => "Please enter username/email and password"
    ]);

    exit;
}


/* Validate login type */
if ($login_type !== "farmer" && $login_type !== "buyer") {

    echo json_encode([
        "success" => false,
        "message" => "Invalid login type"
    ]);

    exit;
}


/*
|--------------------------------------------------------------------------
| Find user in pbl.users
|--------------------------------------------------------------------------
*/

$sql = "
    SELECT
        id,
        full_name,
        email,
        username,
        password,
        user_type
    FROM users
    WHERE email = ? OR username = ?
    LIMIT 1
";

$stmt = $conn->prepare($sql);


if (!$stmt) {

    echo json_encode([
        "success" => false,
        "message" => "Database query failed: " . $conn->error
    ]);

    exit;
}


/* Bind email/username */
$stmt->bind_param(
    "ss",
    $username,
    $username
);


/* Execute */
$stmt->execute();


/* Get result */
$result = $stmt->get_result();


/*
|--------------------------------------------------------------------------
| User does not exist
|--------------------------------------------------------------------------
*/

if ($result->num_rows === 0) {

    echo json_encode([
        "success" => false,
        "message" => "User is not registered"
    ]);

    $stmt->close();
    $conn->close();

    exit;
}


/* Get user */
$user = $result->fetch_assoc();


/*
|--------------------------------------------------------------------------
| IMPORTANT:
| Check the password against the hashed password in database
|--------------------------------------------------------------------------
*/

if (!password_verify($password, $user["password"])) {

    echo json_encode([
        "success" => false,
        "message" => "Incorrect password"
    ]);

    $stmt->close();
    $conn->close();

    exit;
}


/*
|--------------------------------------------------------------------------
| Check Farmer / Buyer login
|--------------------------------------------------------------------------
*/

if ($user["user_type"] !== $login_type) {

    if ($user["user_type"] === "farmer") {

        $message =
            "This account is registered as Farmer. Please use Farmer Login.";

    } else {

        $message =
            "This account is registered as Buyer. Please use Company Login.";
    }


    echo json_encode([
        "success" => false,
        "message" => $message
    ]);

    $stmt->close();
    $conn->close();

    exit;
}


/*
|--------------------------------------------------------------------------
| LOGIN SUCCESS
|--------------------------------------------------------------------------
*/

/* Create new session ID */
session_regenerate_id(true);


/* Store user information in session */
$_SESSION["logged_in"] = true;

$_SESSION["user_id"] = $user["id"];

$_SESSION["full_name"] = $user["full_name"];

$_SESSION["email"] = $user["email"];

$_SESSION["username"] = $user["username"];

$_SESSION["user_type"] = $user["user_type"];


/*
|--------------------------------------------------------------------------
| Return successful response
|--------------------------------------------------------------------------
*/

echo json_encode([

    "success" => true,

    "message" => "Login successful",

    "user" => [

        "id" => $user["id"],

        "full_name" => $user["full_name"],

        "email" => $user["email"],

        "username" => $user["username"],

        "user_type" => $user["user_type"]

    ]

]);


/* Close connection */
$stmt->close();

$conn->close();

?>