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
$pickupLocation = $data['pickupLocation'] ?? '';
$dropoffLocation = $data['dropoffLocation'] ?? '';
$pickupDate = $data['pickupDate'] ?? '';
$pickupTime = $data['pickupTime'] ?? '';
$returnDate = $data['returnDate'] ?? '';
$returnTime = $data['returnTime'] ?? '';
$passengers = $data['passengers'] ?? '';
$vehicleType = $data['vehicleType'] ?? '';
$flightNumber = $data['flightNumber'] ?? '';
$service = $data['service'] ?? '';
$roundTrip = $data['roundTrip'] ?? false;
$message = $data['message'] ?? '';

if (!$name || !$email || !$phone || !$pickupLocation || !$dropoffLocation || !$pickupDate || !$pickupTime) {
    echo json_encode(['error' => 'Missing required fields. Please fill in all required fields.']);
    http_response_code(400);
    exit;
}

$log = "=== NEW BOOKING REQUEST ===\n";
$log .= "Service: " . $service . "\n";
$log .= "Name: " . $name . "\n";
$log .= "Email: " . $email . "\n";
$log .= "Phone: " . $phone . "\n";
$log .= "Pickup Location: " . $pickupLocation . "\n";
$log .= "Drop-off Location: " . $dropoffLocation . "\n";
$log .= "Pickup Date: " . $pickupDate . "\n";
$log .= "Pickup Time: " . $pickupTime . "\n";
$log .= "Round Trip: " . ($roundTrip ? 'Yes' : 'No') . "\n";
if ($roundTrip) {
    $log .= "Return Date: " . ($returnDate ?: 'N/A') . "\n";
    $log .= "Return Time: " . ($returnTime ?: 'N/A') . "\n";
}
$log .= "Passengers: " . ($passengers ?: 'N/A') . "\n";
$log .= "Vehicle Type: " . ($vehicleType ?: 'Any') . "\n";
if ($flightNumber) {
    $log .= "Flight Number: " . $flightNumber . "\n";
}
$log .= "Message: " . ($message ?: 'N/A') . "\n";
$log .= "Timestamp: " . date('Y-m-d H:i:s') . "\n";
$log .= "===========================\n";

$logFile = __DIR__ . '/bookings.log';
file_put_contents($logFile, $log, FILE_APPEND);

echo json_encode([
    'success' => true,
    'message' => 'Booking request received successfully. We will confirm your booking shortly.'
]);
