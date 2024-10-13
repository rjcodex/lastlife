let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

thumbnail.appendChild(thumbnailItems[0])

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next')
}


// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev')
}


function moveSlider(direction) {
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        slider.classList.add('next')
    } else {
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        slider.classList.add('prev')
    }


    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Remove the event listener after it's triggered once
}

// Optional: You can adjust speed dynamically or pause on hover
document.querySelector('.sponsors').addEventListener('mouseover', function () {
  this.style.animationPlayState = 'paused';
});

document.querySelector('.sponsors').addEventListener('mouseout', function () {
  this.style.animationPlayState = 'running';
});


// Smooth scrolling for the game list
const gamesList = document.getElementById('games-list');
const scrollAmount = 200; // Define the scroll amount

document.getElementById('left-btn').addEventListener('click', () => {
    gamesList.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

document.getElementById('right-btn').addEventListener('click', () => {
    gamesList.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

// For touch devices (to handle touch event)
document.getElementById('left-btn').addEventListener('touchstart', (event) => {
    event.preventDefault(); // Prevent default touch behavior
    gamesList.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

document.getElementById('right-btn').addEventListener('touchstart', (event) => {
    event.preventDefault(); // Prevent default touch behavior
    gamesList.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});



document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const emailInput = document.getElementById('emailInput');

    // Perform actions like sending email to server here
    console.log('Subscribed email:', emailInput.value); // Logging for reference

    // Clear the input field after submission
    emailInput.value = '';

    // Optionally, display a message to the user that their subscription was successful
    alert('Thank you for subscribing!');
});



// Get the button by its ID
const topButton = document.getElementById('topButton');

// Add a click event listener
topButton.addEventListener('click', function() {
  alert('Button clicked!');
});
