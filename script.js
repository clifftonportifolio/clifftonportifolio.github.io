const hero = document.getElementById("hero");
const cardsContainer = document.querySelector(".cards-container");

const content = {
    home: `
        <h1>I'm Cliffton Kapaga</h1>
        <p>Aspiring software developer | Data analyst | Mechanical Engineer | Automation Enthusiast</p>
    `,
    about: `
        <div class="card">
            <h2>About Me</h2>
            <p>I build softwares and automated systems</p>
        </div>
        <div class="card">
            <h3>Education</h3>
            <p>Bachelor of Engineering in Mechanical Engineering</p>
            <p>Masters Degree in System, Control and Mechatronics</p>
        </div>
        <div class="card">
            <h3>Experience</h3>
            <p>Mechanical Engineer at RUWASA Iringa (2023-Now)</p>
        </div>
    `,
    projects: `
        <h2>Projects</h2>
        <ul>
            <li><strong>Project One:</strong> Responsive Website Built with HTML & CSS</li>
            <li><strong>Project Two:</strong> Simple Calculator Built with HTML, CSS & JS</li>
        </ul>
    `,
    contact: `
        <h2>Contact Me</h2>
        <p>Email: engineerkapaga@gmail.com</p>
        <p>Whatsapp: +255711 384 611</p>
    `
};

const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const key = link.getAttribute('data-content');

        // Clear hero content except cards container
        hero.querySelectorAll(":scope > :not(.cards-container)").forEach(el => el.remove());

        if (key === "about") {
            cardsContainer.innerHTML = content[key];
        } else {
            cardsContainer.innerHTML = "";
            hero.insertAdjacentHTML('afterbegin', content[key]);
        }
    });
});