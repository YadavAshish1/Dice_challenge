

    
var randomnumber1 = Math.floor(Math.random() * 6) +1;
var randomImage = "dice" + randomnumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImage);



var randomnumber2 = Math.floor(Math.random() * 6) +1;
var randomImage2 = "dice" + randomnumber2 + ".png";

var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src" , randomImage2);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Win";
}
else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 2 Win"
}
else{
    document.querySelector("h1").innerHTML="Draw";
}

