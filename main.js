const toggleButton = document.getElementById('toggleButton');
const naviList = document.getElementById('naviList');

toggleButton.addEventListener('click', () => {
    naviList.classList.toggle('active');
});