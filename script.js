/*==========================================
        PORTFOLIO SCRIPT - PART 1
 Loader + Navbar + Theme + Progress + Top
==========================================*/

//================ LOADER ================//

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});

//================ SCROLL PROGRESS ================//

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const winScroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    progressBar.style.width = scrolled + "%";

});

//================ STICKY HEADER ================//

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#020617";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(0,0,0,.70)";
        header.style.boxShadow = "none";

    }

});

//================ MOBILE MENU ================//

const menuBtn = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show-menu");

});

//close menu after click

document.querySelectorAll("#navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show-menu");

    });

});

//================ THEME TOGGLE ================//

const themeBtn = document.getElementById("themeToggle");

let darkTheme = true;

themeBtn.addEventListener("click", () => {

    if (darkTheme) {

        document.documentElement.style.setProperty("--dark", "#ffffff");
        document.documentElement.style.setProperty("--secondary", "#f3f4f6");
        document.documentElement.style.setProperty("--card", "#ffffff");
        document.documentElement.style.setProperty("--text", "#111111");
        document.documentElement.style.setProperty("--heading", "#111111");

        document.body.style.background = "#ffffff";
        document.body.style.color = "#111111";

        themeBtn.innerHTML =
            '<i class="fas fa-sun"></i>';

    } else {

        document.documentElement.style.setProperty("--dark", "#020617");
        document.documentElement.style.setProperty("--secondary", "#0f172a");
        document.documentElement.style.setProperty("--card", "#111827");
        document.documentElement.style.setProperty("--text", "#d1d5db");
        document.documentElement.style.setProperty("--heading", "#ffffff");

        document.body.style.background = "#020617";
        document.body.style.color = "#d1d5db";

        themeBtn.innerHTML =
            '<i class="fas fa-moon"></i>';

    }

    darkTheme = !darkTheme;

});

//================ BACK TO TOP ================//

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("show-menu");
    });
}

//================ ACTIVE NAV LINK ================//

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

//================ SMOOTH SCROLL ================//

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

//================ END PART 1 ================//
/*==========================================
        PORTFOLIO SCRIPT - PART 2
 Project Search + Filter + Modal + Toast
==========================================*/

//================ PROJECT SEARCH ================//

const searchInput = document.getElementById("searchProject");
const projectCards = document.querySelectorAll(".project-card");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        projectCards.forEach(card => {

            const title =
                card.querySelector("h3").textContent.toLowerCase();

            const desc =
                card.querySelector("p").textContent.toLowerCase();

            if (
                title.includes(value) ||
                desc.includes(value)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

//================ PROJECT FILTER ================//

const filterBtns =
    document.querySelectorAll(".filter-btn");

filterBtns.forEach(btn => {

    btn.addEventListener("click", function () {

        filterBtns.forEach(b =>
            b.classList.remove("active")
        );

        this.classList.add("active");

        const filter =
            this.dataset.filter;

        projectCards.forEach(card => {

            const category =
                card.dataset.category;

            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

//================ PROJECT MODAL ================//

const modal =
    document.getElementById("projectModal");

const modalImg =
    document.getElementById("modalImg");

const modalTitle =
    document.getElementById("modalTitle");

const modalDesc =
    document.getElementById("modalDesc");

const modalLink =
    document.getElementById("modalLink");

const detailsBtns =
    document.querySelectorAll(".details-btn");

const closeModal =
    document.querySelector(".close");

detailsBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        const card =
            btn.closest(".project-card");

        const img =
            card.querySelector("img").src;

        const title =
            card.querySelector("h3").textContent;

        const desc =
            card.querySelector("p").textContent;

        modalImg.src = img;
        modalTitle.textContent = title;
        modalDesc.textContent = desc;

        modalLink.href = "#";

        modal.style.display = "flex";

    });

});

if (closeModal) {

    closeModal.addEventListener("click", () => {

        modal.style.display = "none";

    });

}

window.addEventListener("click", function (e) {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

//================ CONTACT FORM ================//

const contactForm =
    document.getElementById("contactForm");

const toast =
    document.getElementById("toast");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        toast.style.display = "block";

        setTimeout(() => {

            toast.style.display = "none";

        }, 3000);

        contactForm.reset();

    });

}

//================ TOAST ANIMATION ================//

if (toast) {

    toast.style.transition =
        "all .4s ease";

}

//================ PROJECT CARD HOVER ================//

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";

    });

});

//================ END PART 2 ================//
/*==========================================
        PORTFOLIO SCRIPT - PART 3
 GitHub API + Visitor + Theme + Music
==========================================*/

//================ GITHUB PROFILE =================//

const githubUser = "sufiyanmansoori";

async function loadGithubProfile() {

    try {

        const response = await fetch(
            `https://api.github.com/users/${githubUser}`
        );

        if (!response.ok) {
            throw new Error("GitHub API Error");
        }

        const data = await response.json();

        document.getElementById("github-avatar").src =
            data.avatar_url;

        document.getElementById("github-name").textContent =
            data.name || data.login;

        document.getElementById("github-bio").textContent =
            data.bio || "Python | Django | Full Stack Developer";

        document.getElementById("repo-count").textContent =
            data.public_repos;

        document.getElementById("followers").textContent =
            data.followers;

        document.getElementById("following").textContent =
            data.following;

        document.getElementById("github-link").href =
            data.html_url;

    } catch (error) {

        console.log(error);

        document.getElementById("github-name").textContent =
            "Unable to load GitHub Profile";

    }

}

loadGithubProfile();


//================ VISITOR COUNTER =================//

const visitorCount =
    document.getElementById("visitorCount");

let count =
    Number(localStorage.getItem("visitorCount")) || 0;

count++;

localStorage.setItem("visitorCount", count);

if (visitorCount) {

    visitorCount.textContent =
        String(count).padStart(4, "0");

}


//================ THEME COLOR SWITCHER =================//

const colorButtons =
    document.querySelectorAll(".theme-colors .color");

colorButtons.forEach(color => {

    color.addEventListener("click", () => {

        const selectedColor =
            color.dataset.color;

        document.documentElement.style.setProperty(
            "--primary",
            selectedColor
        );

        localStorage.setItem(
            "themeColor",
            selectedColor
        );

    });

});

const savedColor =
    localStorage.getItem("themeColor");

if (savedColor) {

    document.documentElement.style.setProperty(
        "--primary",
        savedColor
    );

}


//================ MUSIC =================//

const musicBtn =
    document.getElementById("musicBtn");

const bgMusic =
    document.getElementById("bgMusic");

let musicPlaying = false;

if (musicBtn && bgMusic) {

    musicBtn.addEventListener("click", () => {

        if (musicPlaying) {

            bgMusic.pause();

            musicBtn.innerHTML = "🎵";

        } else {

            bgMusic.play();

            musicBtn.innerHTML = "⏸";

        }

        musicPlaying = !musicPlaying;

    });

}


//================ SIMPLE ANIMATIONS =================//

const animatedCards =
    document.querySelectorAll(
        ".project-card,.skill-card,.about-card,.education-card"
    );

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0px)";

            }

        });

    }, {
        threshold: 0.2
    });

animatedCards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".7s";

    observer.observe(card);

});


//================ COPY EMAIL =================//

const emailElement =
    document.querySelector(".contact-box:nth-child(2) p");

if (emailElement) {

    emailElement.style.cursor = "pointer";

    emailElement.addEventListener("click", () => {

        navigator.clipboard.writeText(
            emailElement.textContent
        );

        alert("Email copied successfully.");

    });

}


//================ END PART 3 =================//
/*==========================================
        PORTFOLIO SCRIPT - PART 4
 ChatBot + Cursor + Effects + Init
==========================================*/


//================ AI CHATBOT =================//

const chatbotBtn = document.getElementById("chatbot-btn");
const chatBox = document.getElementById("chatbox");
const closeChat = document.getElementById("closeChat");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatBody = document.getElementById("chatBody");

chatbotBtn.addEventListener("click", () => {

    chatBox.style.display = "block";

});

closeChat.addEventListener("click", () => {

    chatBox.style.display = "none";

});

const replies = {

    hello:
        "👋 Hello! Welcome to my portfolio.",

    hi:
        "Hi, How can I help you?",

    skills:
        "💻 HTML, CSS, JavaScript, Python, Django, React, MySQL, Git, GitHub.",

    projects:
        "📁 AI Chatbot, Portfolio Website, Face Recognition, Student Management System.",

    education:
        "🎓 B.Tech Computer Science Engineering (2023-2027).",

    experience:
        "💼 Python & Django Developer Intern at Congifies Technology.",

    contact:
        "📧 yourmail@gmail.com",

    github:
        "🔗 GitHub: https://github.com/sufiyanmansoori"

};

function addMessage(text, type) {

    const div = document.createElement("div");

    div.className = type;

    div.style.margin = "10px";
    div.style.padding = "10px";
    div.style.borderRadius = "10px";

    if (type === "user") {

        div.style.background = "#00e5ff";
        div.style.color = "#000";
        div.style.textAlign = "right";

    } else {

        div.style.background = "#1f2937";
        div.style.color = "#fff";

    }

    div.innerHTML = text;

    chatBody.appendChild(div);

    chatBody.scrollTop = chatBody.scrollHeight;

}

function botReply() {

    let msg = userInput.value.toLowerCase().trim();

    if (msg === "") return;

    addMessage(userInput.value, "user");

    let answer = "🤖 Sorry, I don't understand.";

    for (let key in replies) {

        if (msg.includes(key)) {

            answer = replies[key];

        }

    }

    setTimeout(() => {

        addMessage(answer, "bot");

    }, 500);

    userInput.value = "";

}

sendBtn.addEventListener("click", botReply);

userInput.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        botReply();

    }

});


//================ CUSTOM CURSOR =================//

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", function(e){

    cursorDot.style.left = e.clientX + "px";
    cursorDot.style.top = e.clientY + "px";

    cursorOutline.style.left = (e.clientX-14) + "px";
    cursorOutline.style.top = (e.clientY-14) + "px";

});


//================ FLOATING BUTTON EFFECT =================//

const floatingButtons = document.querySelectorAll(
".floating-social a,.hero-social a,.footer-social a");

floatingButtons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-8px) scale(1.1)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0px)";

    });

});


//================ SCROLL INDICATOR =================//

const scrollIndicator =
document.querySelector(".scroll-down");

window.addEventListener("scroll",()=>{

    if(window.scrollY>150){

        scrollIndicator.style.opacity="0";

    }else{

        scrollIndicator.style.opacity="1";

    }

});


//================ KEYBOARD SHORTCUT =================//

document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        chatBox.style.display="none";

    }

});


//================ PAGE FADE =================//

document.body.style.opacity="0";

window.onload=()=>{

    document.body.style.transition="opacity .8s";

    document.body.style.opacity="1";

};


//================ CONSOLE MESSAGE =================//

console.log(
"%cMohd Sufiyan Portfolio Loaded Successfully 🚀",
"color:#00e5ff;font-size:18px;font-weight:bold;"
);


//================ CURRENT YEAR =================//

const year = new Date().getFullYear();

const copy = document.querySelector(".copyright");

if(copy){

    copy.innerHTML =
    `© ${year} Mohd Sufiyan | All Rights Reserved.`;

}


//================ PREVENT RIGHT CLICK (OPTIONAL) =================//

document.addEventListener("contextmenu",function(e){

    e.preventDefault();

});


//================ DISABLE F12 (OPTIONAL) =================//

document.addEventListener("keydown",function(e){

    if(e.key==="F12"){

        e.preventDefault();

    }

});


//================ END =================//

console.log("Portfolio Ready ✅");