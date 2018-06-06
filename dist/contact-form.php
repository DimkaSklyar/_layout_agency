<?php 
if($_POST) 
{ 
$to = "cactus8@yandex.ru"; //куда отправлять письмо 
$subject = "Вопрос с сайта"; //тема 
$message = '<span style="font-weight:bold;color:#ff6600;font-size:18px;"><i>Обратная связь!</i> </span><br><br> 
Имя: <span style="font-weight:bold;color:#339900;">'.$_POST['contact-name'].'</span><br> 
E-mail: <span style="font-weight:bold;color:#339900;">'.$_POST['contact-mail'].'</span><br>
Сообщение: <span style="font-weight:bold;color:#339900;">'.$_POST['contact-message'].'</span><br>'; 
$headers = "Content-type: text/html; charset=UTF-8 \r\n"; 
$headers .= "From: info@my-site.ru\r\n"; // от кого, придумайте ящик или укажите почту своего сайта. 
$result = mail($to, $subject, $message, $headers); 

if ($result){ 
echo "<p class='success'>Сообщение успешно отправлено."; 
} 
} 
?>