<?php

if (!empty($_POST)) {

	$messag = "Вам пришло новое сообщение с сайта: \n "
	. "Имя отправителя: " . $_POST['user'] . "\n"
	. "Телефон: " . $_POST['phone'] . "\n"
	. "Email: " . $_POST['email'] . "\n"
	. "Сообщение: \n " . $_POST['message'];

	$result = mail("Emil-Absalyam.off@yandex.ru", "Сообщение с сайта", $messag );
	
	if ($result) {
		echo "<script>alert(\"Сообщение успешно отправлено\");</script>";
	} else { 
		echo "<script>alert(\"Что-то пошло не так\");</script>";

	}}
?>