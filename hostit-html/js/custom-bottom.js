// Получаем элементы
var modal = document.getElementById("contactModal");
var btn = document.getElementById("contactBtn");
var span = document.getElementsByClassName("close")[0];
var notification = document.getElementById("notification");

// Открываем модальное окно при нажатии на кнопку
btn.onclick = function() {
  modal.style.display = "block";
  notification.style.display = "none"; // Скрываем уведомление при открытии формы
}

// Закрываем модальное окно при нажатии на крестик
span.onclick = function() {
  modal.style.display = "none";
}

// Закрываем модальное окно при клике вне его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Обработка отправки формы
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Предотвращаем стандартную отправку формы

  // Собираем данные формы
  var formData = new FormData(this);

  // Отправляем данные на сервер с помощью Fetch API
  fetch("send_email.php", {
    method: "POST",
    body: formData
  })
    .then(response => response.text()) // Получаем ответ от сервера
    .then(data => {
      console.log(data); // Выводим ответ в консоль для отладки
      notification.style.display = "block"; // Показываем уведомление
      setTimeout(function() {
        modal.style.display = "none"; // Закрываем модальное окно через 2 секунды
      }, 2000);
    })
    .catch(error => {
      console.error("Ошибка:", error);
      notification.textContent = "Ошибка при отправке сообщения."; // Показываем ошибку
      notification.style.backgroundColor = "#f8d7da";
      notification.style.color = "#721c24";
      notification.style.display = "block";
    });
});