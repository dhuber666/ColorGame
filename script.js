
var numSquares = 6;

var colors = generateRandomColors(numSquares);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
colorDisplay.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");

        this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
        reset();

        // figure out out how many squares to show
        // pick new colors
        // pick a new pickedColor
        // update page to reflect changes
    })
    
}

function reset() {

    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor; 
    // change the colors of the squares of the squares
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
        
    }

    h1.style.background = "steelblue";
    message.textContent = "";
    resetButton.textContent = "New Colors";
}

// easyBtn.addEventListener("click", function() {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if(colors[i]) {
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
        
//     }
// })

// hardBtn.addEventListener("click", function() {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
        
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
        
//     }
// })




resetButton.addEventListener("click", function() {
    // generate all new colors 
    colors = generateRandomColors(numSquares);
    // pick a new random color from array
    pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor; 
    // change the colors of the squares of the squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        
    }

    h1.style.background = "steelblue";
    message.textContent = "";
    this.textContent = "New Colors";
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