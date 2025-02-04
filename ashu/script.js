
document.addEventListener('DOMContentLoaded', function() {
    // Select all FAQ question elements
    const faqQuestions = document.querySelectorAll('.faq .lll');

    faqQuestions.forEach(function(question) {
        const icon = question.querySelector('svg');
        const answer = question.nextElementSibling;
        
        question.addEventListener('click', function() {
            // Toggle the display of the answer
            answer.classList.toggle('show');
            
            // Toggle the rotation of the icon
            icon.classList.toggle('rotate');
        });
    });
});

document.querySelector('.btn-red2').addEventListener('click', function() {
    const festivalName = document.querySelector('.ashu').value.trim().toLowerCase(); 
    const sections = document.querySelectorAll('section');
    
    let found = false;

    if (festivalName === "") {
        alert('Please enter a festival name.');
        return; 
    }
    
    sections.forEach(section => {
        const title = section.querySelector('h1').textContent.toLowerCase();
        if (title.includes(festivalName)) {
            section.scrollIntoView({ behavior: 'smooth' });
            found = true;
        }
    });

    if (!found) {
        alert('No matching festival found! Please check your spelling or try another name.');
    }
});

document.querySelector('.btn1').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


   
const signInBtn = document.getElementById('sign-in-btn');
const modal = document.getElementById('sign-in-modal');
const closeBtn = document.querySelector('.close');
const signInForm = document.getElementById('sign-in-form');

signInBtn.addEventListener('click', function() {
    modal.style.display = "block"; 
});

closeBtn.addEventListener('click', function() {
    modal.style.display = "none"; 
});


window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});


signInForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);

 
    modal.style.display = "none";
    alert('Sign In successful!'); 
});

document.querySelector('#about-btn').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,  
        behavior: 'smooth'  
    });
});

document.querySelector('#home-btn').addEventListener('click', function() {
    location.reload(); 
});







