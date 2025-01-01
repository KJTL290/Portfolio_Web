// Get the image element
const profileImage = document.querySelector('.profile-image');

// Add hover animation
profileImage.addEventListener('mouseenter', () => {
    profileImage.classList.add('image-animate');
});

profileImage.addEventListener('mouseleave', () => {
    profileImage.classList.remove('image-animate');
});

// Optional: Add entrance animation when page loads
document.addEventListener('DOMContentLoaded', () => {
    profileImage.style.opacity = '0';
    profileImage.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        profileImage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        profileImage.style.opacity = '1';
        profileImage.style.transform = 'translateY(0)';
    }, 500);
});