document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.sectionForm, .containerSlider' ); 

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            
            if (sectionTop < windowHeight * 0.85) { 
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 
});
