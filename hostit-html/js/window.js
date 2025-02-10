// Функция для открытия модального окна
function openModal() {
  document.getElementById('orderServiceModal').style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
  document.getElementById('orderServiceModal').style.display = 'none';
}

// Закрытие модального окна при клике вне его области
window.onclick = function(event) {
  const modal = document.getElementById('orderServiceModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

// Обработка отправки формы
document.getElementById('orderForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Предотвращаем стандартную отправку формы

  // Получаем данные из формы
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const comment = document.getElementById('comment').value;

  // Здесь можно добавить логику отправки данных на сервер
  console.log('Email:', email);
  console.log('Телефон:', phone);
  console.log('Комментарий:', comment);

  // Закрываем модальное окно после отправки
  closeModal();
  alert('Ваша заявка успешно отправлена!');
});