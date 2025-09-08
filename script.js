// Array of colors for the text color change feature
const colors = ['#667eea', '#e53e3e', '#38a169', '#d69e2e', '#9f7aea', '#00b5d8'];
let currentColorIndex = 0;

// Function to show welcome message
function showAboutMe() {
    const welcomeMessage = document.getElementById('aboutMeCard');
    welcomeMessage.classList.add('show');
    
    // Hide the message after 5 seconds
    setTimeout(() => {
        welcomeMessage.classList.remove('show');
    }, 5000);
}

// Function to change text color
const themes = [
    'theme-purple',
    'theme-red',
    'theme-green',
    'theme-yellow',
    'theme-blue'
];
let currentThemeIndex = 0;

function changeTextColor() {
    const colorText = document.getElementById('colorText');
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;

    // Remove all theme classes from body
    document.body.classList.remove(...themes);
    // Add the new theme class
    document.body.classList.add(themes[currentThemeIndex]);

    // Update the text color message
    colorText.textContent = `Theme changed!`;
}

// Add a subtle animation when the page loads
window.addEventListener('load', () => {
    const profileCard = document.querySelector('.profile-card');
    profileCard.style.opacity = '0';
    profileCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        profileCard.style.transition = 'all 0.8s ease';
        profileCard.style.opacity = '1';
        profileCard.style.transform = 'translateY(0)';
    }, 100);
});

// Add click effect to social links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        link.style.transform = 'scale(0.95)';
        setTimeout(() => {
            link.style.transform = 'translateY(-2px)';
        }, 150);
    });
});