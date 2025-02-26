<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Получаем данные из формы
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $note = htmlspecialchars($_POST['note']);

    // Адрес, на который будет отправлено письмо
    $to = "geoskripko@rosatom.ru";

    // Тема письма
    $subject = "Новое сообщение с сайта";

    // Тело письма
    $message = "ФИО: $name\n";
    $message .= "Телефон: $phone\n";
    $message .= "Email: $email\n";
    $message .= "Примечание: $note\n";

    // Заголовки письма
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo "Сообщение успешно отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
} else {
    echo "Некорректный запрос.";
}
?>