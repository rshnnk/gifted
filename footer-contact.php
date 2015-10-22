<?php
   $name = $_POST['title'];
   $number = $_POST['number'];
   $to = 'gifted.kh@gmail.com';
   $from = 'noreply@test.com';
   $subject = "Сообщение на Вашем сайте";
   $subject = "=?utf-8?B?".base64_encode($subject)."?=";
   $headers = "From: $from\r\n Reply-To: $from\r\nContent-type: text/plain; chasrset=utf-8\r\n";
   mail($to, $subject, $name, $number, $headers);
   $redir = $_SERVER['HTTP_REFERER'];
   if (strpos($redir, "mail=1") === false) $redir .= "?mail=1";
   header("Location: $redir");
?>