<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
//$name = $_POST['name'];
//$email = $_POST['email'];
//$phone = $_POST['phone'];
//$text = $_POST['text'];
//$file = $_FILES['myfile'];

//так как мы отправляем не форму, нужно переделать наш запрос чтобы он выгляде как форма:
// забрали json который отправили
$entityBody = file_get_contents('php://input');

//декодируем json и делаем из него массив, который будем использовать вместо $_POST
$arr = json_decode($entityBody, true);
$name = $arr['name'];
$email = $arr['email'];
$phone = $arr['phone'];
// Готово - теперь наш запрос похож на запрос из формы

 //var_dump($entityBody);die; //для дебага юзалось
 
// Формирование самого письма
$title = "Тест отправки письма в даль";
$body = "
<h2>Новое письмо</h2>
<b>Имя:</b> {$name}<br>
<b>Почта:</b> {$email}<br><br>
<b>Телефон:</b><br>{$phone}";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'yoko1505'; // Логин на почте
    $mail->Password   = 'пароль для приема запросов в почте'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('yoko1505@yandex.ru', 'Отправитель'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('yoko1505@yandex.ru');  
    //$mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

    // Прикрипление файлов к письму
if (!empty($file['name'][0])) {
    for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
        $filename = $file['name'][$ct];
        if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
            $rfile[] = "Файл $filename прикреплён";
        } else {
            $rfile[] = "Не удалось прикрепить файл $filename";
        }
    }   
}


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);