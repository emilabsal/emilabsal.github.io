<?php
    $cli = $_POST["cli"];
    $mail = $_POST["mail"];
    $phone = $_POST["phone"];
    $basket = $_POST["basket"];
    $prodtotalprod = $_POST["prodtotalprod"];


    $to = "opendigital@mail.ru";
    $subject = "Письмо с сайта";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: <website@parfumcar.ru>\r\n";


    $mes = $basket."<br/>\r\n";
    $mes .= $prodtotalprod."<br/><br/>\r\n";
    $mes .= "Имя: ".$cli."<br/>\r\n";
    $mes .= "Email: ".$mail."<br/>\r\n";
    $mes .= "Телефон: ".$phone."\r\n";

    $send = mail($to, $subject, $mes, $headers);

?>