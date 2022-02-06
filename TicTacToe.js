const GameScreen = document.createElement("div");
let Turn = false
let Turns = 0
document.body.appendChild(GameScreen);
GameScreen.setAttribute("id","GameScreen")
let clicked = []
let X = []
let O = []


for (let i = 0; i < 9; i++) {
console.log(i)
const Boxes = document.createElement("div");
GameScreen.appendChild(Boxes)
Boxes.setAttribute("id",i)
Boxes.addEventListener("click", function(){
    if (Turn = !Turn){
        console.log(this.id)
        this.style.backgroundImage = "url('X.svg')";
        this.classList.add("Clicked")
        clicked.push(this.id)
        X.push(this.id)
        console.log("X arr" +X)
        WinnerWinner()
        Turns++
    }
    else{
        this.style.backgroundImage = "url('O.svg')";
        this.classList.add("Clicked")
        clicked.push(this.id)
        O.push(this.id)
        WinnerWinner()
        Turns++
    }

   
    
});

}

 function WinnerWinner(){
    const WinningConditions = [
        ["0","1","2"],
        ["3","4","5"],
        ["6","7","8"],
    
        ["0","3","6"],
        ["1","4","7"],
        ["2","5","8"],
    
        ["0","4","8"],
        ["6","4","2"]
        
    ]
     

    for (let w = 0; w < WinningConditions.length; w++) {
        let o = 0
        o++
    // Comparing both arrays using stringify
    if(JSON.stringify(WinningConditions[1]).includes(JSON.stringify(X[o]))){
     alert("win")
    }
    else{
 }}}