<?php

	if(isset($_POST['submit'])) {

		$to = "prabeshregmi17@gmail.com";
		$Subject = "Email from my Portfolio site";
		$email = $_POST['email'];
		$message = $_POST['message'];
		$headers = "From: ".$email;

		mail($to, $Subject, $message, $headers);
		header("Location: index.php?mailsend");
	}
	
	
?>