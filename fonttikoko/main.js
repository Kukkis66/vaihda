const myFontsize = document.querySelector("ol");

const myButton = document.querySelector("button");
let myFont = document.getElementById("fonttikoko");
let clicks = 0
myButton.onclick = () => {
    clicks += 1;
    console.log(clicks);
    if (clicks === 1){
    myFontsize.style.fontSize = '20px';
    myFont.textContent = "Fonttikoko nyt: 20px";
    } else if (clicks === 2) {
        myFontsize.style.fontSize = '24px';
        myFont.textContent = "Fonttikoko nyt: 24px";
    }
    else if (clicks === 3) {
        myFontsize.style.fontSize = '28px';
        myFont.textContent = "Fonttikoko nyt: 28px";
    }
    else if (clicks === 4) {
        myFontsize.style.fontSize = '32px';
        myFont.textContent = "Fonttikoko nyt: 32px";
    }
    else {
        myFontsize.style.fontSize = '16px';
        clicks = 0;
        myFont.textContent = "Fonttikoko nyt: 16px";
    }
    
};

