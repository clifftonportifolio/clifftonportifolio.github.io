const hero = document.getElementById("hero");
const content = {
    home: `<h1> I'm Cliffton Kapaga</h1>
           <p>Aspiring software developer | Data analyst | Mechanical Engineer | Automation Enthusiast</p>`,
    about: `<h2>About Me</h2>
            <p>I build softwares and automated systems. i enjoy learning new technologies and applying them in real life</p>`,
    projects: `<h2>Projects</h2>
               <ul>
                   <li><strong>project One:</strong>Responsive Website built with HTML & CSS</li>
                   <li><strong>Project Two</strong>simple calculator built with HTML, CSS & JS</li>
               </ul>`,
    contact: `<h2>Contact Me</h2>
             <p>Email: engineerkapaga@gmail.com</p>
             <p>whatsapp: +255711 384 611</p>`
};
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const key = link.getAttribute('data-content');
        hero.innerHTML = content[key];
    })
})

