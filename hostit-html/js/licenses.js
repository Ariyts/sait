document.addEventListener('DOMContentLoaded', function () {
  const licenseItems = document.querySelectorAll('.license_item');

  licenseItems.forEach(item => {
    const header = item.querySelector('.license_header');
    header.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
});