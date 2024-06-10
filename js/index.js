if(window.matchMedia("(prefers-color-scheme: dark)").matches){
    document.body.classList.add("dark-theme");
}


const icon = document.getElementById("icon");

if(icon){

    icon.addEventListener('click', function(){
        document.body.classList.toggle("dark-theme");

        //Michiel: gebruik bij voorkeur const of let i.p.v. var voor variabelen
        const logogroot = document.getElementById("logogroot");
        const logoklein = document.getElementById("logoklein");
        const menuicon = document.getElementById("menuicon");
        const share = document.getElementById("share");
        const facebook = document.getElementById("facebook");
        const instagram = document.getElementById("instagram");
        const pinterest = document.getElementById("pinterest");
        const twitter = document.getElementById("twitter");
        const send = document.getElementById("send");
        const shareFooter = document.getElementById("sharefooter");
        const facebookFooter = document.getElementById("facebookfooter"); 
        const instagramFooter = document.getElementById("instagramfooter");

        //Michiel: Alle if/else statement herleid tot één maakt code leesbaarder en compacter
        if(document.body.classList.contains("dark-theme")){
            icon.src = "/img/lightmode.png";
            logogroot.src = "/img/logogrootwit.png";
            logoklein.src = "/img/logokleinwit.png";
            menuicon.src = "/img/menuwit.png";
            share.src = "/img/sharewit.png";
            facebook.src = "/img/facebookwit.png";
            instagram.src = "/img/instagramwit.png";
            //Michiel: onderstaande items niet gevonden op alle pagina's. 
            // Indien je deze nog in html gaat toegevoegen mogen de if statements verwijderd worden.
            // Anders kan je opteren om een afzonderlijk javascript bestand aan te maken per pagina.
            if(pinterest) pinterest.src = "/img/pinterestwit.png";
            if(twitter) twitter.src = "/img/twitterwit.png";
            if(send) send.src = "/img/sendwit.png";
            if(shareFooter) shareFooter.src = "/img/sharewit.png";
            if(facebookFooter) facebookFooter.src = "/img/facebookwit.png";
            if(instagramFooter) instagramFooter.src = "/img/instagramwit.png";
        }else{
            icon.src = "/img/darkmode.png";
            logogroot.src = "/img/logogrootgrijs.png";
            logoklein.src = "/img/logokleingrijs.png";
            menuicon.src = "/img/menu.png";
            share.src = "/img/share.png";
            facebook.src = "/img/facebook.png";
            instagram.src = "/img/instagram.png";
            if(pinterest) pinterest.src = "/img/pinterest.png";
            if(twitter) twitter.src = "/img/twitter.png";
            if(send) send.src = "/img/send.png";
            if(shareFooter) shareFooter.src = "/img/share.png";
            if(facebookFooter) facebookFooter.src = "/img/facebook.png";
            if(instagramFooter) instagramFooter.src = "/img/instagram.png";
        }
    })

}

//Michiel: let mag const zijn, de variabele loginForm zal niet meer wijzigen 
let loginForm = document.getElementById("form");
//Michiel: formulier is niet op elke pagina aanwezig, foutmelding vermijden door met if statement code enkel uit te voeren wanneer het formulier gevonden is.
if(loginForm){
    loginForm.addEventListener("submit", (e) => { 
        //Michiel: goede oplossing, heb code wat gestructureerd i.f.v. leesbaarheid
        e.preventDefault();
        alert("Dit is een demoformulier, hier is uw comment: " + document.getElementById("comment").value);
    });
}
