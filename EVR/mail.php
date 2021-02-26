<?php
    $company = $_POST["company"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];


    $to = "opendigital@mail.ru";
    $subject = "Письмо с сайта";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: <website@opendigital.pro>\r\n";



    if (!empty($company)) {
        $com = "Компания: ".$company."<br/>\r\n";
    } else {
        $com = "";
    }

    $mes .= $com;
    $mes .= "Имя: ".$name."<br/>\r\n";
    $mes .= "Email: ".$email."<br/>\r\n";
    $mes .= "Телефон: ".$tel."\r\n";

    $send = mail($to, $subject, $mes, $headers);

?>