document.addEventListener('DOMContentLoaded', () => {
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
                currentlyActive.querySelector('.faq-answer').style.maxHeight = 0;
            }
            item.classList.toggle('active');
            const answer = item.querySelector('.faq-answer');
            if (item.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });

    // Privacy Policy Modal Logic
    const privacyLink = document.getElementById('privacy-link');
    const privacyModal = document.getElementById('privacy-modal');
    const closePrivacy = document.getElementById('close-privacy');
    if (privacyLink && privacyModal && closePrivacy) {
        privacyLink.addEventListener('click', function(e) {
            e.preventDefault();
            privacyModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        closePrivacy.addEventListener('click', function() {
            privacyModal.style.display = 'none';
            document.body.style.overflow = '';
        });
        window.addEventListener('click', function(e) {
            if (e.target === privacyModal) {
                privacyModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }
}); 