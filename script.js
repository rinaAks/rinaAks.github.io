function showProject(projectNumber) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.style.display = 'none';
    });
    document.getElementById(`project${projectNumber}`).style.display = 'block';
}

// 1. Находим ВСЕ кнопки с этим классом
const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    // 2. Находим именно тот блок, который идет сразу ПОСЛЕ нажатой кнопки
    const content = btn.nextElementSibling;
    
    // 3. Переключаем класс только у этого блока
    content.classList.toggle('open');
  });
});