const projects = [
  {
    title: "Custom Actor Button Plugin",
    description: "Adds a configurable button to the Actor Directory in Foundry VTT v13."
  },
  {
    title: "SocketSync Tool",
    description: "Real-time collaboration plugin using Foundry's socket framework."
  },
  {
    title: "DialogV2 Interaction Suite",
    description: "A modular set of interactive components for dynamic UIs."
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
