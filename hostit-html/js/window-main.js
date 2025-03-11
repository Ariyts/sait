// Функция для открытия модального окна
function openModal() {
    document.getElementById('contactModal').style.display = 'block';
  }
  
  // Функция для закрытия модального окна
  function closeModal() {
    document.getElementById('contactModal').style.display = 'none';
  }
  
  // Закрытие модального окна при клике вне его области
  window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }
  
  // Обработка отправки формы
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы
  
    // Получаем данные из формы
    const formData = new FormData(this);
  
    // Отправка данных на сервер с помощью Fetch API
    fetch('send_email.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      // Показываем уведомление об успешной отправке
      document.getElementById('notification').style.display = 'block';
      // Очищаем форму
      document.getElementById('contactForm').reset();
      // Закрываем модальное окно через 2 секунды
      setTimeout(closeModal, 2000);
    })
    .catch(error => {
      console.error('Ошибка:', error);
    });
  });