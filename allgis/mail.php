<?php

    $user = $_POST["user"];
    $tel = $_POST["tel"];
    $mail = $_POST["email"];
    $message = $_POST["message"];

    $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=urf-8\r\n";

    $success = mail("emil-absalyam.off@yandex.ru", $subject, $message, $headers);

    echo $sucess;
