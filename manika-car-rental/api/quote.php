<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['error' => 'Method not allowed']);
    http_response_code(405);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$phone = $data['phone'] ?? '';
$service = $data['service'] ?? '';
$date = $data['date'] ?? '';
$returnDate = $data['returnDate'] ?? '';
$passengers = $data['passengers'] ?? '';
$message = $data['message'] ?? '';
$vehicleName = $data['vehicleName'] ?? '';
$vehicleId = $data['vehicleId'] ?? '';

if (!$name || !$email || !$phone || !$service) {
    echo json_encode(['error' => 'Missing required fields: name, email, phone, and service are required.']);
    http_response_code(400);
    exit;
}

$log = "=== NEW QUOTE REQUEST ===\n";
$log .= "Name: " . $name . "\n";
$log .= "Email: " . $email . "\n";
$log .= "Phone: " . $phone . "\n";
$log .= "Service: " . $service . "\n";
$log .= "Vehicle: " . ($vehicleName ?: 'General Inquiry') . "\n";
$log .= "Vehicle ID: " . ($vehicleId ?: 'N/A') . "\n";
$log .= "Start Date: " . ($date ?: 'N/A') . "\n";
$log .= "Return Date: " . ($returnDate ?: 'N/A') . "\n";
$log .= "Passengers: " . ($passengers ?: 'N/A') . "\n";
$log .= "Message: " . ($message ?: 'N/A') . "\n";
$log .= "Timestamp: " . date('Y-m-d H:i:s') . "\n";
$log .= "========================\n";

$logFile = __DIR__ . '/quotes.log';
file_put_contents($logFile, $log, FILE_APPEND);

echo json_encode([
    'success' => true,
    'message' => 'Quote request received successfully. We will contact you shortly.'
]);
