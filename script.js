var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
})

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");

    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
        
    }
})


resetButton.addEventListener("click", function() {
    // generate all new colors 
    colors = generateRandomColors(6);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor; 
    // change the colors of the squares of the squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        
    }

    h1.style.background = "#232323";
})


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
                resetButton.textContent = "Play Again?";
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