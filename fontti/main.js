const myFontsize = document.querySelector("ol");

const myButton = document.querySelector("button");
let myFont = document.getElementById("fonttikoko");
let clicks = 0
myButton.onclick = () => {
    clicks += 1;
    console.log(clicks);
    if (clicks === 1){
    myFontsize.style.fontFamily = 'Roboto';
    myFont.textContent = "Fontti on nyt: Roboto";
    } else if (clicks === 2) {
        myFontsize.style.fontFamily = 'Mansalva';
        myFont.textContent = "Fontti on nyt: Mansalva";
    }
    else if (clicks === 3) {
        myFontsize.style.fontFamily = 'Grenze';
        myFont.textContent = "Fontti on nyt: Grenze";
    }
    else if (clicks === 4) {
        myFontsize.style.fontFamily = 'Turret Road';
        myFont.textContent = "Fontti on nyt: Turret Road";
    }
    else {
        myFontsize.style.fontFamily = 'Courier New';
        clicks = 0;
        myFont.textContent = "Fontti on nyt: Courier New";
    }
    
};

