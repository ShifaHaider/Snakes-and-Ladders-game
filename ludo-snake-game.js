var number = 2;
var num;
var yellowPlayer = 0;
var bluePlayer = 0;
var yellowArr = [];
var blueArr = [];
var dice = document.getElementById('dice');
function getNumber() {
    var b2 = document.getElementById('b2');
    var b = document.getElementById('b');
    num = Math.floor(Math.random() * 6) + 1;
    dice.style.backgroundImage = "url(" + num + ".jpg)";
    console.log("url(" + num + ".jpg)");
    //b.innerHTML = num;
    if (number % 2 === 0) {
        b2.innerHTML = 'The turn of Yellow!';
        firstPlayer();
        if (num === 6) {
            yellowArr.push(num);
        }
    }
    else if (number % 2 === 1) {
        b2.innerHTML = 'The turn of Blue!';
        secondPlayer();
        if (num === 6) {
            blueArr.push(num);
        }
    }
    if (num === 6) {
        number = number;
    }
    else {
        ++number;
    }
}

function firstPlayer(v) {
    //number = number - 1;
    var getId;
    //if (number % 2 === 0) {
    if (yellowPlayer <= 100 && yellowArr[0] === 6) {
        //console.log(yellowPlayer);
        //num = 0;
        yellowPlayer += num;
        increase();
        decrease();
        //yellowPlayer = 28;
        yellowPlayer.toString(
        );
        getId = document.getElementById(yellowPlayer.toString());
        var firstPlayer = document.getElementById('firstPlayer');
        getId.appendChild(firstPlayer);
        //console.log(yellowPlayer);
        yellowPlayer === 100 ? alert('yellow Player has won the game!') : null;
    }
    else {
        playerParent = document.getElementById('firstPlayer').parentNode.innerText;
        yellowPlayer = Number(playerParent);
    }
    //dice.style.backgroundImage = "url(dice.gif)";

    //}
}

function secondPlayer(v) {
    //number = number + 1;
    var getId2;
    //if (number % 2 === 1) {
    if (bluePlayer <= 100 && blueArr[0] === 6) {
        bluePlayer += num;
        increase();
        decrease();
        //num = 0;
        bluePlayer.toString();
        getId2 = document.getElementById(bluePlayer.toString());
        var secondPlayer = document.getElementById('secondPlayer');
        getId2.appendChild(secondPlayer);
        //console.log(bluePlayer);
        bluePlayer === 100 ? alert('Blue Player has won the game!') : null;
    }
    //if (Number(bluePlayer) === 98) {
    //    console.log(bluePlayer);
    //    bluePlayer = 28;
    //}

    else {
        playerParent2 = document.getElementById('secondPlayer').parentNode.innerText;
        bluePlayer = Number(playerParent2);
    }
    //dice.style.backgroundImage = "url(dice.gif)";

    //}
}

//function increase(){
//
//    if(Number(yellowPlayer) === 7){
//        yellowPlayer = 14;
//        console.log(yellowPlayer);
//    }
//
//    else if(Number(yellowPlayer) === 22){
//        yellowPlayer = 39;
//        console.log(yellowPlayer);
//    }
//
//    else if(Number(yellowPlayer) === 47){
//        yellowPlayer = 54;
//        console.log(yellowPlayer);
//    }
//
//    else if(Number(yellowPlayer) === 64){
//        yellowPlayer = 77;
//        console.log(yellowPlayer);
//    }
//
//    else if(Number(yellowPlayer) === 81){
//        yellowPlayer = 100;
//        console.log(yellowPlayer);
//
//    }
//
//    else if(Number(yellowPlayer) === 88){
//        yellowPlayer = 93;
//        console.log(yellowPlayer);
//    }
//
//    if(Number(bluePlayer) === 7){
//        bluePlayer = 14;
//        console.log(bluePlayer);
//    }
//
//    else if(Number(bluePlayer) === 22){
//        bluePlayer = 39;
//        console.log(bluePlayer);
//    }
//
//    else if(Number(bluePlayer) === 47){
//        bluePlayer = 54;
//        console.log(bluePlayer);
//    }
//
//    else if(Number(bluePlayer) === 64){
//        bluePlayer = 77;
//        console.log(bluePlayer);
//    }
//
//    else if(Number(bluePlayer) === 81){
//        bluePlayer = 100;
//        console.log(bluePlayer);
//
//    }
//
//    else if(Number(bluePlayer) === 88){
//        bluePlayer = 93;
//        console.log(bluePlayer);
//    }
//}
function increase(){
    var arr =  [7 , 22 , 47 , 64 , 81 , 88];
    var arr2 = [14 , 39 , 54 , 77 , 100 , 93];
    for(var i = 0; i < arr.length; i++){
        if(Number(yellowPlayer) === arr[i]){
            console.log(arr[i] , arr2[i]);
            yellowPlayer = arr2[i];
        }
        else if(Number(bluePlayer) === arr[i]){
            console.log(arr[i] , arr2[i]);
            bluePlayer = arr2[i];
        }
    }
}

function  decrease(){
    var arr =  [25 , 59 , 74 , 85 , 98];
    var arr2 = [7 , 45 , 61 , 69 ,  28];
    for(var i = 0; i < arr.length; i++){
           if(Number(yellowPlayer) === arr[i]){
               console.log(arr[i] , arr2[i]);
               yellowPlayer = arr2[i];
           }
    else if(Number(bluePlayer) === arr[i]){
               console.log(arr[i] , arr2[i]);
               bluePlayer = arr2[i];
           }
    }
}

function restartGame() {
    var wrapper = document.getElementById('wrapper');
    var firstPlayer = document.getElementById('firstPlayer');
    var secondPlayer = document.getElementById('secondPlayer');
    wrapper.appendChild(firstPlayer);
    wrapper.appendChild(secondPlayer);
    dice.style.backgroundImage = "url(dice.gif)";
    yellowPlayer = 0;
    bluePlayer = 0;
}



//https://preview.codecanyon.net/item/ludo-multiplayer-html5-game-capx/full_screen_preview/20396789