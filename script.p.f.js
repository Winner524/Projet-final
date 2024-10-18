

             // Script pour afficher un message de confirmation lorsque le formulaire est soumis
             document.getElementById('contact-form').addEventListener('submit', function(event) {
                event.preventDefault(); // Empêche l'envoi du formulaire par défaut
            
                // Obtenir les valeurs du formulaire
                const name = document.getElementById('name').value;
                const number = document.getElementById('number').value;
                const email = document.getElementById('email').value;
            
                // Afficher un message de confirmation
                const confirmationMessage = document.getElementById('confirmation-message');
                confirmationMessage.textContent = `Merci ${name} ! Nous avons reçu votre message et vous contacterons bientôt à l'adresse ${email}.`;
            
                // Réinitialiser le formulaire
                document.getElementById('contact-form').reset();
            });

            function myfunction() {
                document.getElementById("demo").innerHTML = "Winner: 07-87-51-93-09";
                document.getElementById("demo").style.color = "red";
            }