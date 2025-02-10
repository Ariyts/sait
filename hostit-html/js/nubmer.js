  document.addEventListener('DOMContentLoaded', () => {
    // Функция для анимации счёта
    const animateNumbers = () => {
      const stats = document.querySelectorAll('.stat-number');
      
      stats.forEach(stat => {
        const target = +stat.getAttribute('data-target'); // Получаем целевое число
        const increment = target / 60; // Шаг увеличения (можно настроить)
        let count = 0;

        const updateStat = () => {
          const currentCount = +stat.innerText; // Текущее значение

          if (currentCount < target) {
            stat.innerText = Math.ceil(currentCount + increment);
            setTimeout(updateStat, 10); // Скорость обновления (можно настроить)
          } else {
            stat.innerText = target; // Устанавливаем точное значение после завершения анимации
          }
        };

        updateStat();
      });
    };

    // Проверка видимости секции с числами
    const statsSection = document.querySelector('.info-stats-section');
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateNumbers();
          observer.unobserve(statsSection); // Останавливаем наблюдение после выполнения анимации
        }
      });
    }, { threshold: 0.5 }); // Анимация начнётся, когда видна половина секции

    observer.observe(statsSection); // Начинаем следить за секцией
  });

