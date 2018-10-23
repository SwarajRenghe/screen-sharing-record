<?php

$mailto = $_POST['mail_to'];
$mailMsg = $_POST['mail_msg'];
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '/PHPMailer/src/Exception.php';
require '/PHPMailer/src/PHPMailer.php';
require '/PHPMailer/src/SMTP.php';

$mail = new PHPMailer();
$mail -> IsSmtp();
$mail -> SMTPDebug=1;
$mail -> SMTPAuth = true;
$mail -> SMTPSecure ='ssl';
$mail -> Host = "smtp.gmail.com";
$mail -> Port = 465;
$mail -> IsHTML(true);
$mail -> Username = "ssadscreensharing@gmail.com";
$mail -> Password = "123ABCxyz"; 
$mail -> SetFrom("ssadscreensharing@gmail.com");
$mail -> Subject = "User has shared his screen";
$mail -> Body = $mailMsg;
$mail -> AddAddress($mailto);

if(!$mail->Send())
{
   echo "Mail Not Sent";
}
else
{
   echo "Mail Sent";
}