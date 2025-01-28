
# REACT + TS



# FORMULAIRE
## Sécuriser le formulaire : principales mesures à mettre en place :

* Utiliser un CAPTCHA ou reCAPTCHA pour bloquer les soumissions automatisées de spam. Le reCAPTCHA v3 de Google est particulièrement efficace et n'affecte pas l'expérience utilisateur.
* Implémenter une validation côté serveur et client des données saisies, notamment pour le format du numéro de téléphone. Un regex peut être utilisé pour vérifier que le numéro commence par 0 et contient 10 chiffres.
* Chiffrer les données transmises en utilisant le protocole HTTPS.
* Utiliser des méthodes d'envoi d'e-mail sécurisées pour les notifications du formulaire.
* Limiter le nombre de soumissions par adresse IP pour prévenir les attaques par force brute.
* Ajouter une case à cocher pour le consentement au traitement des données personnelles, conformément au RGPD.

# BACKEND
## Exemple fichier EXPRESS backend minimal 
### dépendances : express, nodemailer



```javascript
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

app.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Configuration de nodemailer
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'votre-email@gmail.com',
            pass: 'votre-mot-de-passe'
        }
    });

    const mailOptions = {
        from: email,
        to: 'votre-email-de-reception@gmail.com',
        subject: `Nouveau message de ${name}`,
        text: `
            Nom: ${name}
            Email: ${email}
            Téléphone: ${phone || 'Non fourni'}
            
            Message:
            ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Email envoyé avec succès');
    } catch (error) {
        res.status(500).send('Erreur lors de l\'envoi de l\'email');
    }
});