window.onload = afficherLogo;


function afficherLogo(){
    var chaineJSON = '[{"nom": "Classe 40", "logo": "Class40.jpg", "voiliers": [{"nom" : "a"}, {"nom" : "b"}] },' + 
                    '{"nom" : "Imoca", "logo": "Imoca.jpg", "voiliers": [{"nom" : "c"}, {"nom" : "d"}] },' + 
                    '{"nom" : "OceanFifty", "logo" : "OceanFifty.png", "voiliers": [{"nom" : "e"}, {"nom" : "f"}] },' +
                    '{"nom" : "ULTIM", "logo" : "Ultim.jpg", "voiliers": [{"nom" : "g"}, {"nom" : "h"}] }]' ;

    tabClasses = JSON.parse(chaineJSON);

    var logos = document.getElementById("logos");

    for(var i=0; i<tabClasses.length; i++){
        var img = document.createElement("img");
        img.setAttribute("src", "logos/"+tabClasses[i].logo);
        img.setAttribute("id", i);
        logos.appendChild(img);

        img.onmouseover = afficherInformation;

        //img.style.width = "200px";
        //img.style.height = "200px";
    }
}

function afficherInformation(){
    var nomDeClasse = document.getElementById("nomDeClasse");
    nomDeClasse.innerHTML=null;
    var imageSurvolee = this;
    var elementH3 = document.createElement("h3");
    var indice = imageSurvolee.getAttribute("id");
    elementH3.appendChild(document.createTextNode(tabClasses[indice].nom));
    nomDeClasse.appendChild(elementH3);

    var voiliers = tabClasses[indice].voiliers;
    for(var i=0; i<voiliers.length; i++){
        var elementH4 = document.createElement("h4");
        elementH4.appendChild(document.createTextNode(voiliers[i].nom));
        nomDeClasse.appendChild(elementH4);
    }

}







