<?php
$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->CharSet = 'utf-8';

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'myglocourse@gmail.com';                     // SMTP username
    $mail->Password   = 'MyProjekt01';                            // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('myglocourse@gmail.com', 'Вадим');
    $mail->addAddress('vadimkashkin@mail.ru');     // Add a recipient


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Заказ на клубную карту!';
    $mail->Body    = "Имя пользователя: ${userName}, его телефон: ${userPhone}, а почта его такая: ${userMail}, его вопрос: ${userQuestion}";


    $mail->send();
    echo 'Ваше письмо отправлено по нужному адресу';
} catch (Exception $e) {
    echo "Опа! Что-то пошло не так!. Код ошибки: {$mail->ErrorInfo}";
}


    //if ($mail->send()) {
    // echo  "Зашибись!";  header('location: thanks.html')
   // } else {
     //   echo "Ничего не ушло, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
   // }
    
//} catch (Exception $e) {
 //   echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
//}