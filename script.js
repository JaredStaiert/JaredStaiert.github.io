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


const languages = [
  {
    language: "Java",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
  },
  {
    language: "Python",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg"
  },
  {
    language: "Javascript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
  },
  {
    language: "TypeScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
  },
  {
    language: "CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
  },
  {
    langage: "HTML",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
  }
];

const languageContainer = document.getElementById('language_div');

languages.forEach(lang => {
  const div = document.createElement('div');
  div.className = 'language-card';

  const img = document.createElement("img");
  img.src = lang.url;
  img.alt = lang.language;

  div.appendChild(img);

  // div.textContent = lang;
  languageContainer.appendChild(div);
});
