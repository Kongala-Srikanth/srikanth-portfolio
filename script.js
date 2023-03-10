// Dark Mode

let darkMode = document.getElementById('darkMode');
let bodyElement = document.getElementById('bodyElement');
let introTitle = document.getElementById('introTitleColor');
let blackCard = document.getElementById('blackCard');
let aboutTitle = document.getElementById('aboutTitle');
let aboutText = document.getElementById('aboutText');
let darkModeName = document.getElementById('name');
let skillTitle = document.getElementById('darkModeTitle');
let skillCard = document.getElementById('skillCard');
let projectCard = document.getElementById('projectCard');
let projectName = document.getElementById('projectName');
let subCard1 = document.getElementById('subCard1');
let subCard2 = document.getElementById('subCard2');
let subCard3 = document.getElementById('subCard3');
let subCard4 = document.getElementById('subCard4');
let contactCard = document.getElementById('contactCard');
let contactTitle = document.getElementById('contactTitle');
let followMeCard = document.getElementById('followMeCard');
let followMeTitle = document.getElementById('followMeTitle');
let footerElement = document.getElementById('footerElement');
let navColor = document.getElementById('navColor');

//nav buttons
let homeButton = document.getElementById('homeButton');
let aboutButton = document.getElementById('aboutButton');
let skillsButton = document.getElementById('skillsButton');
let projectsButton = document.getElementById('projectsButton');
let contactButton = document.getElementById('contactButton');
let followMe = document.getElementById('followMe');


darkMode.addEventListener('click',function(){
    bodyElement.classList.toggle('dark-mode-card');
    darkMode.classList.toggle('text-light')
    introTitle.classList.toggle('main-heading-dark')
    blackCard.classList.toggle('black-card')
    aboutTitle.classList.toggle('dark-mode-about-title');
    aboutText.classList.toggle('text-white');
    darkModeName.classList.toggle('dark-mode-name');
    skillTitle.classList.toggle('dark-mode-title');
    skillCard.classList.toggle('dark-mode-card');
    projectCard.classList.toggle('dark-mode-project-card');
    projectName.classList.toggle('dark-mode-project-name');
    subCard1.classList.toggle('dark-mode-card');
    subCard2.classList.toggle('dark-mode-card');
    subCard3.classList.toggle('dark-mode-card');
    subCard4.classList.toggle('dark-mode-card');
    contactCard.classList.toggle('dark-mode-card');
    contactTitle.classList.toggle('dark-mode-title');
    followMeCard.classList.toggle('dark-mode-card')
    followMeTitle.classList.toggle('dark-mode-title');
    footerElement.classList.toggle('footer-icon-color');


    // nav button
    homeButton.classList.toggle('text-light');
    aboutButton.classList.toggle('text-light');
    skillsButton.classList.toggle('text-light');
    projectsButton.classList.toggle('text-light');
    contactButton.classList.toggle('text-light');
    followMe.classList.toggle('text-light');
    
})


// Intro Animation

let introTitleElement = document.getElementById('introTitle');
let myPhoto = document.getElementById('myPhoto');

let titleNames = ['Web Developer','YouTuber','Freelancer'];
let allColors = ['#7BDFF2','#B6CEEB','#F6D9E3'];
let count = 0;


setInterval(function(){

    if (2 === count){
        introTitleElement.textContent = titleNames[count];
        myPhoto.style.backgroundColor = allColors[count];
        myPhoto.style.transition = '0.5s';
        count = 0;
    }else{
        introTitleElement.textContent = titleNames[count];
        myPhoto.style.backgroundColor = allColors[count];
        myPhoto.style.transition = '0.5s';
        count += 1;
    }
},3000)


