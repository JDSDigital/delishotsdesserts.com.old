<?php
$userData = json_decode($_POST['userData'], true);

# Include the Autoloader (see "Libraries" for install instructions)
require 'vendor/autoload.php';
use Mailgun\Mailgun;

# Instantiate the client.
$mgClient = new Mailgun('key-bb6be62102fbde6cb67a14a09ef126fe');
$domain = "mg.delishotsdesserts.com";

# Make the call to the client.
$result = $mgClient->sendMessage($domain, array(
        'from'    => 'Delishots Desserts <postmaster@mg.delishotsdesserts.com>',
        'to'      => 'Delishots Desserts <delishotsdesserts@gmail.com>',
        'subject' => 'Nuevo mensaje desde la página web',
        'text'    => '
Ha recibido un nuevo mensaje desde la página web.

Nombre: ' .$userData['userName'] .'
Apellido: ' .$userData['userPhone'] .'
Email: ' .$userData['userMail'] .'
Comentario: ' .$userData['userComment'] .'
'
));
?>