<?php
$name = $_POST['text'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$message = htmlspecialchars($message);

$name = urldecode($name);
$phone = urldecode($phone);
$message = urldecode($message);

$name = trim($name);
$phone = trim($phone);
$message = trim($message);

$yourMail = "19roman23@gmail.com"; //your email here
$yourText = "response from the site"; //your title here

if (mail(".$yourMail", "$yourText", "Name:".$name.". Y-Phone: ".$phone. "Message: ".$message ,"From: .$name \r\n"))
 {     echo "The message was successfully sent";
} else {
    echo "Message not sent";
}

?>
