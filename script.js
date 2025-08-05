const projects = [
  {
    title: "RPG TOOL",
    description: "Full-stack web application enabling users to create customizable narrative settings, build dynamic timelines, and manage character profiles with seamless state synch and efficient data fetching."
  }
];

const projectContainer = document.getElementById('project_div');

projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'project_card';
  div.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
  projectContainer.appendChild(div);
});


const languages = ["Java", "Python", "TypeScript"];

const languageContainer = document.getElementById('language_div');

languages.forEach(lang => {
  const div = document.createElement('div');
  div.className = 'language-card';
  div.textContent = lang;
  languageContainer.appendChild(div);
});
