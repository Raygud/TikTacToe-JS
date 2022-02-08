let GameScreen = document.createElement('div');
document.body.appendChild(GameScreen);
GameScreen.setAttribute("id","GameScreen")
let Menu = document.createElement('button');
GameScreen.appendChild(Menu);
Menu.innerHTML = "Rematch?"
Menu.setAttribute("id","Menu")
Menu.setAttribute("onclick","Replay()")

Remake = document.getElementById("Menu")
Remake.classList.add("Clicked")



let Turn = false

let Turns = 0

let XLines = []
let OLines = []



for (let i = 0; i < 9; i++) {
    const Boxes = document.createElement("div");
    GameScreen.appendChild(Boxes)
    Boxes.setAttribute("id",i)
    Boxes.setAttribute('InnPlay', 0);
    Boxes.addEventListener("click", function(){
        if (Turn = !Turn){

            console.log(this.id)

            this.style.backgroundImage = "url('X.svg')";
            this.classList.add("Clicked")

            XLines.push(parseInt(this.id))

            this.removeAttribute('InnPlay');
            this.setAttribute('InnPlay', 1);

            Turns++

            console.log(Turns)


            WinnerWinner(XLines,"X ")
        }
        else{

            console.log(this.id)

            this.style.backgroundImage = "url('O.svg')";
            this.classList.add("Clicked")

            
            OLines.push(parseInt(this.id))

            Turns++

            console.log("HEHEHEH"+Turns)

            WinnerWinner(OLines,"O ")
        }
    });

}

let conditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [6,4,2]
    
]


function WinnerWinner(Lines,Winner){
    for (let i = 0; i < conditions.length; i++) {
        let a = conditions[i][0]
        let b = conditions[i][1]
        let c = conditions[i][2]
        console.log(i + " "+ conditions[i])
        if(Lines.includes(a)&&Lines.includes(b)&&Lines.includes(c)){
            Remake.style.visibility = "visible"
            Remake.classList.remove("Clicked")
    document.getElementById(a).style.backgroundColor = "rgba(172, 255, 47, 0.966)"
    document.getElementById(b).style.backgroundColor = "rgba(172, 255, 47, 0.966)"
    document.getElementById(c).style.backgroundColor = "rgba(172, 255, 47, 0.966)"
        }

        else if(Turns == 9){
            Remake.style.visibility = "visible"
            Remake.classList.remove("Clicked")
            document.getElementById(0).style.backgroundColor = "rgba(255, 182, 47, 0.966)"
            document.getElementById(2).style.backgroundColor = "rgba(255, 182, 47, 0.966)"
            document.getElementById(4).style.backgroundColor = "rgba(255, 182, 47, 0.966)"
            document.getElementById(6).style.backgroundColor = "rgba(255, 182, 47, 0.966)"
            document.getElementById(8).style.backgroundColor = "rgba(255, 182, 47, 0.966)"
        }
        
    }
}

function Replay(){
            
            for (let i = 0; i < 9; i++) {
                document.getElementById(i).style.backgroundImage = "none"
                document.getElementById(i).style.backgroundColor = "rgba(172, 255, 47, 0)"
                document.getElementById(i).classList.remove("Clicked")
                XLines = []
                OLines = []
                Turn = false
                Turns = 0
                Remake.style.visibility = "hidden"
            Remake.classList.add("Clicked")

            }
}





function AIMASTERMIND(){

    a = document.getElementById(0)
    b = document.getElementById(1)
    c = document.getElementById(2)
    d = document.getElementById(3)
    e = document.getElementById(4)
    f = document.getElementById(5)
    g = document.getElementById(6)
    h = document.getElementById(7)
    j = document.getElementById(8)

    if(e.getAttribute("InnPlay") == 0){
        console.log(e.id)

        e.style.backgroundImage = "url('O.svg')";
        e.classList.add("Clicked")

        
        OLines.push(parseInt(e.id))

        Turns++

        console.log("HEHEHEH"+Turns)

        WinnerWinner(OLines,"O ")
    }
}
