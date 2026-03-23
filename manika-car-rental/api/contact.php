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
$subject = $data['subject'] ?? '';
$message = $data['message'] ?? '';

if (!$name || !$email || !$phone || !$message) {
    echo json_encode(['error' => 'Missing required fields: name, email, phone, and message are required.']);
    http_response_code(400);
    exit;
}

$log = "=== NEW CONTACT FORM SUBMISSION ===\n";
$log .= "Name: " . $name . "\n";
$log .= "Email: " . $email . "\n";
$log .= "Phone: " . $phone . "\n";
$log .= "Subject: " . ($subject ?: 'General Inquiry') . "\n";
$log .= "Message: " . $message . "\n";
$log .= "Timestamp: " . date('Y-m-d H:i:s') . "\n";
$log .= "===================================\n";

$logFile = __DIR__ . '/contacts.log';
file_put_contents($logFile, $log, FILE_APPEND);

echo json_encode([
    'success' => true,
    'message' => 'Message sent successfully. We will get back to you soon.'
]);
