$(document).ready(function () {
   let val;
   let val1;
   let val2;
   let val3;
   $nomdefamille = $('#Nom'),
      $prenom = $('#Premon'),
      $Email = $('#mail'),
      $Date = $('#date'),
      $envoi = $('#envoi'),
      $reset = $('#rafraichir'),
      $erreur = $('#MessageNom')
   $erreur1 = $('#MessageNom2')
   $erreur2 = $('#MessageNom3')
   $erreur3 = $('#MessageNom4')


   $nomdefamille.keyup(function () {
      $nomdefamille.val($(this).val().toUpperCase())
      if ($(this).val().length < 4) {
         $erreur.text('4 caractéres minimum, chiffres et lettres');
         $erreur.css({
            color: "tomato"
         })
         $(this).css({
            backgroundColor: 'red',
            color: 'pink'
         });
      }
      else {
         $erreur.text("");
         $(this).css({
            backgroundColor: 'green',
            color: 'blue'
         });
      }
   });
   $prenom.keyup(function () {
      $prenom.val($(this).val().charAt(0).toUpperCase() + $(this).val().substr(1).toLowerCase())
      if ($(this).val().length < 4) {
         $erreur1.text('4 caractéres minimum, chiffres et lettres');
         $erreur1.css({
            color: "tomato"
         })
         $(this).css({
            backgroundColor: 'red',
            color: 'pink'
         });
      }
      else {
         $erreur1.text("");
         $(this).css({
            backgroundColor: 'green',
            color: 'white'
         });
      }
   });

   $Email.keyup(function () {
      if ($Email.val().match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/)) {
         $(this).css({
            backgroundColor: 'green',
            color: 'pink'
         });
         $erreur2.text("");
      }
      else {
         $erreur2.text("Adresse mail non valide!");
         $erreur2.css({
            color: "tomato",
         })
         $(this).css({
            backgroundColor: 'red',
            color: 'blue'
         });
      }
   });

   $Date.on("change", function () {
      if ($Date.val()) {
         $(this).css({
            backgroundColor: 'green',
         });
         $erreur3.text("");
      }
      else {
         $erreur3.text("Date non valide!");
         $erreur3.css({
            color: "tomato",
         })
         $(this).css({
            backgroundColor: 'red',
         });
      }
   });
   $envoi.on("click", function (e) {

      if ($nomdefamille.val().length < 4) {
         $erreur.css('display', 'block');
         $erreur.text("Veuillez renseigner un Nom valide!");
         $erreur.css({
            color: "tomato",
         });
         $nomdefamille.css({
            backgroundColor: 'red',
            color: 'red',
         });
         val = 0;
      } else {
         val = 1;
      }
      if ($prenom.val().length < 4) {
         val1 = 0;
         $erreur1.css('display', 'block');
         $erreur1.text("Veuillez renseigner un Prénom valide!");
         $erreur1.css({
            color: "tomato",
         });
         $prenom.css({
            backgroundColor: 'red',
            color: 'red',
         }); val1 = 0;

      } else {
         val1 = 1;
      }
      if (!$Email.val().match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/)) {

         $erreur2.css('display', 'block');
         $erreur2.text("Veuillez renseigner un mail valide!");
         $erreur2.css({
            color: "tomato",
         });

         $Email.css({
            backgroundColor: 'red',
            color: 'red',
         });
         val2 = 0;
      } else {
         val2 = 1;
      }
      if ($Date.val() == "") {

         $erreur3.css('display', 'block');
         $erreur3.text("Veuillez renseigner une date!");
         $erreur3.css({
            color: "tomato",
         });
         $Date.css({
            backgroundColor: "red",
         });
         val3 = 0;
      } else {
         val3 = 1;
         console.log(val3);

      }
      if (val == 0 || val1 == 0 || val2 == 0 || val3 == 0) {
         e.preventDefault();
         return false;
      }
   });
   console.log(val)
   console.log(val1)
   console.log(val2)
   console.log(val3)
   $reset.on("click", function () {

      $nomdefamille.css({
         backgroundColor: 'white',
         color: 'white',
      });
      $erreur.css('display', 'none');
      $prenom.css({
         backgroundColor: 'white',
         color: 'white',
      });
      $erreur1.css('display', 'none');
      $Email.css({
         backgroundColor: 'white',
         color: 'white',
      });
      $erreur2.css('display', 'none');
      $Date.css({
         backgroundColor: 'white',
         color: 'white',
      });
      $erreur3.css('display', 'none');

   });

});
