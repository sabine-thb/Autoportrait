document.addEventListener("DOMContentLoaded", function () {

    console.log(analogies);

    var numCase;
    numCase = 0;

    var currenthtml;

    data.forEach(function (currentitem) { //currentitem correspond au nom que vont avoir les elements de mon tableau individuellement
        currenthtml = " <div><p class=\"scroll\"id=\"section" + numCase + "\">Ancre</p></div><div class=\"contour scrolltab\" ><section class=\"section " + numCase + "\">"
            + "<p class=\"ligne gauche\"></p>\</p>\<h2 class=\"titresection oscille2\">Si j’étais " + currentitem["analogie"] + "...</h2><p class=\"ligne droite\"></p></p>"
            + " <h3 class =\"oscille\"><span class=\"phrase1\">Si j’étais " + currentitem["analogie"] + ", je serais " + currentitem["valeurAnalogie"] + ". </span><br><br> Parce que " + currentitem["psk"] + "</h3>"
            + "<img src=\"" + currentitem["illustration"] + "\" class=\"image oscille " + numCase + "\"><a href=\"#section" + (numCase + 1) + "\" class=\"fleche\"><img src=\"Images/flèche.svg\"></a><br> "
            + "</section></div>";
        //On recup les elements du tableau data que l'on appelle currentitem et on dis que le contenu html correspond a la propriete analogie du 1er objet du tableau data
        console.log(currentitem)
        var analogieshtml = document.querySelector('.liste-analogies')
        analogieshtml.innerHTML = analogieshtml.innerHTML + currenthtml

        numCase++ // on met ++ pour incrémenter ( ajouter 1) la valeur du tablmeau numCase pour que le contenu html suivant corresponde au deuxième objet du tableau data, et ainsi de suite...


    })

    console.log(data);


    //Créer une barre de ronds à droite pour voir qd on déroule
    //Animation de texte, changement de couleur, etc.
    //Animation curseur?


    var textpop1 = document.querySelector('.popup1'); //popup pour les crédits

    var textclick1 = document.querySelectorAll('.text-cliquable1');

    textclick1.forEach(function (element) {
        element.addEventListener('click', function (window) {
            textpop1.classList.add('popup-visible');
            textpop1.classList.remove('popup-invisible');
            document.querySelector('.retouraccueil').style.display = "none"; //Pour que le retour au menu disparaisse quand le popup apparait 
            document.querySelector('.participation').style.display = "none"; //Pour que le "toi aussi crées ton analogie disparaisse quand les crédits s'affichent"


        });


    });

    var textclick2 = document.querySelectorAll('.cancel');//Pour que le popup disparaisse quand on clique sur la croix

    textclick2.forEach(function (element) {
        element.addEventListener('click', function (window) {
            textpop1.classList.add('popup-invisible');
            textpop1.classList.remove('popup-visible');
            document.querySelector('.retouraccueil').style.display = "block"; // Pour que le retour en haut réaparaisse quand le popup disparait 
            document.querySelector('.participation').style.display = "block";

            console.log("texte")
        });


    });

    var textpop2 = document.querySelector('.popup2'); //popup pour le formulaire

    var textclick3 = document.querySelectorAll('.text-cliquable2');

    textclick3.forEach(function (element) {
        element.addEventListener('click', function (window) {
            textpop2.classList.add('popup-visible');
            textpop2.classList.remove('popup-invisible');

        });


    });

    var textclick4 = document.querySelectorAll('.cancel'); // Pour que le formulaire disparaisse quand on clique sur la croix 
    textclick4.forEach(function (element) {
        element.addEventListener('click', function (window) {
            textpop2.classList.add('popup-invisible');
            textpop2.classList.remove('popup-visible');



            console.log("texte")
        });

    })



    var textclick4 = document.querySelectorAll('.entrer'); // Pour que le formulaire disparaisse quand on quitte sur le bouton d'entrée 
    textclick4.forEach(function (element) {
        element.addEventListener('click', function (window) {
            textpop2.classList.add('popup-invisible');
            textpop2.classList.remove('popup-visible');



            console.log("texte")
        });

    })



    //Je crée maintenant une focntion pour que le lien de retour vers le menu n'apparaisse qu'à un certain mioment du scroll
    function retourAccueil() {
        var retourAccueil = document.querySelector('.retouraccueil');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 870) {
                retourAccueil.classList.add('popup-visible'); //J'utilise à nouveau les class des pop-up puisque c'est ce dont j'ai besoin: deux classes aux display none et block 
                retourAccueil.classList.remove('popup-invisible');
            }
            else {
                retourAccueil.classList.add('popup-invisible')
                retourAccueil.classList.remove('popup-visible')
            }
        })
    }

    retourAccueil(); //J'appelle ma fonction crée ci-dessus




    function cacheFlèche() { //fonction pour cacher la flèche de la dernière section
        var flecheElements = document.querySelectorAll('.fleche'); // Je récupère tous mes éléments avec la classe flèche
        var derniereflecheElement = flecheElements[flecheElements.length - 1]; // Je recupère le nombre de mes éléments flèche et j" sélectionne le dernier avec la propriété length-1
        flecheElements.forEach(function (fleche) {
            fleche.style.display = "block";
        })
        derniereflecheElement.style.display = "none";
    }

    cacheFlèche(); //j'appelle ma fonction cacheFlèche


    function animations() { //Je crée une fonction qui met en place les 2 types d'animations

        var oscillation = document.querySelectorAll('.oscille') //Pour faire osciller de droite à gauche et de gauche à droite
        for (var oscillation1 of oscillation) {
            oscillation1.style.animation = 'oscillate 6s ease-in-out infinite';
        }

        var oscillation2 = document.querySelectorAll('.oscille2') // Pour faire osciller de plus en plus gros et vice-versa
        for (var oscillation3 of oscillation2) {
            oscillation3.style.animation = 'oscillate2 6s ease-in-out infinite';
        }

    }

    animations(); // J'appelle ma fonction animations


    var claviermonAnalogie = document.querySelector('#monAnalogie')
    var claviervaleurAnalogie = document.querySelector('#valeurAnalogie')
    var clavierpsk = document.querySelector('#psk')
    var clavierimageAnalogie = document.querySelector('#imageAnalogie')


    var nouvelleSection = document.querySelectorAll('input')  //Pour la créa d'une nouvelle section avec le formulaire
    nouvelleSection.forEach(function (element) {
        element.addEventListener('keyup', function (e) { // se déclenche lorsque la touche du clavier est relevée
            console.log(claviermonAnalogie.value)
            document.querySelector('.ajout').innerHTML = " <div><p class=\"scroll\"id=\"section" + numCase + "\">Ancre</p></div><div class=\"contour\" ><section class=\"section " + numCase + "\">"
                + "<p class=\"ligne gauche\"></p>\</p>\<h2 class=\"titresection oscille2\">Si j’étais " + claviermonAnalogie.value + "...</h2><p class=\"ligne droite\"></p></p>"
                + " <h3 class=\"oscille\"><span class=\"phrase1\">Si j’étais " + claviermonAnalogie.value + ", je serais " + claviervaleurAnalogie.value + ". </span><br><br> Parce que " + clavierpsk.value + "</h3>"
                + "<img src=\"" + clavierimageAnalogie.value + "\" class=\"image oscille " + numCase + "\"><a href=\"#section" + (numCase + 1) + "\" class=\"fleche\"><img src=\"Images/flèche.svg\"></a> "
                + "</section></div>";



            cacheFlèche();
            // var elementSections = document.querySelectorAll('.section'); // Je récupère tous mes éléments avec la classe section
            // var nombreElements = elementSections.length-1;
            // document.querySelectorAll('.fleche')[nombreElements-1].click() ; 

            // Le code précédent n'est finalement pas pertinent
            console.log()

            animations(); // Je rappelle ma fonction animations pour animer la section crée 

        })


        console.log(nouvelleSection);

    });



    var sectionAjout=document.querySelector('.ajout') // Je sélectionne ma div qui va être remplie avec le contenu du formulaire

    var claviermail = document.querySelector('#mail')



    var boutonenvoi = document.querySelector('.entrer')
    boutonenvoi.addEventListener('click', function () {
        console.log('https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=sabine&courriel=' + claviermail.value + '&  message={  Si j étais ' + claviermonAnalogie.value + ' Je serais ' + claviervaleurAnalogie.value + ' Parce que ' + psk.value + ' image :' + clavierimageAnalogie.value + '} ')

        var url = 'https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=sabine&courriel=' + claviermail.value + '&  message={  Si j étais ' + claviermonAnalogie.value + ' Je serais ' + claviervaleurAnalogie.value + ' Parce que ' + psk.value + ' image: ' + clavierimageAnalogie.value + '} '

        fetch(url).then(function (response) {
            response.json().then(function (data) {
                console.log("Réponse reçue : ")
                console.log(data);
            })
        })

        sectionAjout.scrollIntoView() // Cela me permet que lorsque l'on clique sur le bouton entrée, il y ait un scroll automatique jusqu'au contenu de la div crée
    })





})
