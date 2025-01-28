// Validation du numéro de téléphone
function validatePhoneNumber(phoneNumber) {
    const phoneRegex = /^(0[1-9])[0-9]{8}$/;
    return phoneRegex.test(phoneNumber);
}

// Dans le gestionnaire du formulaire
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Validation des champs
    if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs obligatoires');
        return;
    }

    // Validation optionnelle du téléphone s'il est rempli
    if (phone && !validatePhoneNumber(phone)) {
        alert('Numéro de téléphone invalide. Utilisez le format 0612345678');
        return;
    }

    // Simulation d'envoi (à remplacer par une vraie logique backend)
    alert(`Merci ${name}, votre message a été envoyé !`);
    contactForm.reset();
});
