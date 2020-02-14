<?php

$name = trim(strip_tags($_POST['name']));
$mail = trim(strip_tags($_POST['mail']));
$massage = trim(strip_tags($_POST['mesag']));


$subject = "=?utf-8?B?".base64_encode("CarePoint Best Doctor")."?=";
$headers = "From: $mail\r\nReply-to: $mail\r\nContent-type: text/html; charset=utf-8\r\n";


$text = "\n\nName: ".$name."\n\nE-mail: " .$mail."\n\nMessage ".$mass."\n\n";


mail("Yourmail@mail.com",  $subject, $massage, $headers);


?>
