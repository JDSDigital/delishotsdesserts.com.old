<?php
$userData = json_decode($_POST['userData'], true);
$shopList = json_decode($_POST['shopList'], true);

$i = 1;

$text = "<html><h4>Ha recibido un nuevo pedido desde la página web.</h4><table style='margin:30px'>";
$text .= "<table style='margin:30px'>";
$text .= "<tr><td style='padding:5px'><b>Nombre: </b></td><td style='padding:5px'>" . $userData['userName'] . "</td></tr>";
$text .= "<tr><td style='padding:5px'><b>Teléfono: </b></td><td style='padding:5px'>" . $userData['userPhone'] . "</td></tr>";
$text .= "<tr><td style='padding:5px'><b>Correo: </b></td><td style='padding:5px'>" . $userData['userMail'] . "</td></tr>";
$text .= "<tr><td style='padding:5px'><b>Fecha: </b></td><td style='padding:5px'>" . $userData['userDate'] . "</td></tr>";
$text .= "</table>";

$text .= "<table style='margin:30px'>";
foreach ($shopList as $product) {
    $text .= "<tr><td style='padding:5px'><b>Artículo N°: </b></td><td style='padding:5px'>" . $i . "</td></tr>";
    $text .= "<tr><td style='padding:5px'><b>Producto: </b></td><td style='padding:5px'>" . $product[1] . "</td></tr>";
    $text .= "<tr><td style='padding:5px'><b>Presentación: </b></td><td style='padding:5px'>" . $product[3] . "</td></tr>";
    $text .= "<tr><td style='padding:5px'><b>Cantidad: </b></td><td style='padding:5px'>" . $product[4] . "</td></tr>";
    $text .= "<tr><td style='padding:5px'> </td><td style='padding:5px'> </td></tr>";
$i++;
}
$text .= "</table></html>";

echo $text;

/*require 'vendor/autoload.php';
use Mailgun\Mailgun;

# Instantiate the client.
$mgClient = new Mailgun('key-bb6be62102fbde6cb67a14a09ef126fe');
$domain = "mg.delishotsdesserts.com";

# Make the call to the client.
$result = $mgClient->sendMessage($domain, array(
        'from'    => 'Delishots Desserts <postmaster@mg.delishotsdesserts.com>',
        'to'      => 'Delishots Desserts <jdsosa@gmail.com>',
        'subject' => 'Nuevo mensaje desde la página web',
        'html'    => $text,
));*/
?>