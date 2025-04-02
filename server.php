<?php
header('Content-Type: application/json');

// Mot-clé caché
$secretWord = "ombre";
$redirectPage = "mystere.html";

// Récupération des données envoyées
$data = json_decode(file_get_contents("php://input"), true);

if (isset($data['input']) && strtolower($data['input']) === $secretWord) {
    echo json_encode(["success" => true, "redirect" => $redirectPage]);
} else {
    echo json_encode(["success" => false]);
}
?>
