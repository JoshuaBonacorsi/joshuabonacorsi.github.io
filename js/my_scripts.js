function toggleSkill(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.skill-arrow');
    
    // Toggle active class on content
    content.classList.toggle('active');
    
    // Toggle arrow direction
    arrow.classList.toggle('active');
}