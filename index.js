var play1 = document.getElementById("img1");
var play2 = document.getElementById("img2");
var rand1=Math.floor(Math.random()*7+1);
var rand2=Math.floor(Math.random()*7+1);
console.log(rand1);
play1.setAttribute("src","dice"+rand1+".jpg");
play2.setAttribute("src","dice"+rand2+".jpg");
if(rand1>rand2){
    document.getElementById("wins").innerHTML="Player one won";
}
else if(rand1<rand2){
    document.getElementById("wins").innerHTML="Player two won";
}
else{
    document.getElementById("wins").innerHTML="Draw";
}