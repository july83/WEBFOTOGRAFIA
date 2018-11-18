<?php
/**
 * Created by PhpStorm.
 * User: Julián
 * Date: 17/11/2018
 * Time: 11:50
 */

require("class.phpmailer.php");


$nombre = $_POST["inputnombre"];
$email = $_POST["inputEmail"];
$mensaje = $_POST["inputMensaje"];
$distinatario = "julycf83@gmail.com";

// Valores enviados desde el formulario
if ( empty($nombre) ||empty($email) || empty($mensaje) ) {
    echo "Es necesario completar todos los datos del formulario";
    die ();
}

$mail = new PHPMailer();
$mail->Host = "localhost";
$mail->FromName = "Aizane.com";
$mail->From = $email; // Email desde donde envío el correo.
$mail->Subject = "Contacto Aizane Fotografía"; // Este es el titulo del email.
$mail->CharSet = "utf-8";

$mail->AddAddress($distinatario, $nombre); // Esta es la dirección a donde enviamos los datos del formulario

$mail->Body = "
<html> 

<body> 

<p><b>nombre:</b> {$nombre}</p>

<p><b>email:</b> {$email}</p>

<p><b>mensaje:</b> {$mensaje}</p>

</body> 

</html>

<br />"; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n "; // Texto sin formato HTML

$estadoEnvio = $mail->Send();
if($estadoEnvio){
    header("Location:https://july83.000webhostapp.com/WEBFOTOGRAFIA/");
} else {
    echo "Ocurrió un error inesperado.";
}