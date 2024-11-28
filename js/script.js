document.addEventListener('DOMContentLoaded', function() {
    const filterButton = document.querySelector('.filter-box__btn');
    const filterForm = document.querySelector('.filter');

    filterButton.addEventListener('click', function() {
        // Переключаем видимость формы
        if (filterForm.style.display === 'none' || filterForm.style.display === '') {
            filterForm.style.display = 'flex'; // Показываем форму
        } else {
            filterForm.style.display = 'none'; // Скрываем форму
        }
    });
});