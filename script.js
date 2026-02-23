function showProject(projectNumber) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.style.display = 'none';
    });
    document.getElementById(`project${projectNumber}`).style.display = 'block';
}
