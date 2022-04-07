var onScreen = false;

function Valtozo(artist){
    var valtozoMain = document.getElementById("valtozo-main");
    var valtozoKep = document.getElementById("valtozo-kep");
    var valtozoSzoveg = document.getElementById("valtozo-szoveg");
    if (!onScreen){
        valtozoKep.style.minHeight = "500px";
        valtozoSzoveg.style.height = "500px";
        valtozoSzoveg.style.width = "500px";
        onScreen = true;
    }
    valtozoKep.innerHTML = "<img src='assets/" + artist + ".jpg'>";   
    valtozoSzoveg.innerHTML = "<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, itaque expedita. Similique officia, beatae soluta doloremque optio doloribus alias rerum ipsam officiis. Temporibus, voluptate ipsam asperiores cum magni exercitationem. Quasi?</p>";
    document.getElementById("valtozo-main").scrollIntoView();
    return onScreen;
}