// var rand1=Math.floor(Math.random()*6);


const imageUrls = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png'
];

// Function to pick a random image from the array
function pickRandomImage() {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    return randomIndex;
}

// Set the src attribute of the image with the randomly picked URL
var rand1= pickRandomImage();
var rand2=pickRandomImage();

document.querySelector('.img1').src = imageUrls[rand1];
document.querySelector('.img2').src = imageUrls[rand2];

// document.querySelector('h1').innerHTML=

if(rand1>rand2){
    document.querySelector('h1').innerHTML="Player1 Wins";
}else if(rand2>rand1){
    document.querySelector('h1').innerHTML="Player2 Wins";
}else{
    document.querySelector('h1').innerHTML="Draw";
}