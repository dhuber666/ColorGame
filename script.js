var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");


for (var i = 0; i < squares.length; i++) {
    
    // add initial color to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        // grab color of clicked square and compare color to picked color
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor) 
            {
                // do something
                message.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
            } else
            {
                
                this.style.backgroundColor = "#232323";
                message.textContent = "Wrong!";
            }
    })
    
}

// Change all divs to the winning color

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        
        squares[i].style.backgroundColor = color;
        
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(number) 
{
    // make an array 
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < number; i++) {
        // get random Color and push into arr
        arr.push(randomColor());
    }
    // return that array
    return arr;

}

function randomColor() {


    // pick a "red" from 0 - 255

    var red = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    var green = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    var blue = Math.floor(Math.random() * 256);

    
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}