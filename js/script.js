const boxes = document.querySelectorAll('.box')
const ghost = document.querySelectorAll('.ghost-container')
const pacman = document.querySelector('.pacman-container')
const built = document.querySelector('.built')
const start = document.querySelector('.start')
const Score = document.querySelector('.Score')
const Grid = document.querySelector('.grid')
//-----------------------
let score = 0
let ii = 0
//-----------------------
let NS = 0
let WE = 0
let direction = 'x'
const coordinates = []
let workingSpace = []
//-----------------------
const BoxesWithFoods = []
//-----------------------
let coordinate = [[0,0],[0,0],[0,0],[0,0]]
let coordinatePacman = [0,0]
let boxwherePacmanNow = 0
let opportunitys = [0,0,0,0]
let opportunityRight =[false,false,false,false]
let opportunityLeft =[false,false,false,false]
let opportunityTop =[false,false,false,false]
let opportunityBottom =[false,false,false,false]
let r
let t
let l
let b
let g
let random = 0
let variable = 0
let xxx = 0
let yyy = false
let checkDeath = false
let lastPosition = [[0,0],[0,0],[0,0],[0,0]]
let lastPositionPacMan = [0,0]
function createSpace() {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
           coordinates[i*20+j] = [15 + 30*j,15 + 30*i]
        }
    } 
    console.log(coordinates)
}
function CreatePlayingSpace(){
    ii++
    if (ii % 2 !== 0) {
        Grid.style.animationName = 'anim1'
    }
    else{
        Grid.style.animationName = 'none'

    }
    let j = 0
    let index
for (let i = 0; i < boxes.length; i++) {
boxes[i].addEventListener('click', ()=>{
    let rep = false
    for (let l = 0; l < workingSpace.length; l++) {
        if (i === workingSpace[l]) {
            rep = true
            index = l
        }
        
    }
    if (rep === false) {
        workingSpace[j] = i
        j++
        boxes[i].style.border ='2px solid purple'
        console.log(workingSpace) 
    }else{
        boxes[i].style.border ='1px dashed gold'
        workingSpace.splice(index,1)
        workingSpace.filter(Number) 
        j--
    }
    
})    

}
}
function createNumeration(){
    boxes.forEach((e,i)=>{
        boxes[i].innerHTML = i
    })
}
function LevelTest(j) {
    let randomium = Math.floor(Math.random()*workingSpace.length)
    coordinate[j][0] = coordinates[workingSpace[randomium]][0]
    coordinate[j][1] = coordinates[workingSpace[randomium]][1]
   
      for (let i = 0; i < workingSpace.length; i++) {
        boxes[workingSpace[i]].style.border = '0px solid black'
        
      }
       

    
    ghost[j].style.left = `${coordinate[j][0]}px`
    ghost[j].style.top = `${coordinate[j][1]}px`


}
function checkRight(j) {
    let right = coordinate[j][0] + 30 
    let num = ''
    for (let i = 0; i < boxes.length; i++) {
        if ((right === coordinates[i][0]) && (coordinate[j][1] === coordinates[i][1])){
            // console.log(`${i} - Эта ячейка существует`)
            num = i
        }
        
    }
    for (let i = 0; i < workingSpace.length; i++) {
        if (num === workingSpace[i]) {
            opportunitys[j]++
            opportunityRight[j] = true
            // console.log(`${num} Эта ячейка в игровом поле`)

        }    
     
    }
    
    
    // console.log(`${opportunitys[j]} - столько возможностей`)

}
function checkTop(j) {
    let top = coordinate[j][1] - 30 
    let num = ''
    for (let i = 0; i < boxes.length; i++) {
        if ((coordinate[j][0] === coordinates[i][0]) && (top === coordinates[i][1])){
            // console.log(`${i} - Эта ячейка существует`)
            num = i
        }
        
    }
    for (let i = 0; i < workingSpace.length; i++) {
        if (num === workingSpace[i]) {
            opportunityTop[j] = true    
            opportunitys[j]++    
            // console.log(`${num} Эта ячейка в игровом поле`)
   
        }    
     
    }
    // console.log(`${opportunitys[j]} - столько возможностей`)
    

}
function checkLeft(j) {
    let left = coordinate[j][0] - 30 
    let num = ''
    for (let i = 0; i < boxes.length; i++) {
        if ((left === coordinates[i][0]) && (coordinate[j][1] === coordinates[i][1])){
            // console.log(`${i} - Эта ячейка существует`)
            num = i
        }
        
    }
    for (let i = 0; i < workingSpace.length; i++) {
        if (num === workingSpace[i]) {
            opportunityLeft[j] = true   
            opportunitys[j]++ 
            // console.log(`${num} Эта ячейка в игровом поле`)
      
        }    
     
    }
    // console.log(`${opportunitys[j]} - столько возможностей`)

}
function checkBottom(j) {
    let bottom = coordinate[j][1] + 30 
    let num = ''
    for (let i = 0; i < boxes.length; i++) {
        if ((coordinate[j][0] === coordinates[i][0]) && (bottom === coordinates[i][1])){
            // console.log(`${i} - Эта ячейка существует`)
            num = i
        }
        
    }
    for (let i = 0; i < workingSpace.length; i++) {
        if (num === workingSpace[i]) {
            opportunityBottom[j] = true   
            opportunitys[j]++       
            // console.log(`${num} Эта ячейка в игровом поле`)

        }    
     
    }
    // console.log(`${opportunitys[j]} - столько возможностей`)

}
function OpportunitiesReset() {
    opportunitys = [0,0,0,0]
    opportunityRight =[false,false,false,false]
    opportunityLeft =[false,false,false,false]
    opportunityTop =[false,false,false,false]
    opportunityBottom =[false,false,false,false]
}
function checkLastPosition(i) {
    if (lastPosition[i][0] === coordinate[i][0] + 30){opportunityRight[i] = false;}
    else if (lastPosition[i][1] === coordinate[i][1] - 30){opportunityTop[i] = false;}
    else if (lastPosition[i][0] === coordinate[i][0] - 30){opportunityLeft[i] = false;}
    else if (lastPosition[i][1] === coordinate[i][1] + 30){opportunityBottom[i] = false;}
}
function Moving(i,x) {
                    
    switch (true) {
        case opportunitys[i] === 1:
                if (opportunityRight[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    
                    coordinate[i][0] += 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                    
                } else if(opportunityBottom[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] += 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`       
                } else if(opportunityLeft[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][0] -= 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                }else if(opportunityTop[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] -= 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                }
            break;
        case opportunitys[i] === 2:
                if(opportunityRight[i] === true){checkLastPosition(i);}
                if(opportunityTop[i] === true){checkLastPosition(i);}
                if(opportunityLeft[i] === true){checkLastPosition(i);}
                if(opportunityBottom[i] === true){checkLastPosition(i);}
                 
                if (opportunityRight[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][0] += 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                    
                } else if(opportunityBottom[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] += 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                } else if(opportunityLeft[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][0] -= 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                }else if(opportunityTop[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] -= 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                }
            break;
        case opportunitys[i] === 3:
             r = -1
             t = -1
             l = -1
             b = -1
             g = 0
             if(opportunityRight[i] === true){checkLastPosition(i);if (opportunityRight[i] === true) {r = g; g++;}}
             if(opportunityTop[i] === true){checkLastPosition(i);if (opportunityTop[i] === true) {t = g; g++;}}
             if(opportunityLeft[i] === true){checkLastPosition(i);if (opportunityLeft[i]=== true) {l = g; g++;}}
             if(opportunityBottom[i] === true){checkLastPosition(i);if (opportunityBottom[i] === true) {b = g; g++;}}
                 random = Math.floor(Math.random()*2)
                if ((opportunityRight[i] === true) && (random === r)) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][0] += 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                } else if((opportunityBottom[i] === true) && (random === b)) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] += 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                } else if((opportunityLeft[i] === true) && (random === l)) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[1] = coordinate[i][1]
                    coordinate[i][0] -= 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                }else if((opportunityTop[i] === true) && (random === t)) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] -= 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                }
            break;
        case opportunitys[i] === 4:
            r = -1
             t = -1
             l = -1
             b = -1
             g = 0
             if(opportunityRight[i] === true){checkLastPosition(i);if (opportunityRight[i] === true) {r = g; g++;}}
             if(opportunityTop[i] === true){checkLastPosition(i);if (opportunityTop[i] === true) {t = g; g++;}}
             if(opportunityLeft[i] === true){checkLastPosition(i);if (opportunityLeft[i]=== true) {l = g; g++;}}
             if(opportunityBottom[i] === true){checkLastPosition(i);if (opportunityBottom[i] === true) {b = g; g++;}}
                 random = Math.floor(Math.random()*3)
                if ((opportunityRight[i] === true) && (random === r)) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][0] += 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                } else if((opportunityBottom[i] === true) && (random === b)) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] += 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                } else if((opportunityLeft[i] === true) && (random === l)) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][0] -= 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                }else if((opportunityTop[i] === true) && (random === t)) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] -= 30-x
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                }
            break;
       
        default:
            break;
       }
}
function Action() {
    
    for (let i = 0; i < ghost.length; i++) {
        checkRight(i)
        checkTop(i)
        checkBottom(i)
        checkLeft(i)
        if(checkDeath === false){
        Moving(i,0)
    }else{
            for (let i = 0; i < ghost.length; i++) {
                checkRight(i)
                checkTop(i)
                checkBottom(i)
                checkLeft(i)
                Moving(i,15)
                // i = i + DeathProtocol(interval)
            }   
    }
   
}
    OpportunitiesReset()
    
}
//---------------------Logic--of--Pacman------------------------
function PacManMoving() {
    document.addEventListener('keydown', function(event) {
        switch (true) {
            case event.code == 'KeyW':
                    MovingUp()

                // check()

                break;
            case event.code == 'KeyS':
                     MovingDown()

                // check()
                break;
            case event.code == 'KeyA':
                     MovingLeft()


                // check()
                break;
            case event.code == 'KeyD':
                 MovingRight()
  
                // check()
                break;
            default:
                break;
        }})
}
function MovingUp() {
    NS = -30;WE = 0
    direction = 'top'

}
function MovingDown() {
     NS = +30;WE = 0
     direction = 'bottom'

}
function MovingLeft(){
     NS = 0;WE = -30
     direction = 'left'

}
function MovingRight() {
        NS = 0;WE = +30
        direction = 'right'
}
function MovinPacMan(interval) {


        if(checkDeath === false){
        CheckEating()
        Checking()
        boxwherePacmanNow = boxwherePacmanNow + variable
        lastPositionPacMan[0] = coordinatePacman[0]
        lastPositionPacMan[1] = coordinatePacman[1]
        coordinatePacman[0] = coordinatePacman[0]+WE
        coordinatePacman[1] = coordinatePacman[1]+NS
        DeathProtocol(interval)
        if (checkDeath === true) {
            switch (true) {
                case direction === 'top':
                    pacman.style.top = `${coordinatePacman[1]+15}px`
                    pacman.style.left = `${coordinatePacman[0]}px`
                    break;
            
                case direction === 'bottom':
                    pacman.style.top = `${coordinatePacman[1]-15}px`
                    pacman.style.left = `${coordinatePacman[0]}px`                    
                    break;
            
                case direction === 'left':
                    pacman.style.top = `${coordinatePacman[1]}px`
                    pacman.style.left = `${coordinatePacman[0]+15}px`                    
                    break;
            
                case direction === 'right':
                    pacman.style.top = `${coordinatePacman[1]}px`
                    pacman.style.left = `${coordinatePacman[0]-15}px`                   
                    break;
            
                default:
                    break;
            }
        }else{
        pacman.style.top = `${coordinatePacman[1]}px`
        pacman.style.left = `${coordinatePacman[0]}px`
        }
    }
}
function Checking() {
    switch (true) {
        case direction === 'top':
            NS = 0;WE = 0
             xxx = 0
            do {
                if (boxwherePacmanNow -20>= 0 && boxwherePacmanNow - 20 < 400 ) {
                    if((coordinates[boxwherePacmanNow-20][1] === coordinatePacman[1]-30)&&(workingSpace.includes(boxwherePacmanNow-20))){
                        NS = -30;WE = 0;
                        variable = -20
                        yyy = true
                    }
                }
                xxx += -20
            } while (workingSpace.includes(boxwherePacmanNow-xxx));
            if(yyy === false){
                variable = 0
            }
            yyy = false

          
           
            break;
        case direction === 'bottom':

            NS = 0;WE = 0
          
            NS = 0;WE = 0
            xxx = 0
           do {
               if (boxwherePacmanNow +20>= 0 && boxwherePacmanNow + 20 < 400 ) {
                   if((coordinates[boxwherePacmanNow+20][1] === coordinatePacman[1]+30)&&(workingSpace.includes(boxwherePacmanNow+20))){
                       NS = +30;WE = 0;
                       variable = +20
                       yyy = true
                   }
               }
               xxx += +20
           } while (workingSpace.includes(boxwherePacmanNow+xxx));
          
            if(yyy === false){
                variable = 0
            }
            yyy = false
            break;
        case direction === 'left':

           
            NS = 0;WE = 0
            xxx = 0
           do {
               if (boxwherePacmanNow -1>= 0 && boxwherePacmanNow - 1 < 400 ) {
                   if((coordinates[boxwherePacmanNow-1][0] === coordinatePacman[0]-30)&&(workingSpace.includes(boxwherePacmanNow-1))){
                       NS = 0;WE = -30;
                       variable = -1
                       yyy = true
                   }
               }
               xxx += -1
           } while (workingSpace.includes(boxwherePacmanNow-xxx));

            if(yyy === false){
                variable = 0
            }
            yyy = false
            break;
        case direction === 'right':

          
            NS = 0;WE = 0
            xxx = 0
           do {
               if (boxwherePacmanNow +1>= 0 && boxwherePacmanNow + 1 < 400 ) {
                   if((coordinates[boxwherePacmanNow+1][0] === coordinatePacman[0]+30)&&(workingSpace.includes(boxwherePacmanNow+1))){
                       NS = 0;WE = +30;
                       variable = +1
                       yyy = true
                   }
               }
               xxx += +1
           } while (workingSpace.includes(boxwherePacmanNow+xxx));

            if(yyy === false){
                variable = 0
            }
            yyy = false
            break;
    
        default:
            break;
    }
}
function createFoodSpace() {
    workingSpace.forEach((elem,index) =>{
        BoxesWithFoods[index] = elem
    })
}
function CheckEating() {
    BoxesWithFoods.forEach((elem,index)=>{
       if(elem === boxwherePacmanNow){
        
            score++
            Score.innerHTML = score
            BoxesWithFoods[index] = -1
            boxes[elem].innerHTML = ''
        
     
       }
    })
}
function DeathProtocol(interval){
    for (let i = 0; i < 4; i++) {
        if(coordinate[i][0] === coordinatePacman[0] && coordinate[i][1] === coordinatePacman[1]){
            clearInterval(interval);
            checkDeath = true
            break;
        }
        
    }
}
//----------------------------------Start---Programm----------
createSpace()
createNumeration()
built.addEventListener('click', CreatePlayingSpace)
start.addEventListener('click', ()=>{
    score = 0
    Score.innerHTML = score
    Grid.style.animationName = 'none'

    checkDeath = false
        for (let i = 0; i < ghost.length; i++) {
            LevelTest(i)
            
        }
        for (let i = 0; i < ghost.length; i++) {
            lastPosition[i][0] = coordinate[i][0]
            lastPosition[i][1] = coordinate[i][1]
            
        }
        // boxes.forEach((e,i)=>{
        //     boxes[i].innerHTML = ''
        // })    
        workingSpace.forEach(elem=>{
            boxes[elem].innerHTML = ` <div class="food-container">
                                <div class="food"></div>
                                </div>`;

        })
        createFoodSpace()
        let pacmanRandom = Math.floor(Math.random()*workingSpace.length)
        coordinatePacman[0] = coordinates[workingSpace[pacmanRandom]][0]
        coordinatePacman[1] = coordinates[workingSpace[pacmanRandom]][1]
        lastPositionPacMan[0] = coordinatePacman[0]
        lastPositionPacMan[1] = coordinatePacman[1]
        boxwherePacmanNow = workingSpace[pacmanRandom]
        pacman.style.left = `${coordinatePacman[0]}px`
        pacman.style.top = `${coordinatePacman[1]}px`
        PacManMoving()

   let interval1 = setInterval(() => {
    MovinPacMan()
    DeathProtocol(interval1)
    Action()
    DeathProtocol(interval1)


    },500)
})


