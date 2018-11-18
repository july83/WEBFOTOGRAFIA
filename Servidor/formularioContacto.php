<?php
/**
 * Created by PhpStorm.
 * User: Julián
 * Date: 17/11/2018
 * Time: 11:50
 */

/*$nombre = $_POST["inputnombre"];
$email = $_POST["inputEmail"];
$mensaje = $_POST["inputMensaje"];

// destinatario
$para = 'julycf83@gmail.com';

// título
$título = 'Contacto Aizane Fotografía';

// mensaje
$mensaje = '
<html>
    <head>
        <title>Nuevo contacto</title>
    </head>
    <body>
        <p>Nombre: '.$nombre.'</p>
        <p>Email: '.$email.'</p>
        <p>Mensaje: '.$mensaje.'</p>
    </body>
</html>
';

// Para enviar un correo HTML, debe establecerse la cabecera Content-type
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

// Cabeceras adicionales
/*$cabeceras .= 'To: <julycf83@gmail.com>' . "\r\n";*/
//$cabeceras .= 'From: Aizane.com<'.$email.'>'. "\r\n";


// Enviarlo
//mail($para, $título, $mensaje, $cabeceras);

//header("Location:https://july83.000webhostapp.com/WEBFOTOGRAFIA/");*/








/*require("class.phpmailer.php");
//require("class.smtp.php");

// Valores enviados desde el formulario
if ( !isset($_POST["inputnombre"]) || !isset($_POST["inputEmail"])  || !isset($_POST["inputMensaje"]) ) {
    die ("Es necesario completar todos los datos del formulario");
}


$nombre = $_POST["inputnombre"];
$email = $_POST["inputEmail"];
$mensaje = $_POST["inputMensaje"];
$distinatario = "julycf83@gmail.com";




$mail = new PHPMailer();
$mail->Host = "localhost";
$mail->FromName = $nombre;
$mail->From = $email; // Email desde donde envío el correo.
$mail->Subject = "Formulario desde el Sitio Web"; // Este es el titulo del email.

$mail->AddAddress($distinatario, $nombre); // Esta es la dirección a donde enviamos los datos del formulario

$mail->msgHTML("hola");


//$estadoEnvio = $mail->Send();
if($mail->Send()){
    echo "El correo fue enviado correctamente.";
} else {
    echo "Ocurrió un error inesperado.";
}*/




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