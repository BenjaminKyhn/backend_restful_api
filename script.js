function getCardPic(){
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if ((this.readyState === 4 && this.status === 200) || this.status === 304) {
            let myObj = JSON.parse(this.responseText);
            document.getElementById("placeholder").src = myObj.image;
            document.getElementById("meme").innerHTML = "hej";
        }
    };
    xmlhttp.open("GET", "http://localhost:3000/cards/random", true);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send();
}