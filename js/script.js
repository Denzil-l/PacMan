const boxes = document.querySelectorAll('.box')
const ghost = document.querySelectorAll('.ghost-container')
const pacman = document.querySelector('.pacman-container')
const built = document.querySelector('.built')
const start = document.querySelector('.start')
//-----------------------
let foods
let score = 0
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
let lastPosition = [[0,0],[0,0],[0,0],[0,0]]
function createSpace() {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
           coordinates[i*20+j] = [15 + 30*j,15 + 30*i]
        }
    } 
    console.log(coordinates)
}
function CreatePlayingSpace(){
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
function LevelOne(j) {
    workingSpace = [41,42,43,44,45,46,47,48,14,24,34,54,64,74,84,15,25,35,55,65,75,85,51,52,53,56,57,58]
    coordinate[j][0] = 315
    coordinate[j][1] = 315
    for (let i = 0; i < 3; i++) {[j]
        boxes[41+i].style.borderBottom = '0px solid purple'    
        boxes[41+i].style.borderTop = '3px solid purple'    
        boxes[41+i].style.borderLeft= '0px solid purple'    
        boxes[41+i].style.borderRight = '0px solid purple'
        boxes[46+i].style.borderBottom = '0px solid purple'    
        boxes[46+i].style.borderTop = '3px solid purple'    
        boxes[46+i].style.borderLeft= '0px solid purple'    
        boxes[46+i].style.borderRight = '0px solid purple'
        boxes[51+i].style.borderBottom = '3px solid purple'    
        boxes[51+i].style.borderTop = '0px solid purple'    
        boxes[51+i].style.borderLeft= '0px solid purple'    
        boxes[51+i].style.borderRight = '0px solid purple'
        boxes[56+i].style.borderBottom = '3px solid purple'    
        boxes[56+i].style.borderTop = '0px solid purple'    
        boxes[56+i].style.borderLeft= '0px solid purple'    
        boxes[56+i].style.borderRight = '0px solid purple'
        boxes[34 - 10*i].style.borderBottom = '0px solid purple'    
        boxes[34 - 10*i].style.borderTop = '0px solid purple'    
        boxes[34 - 10*i].style.borderLeft= '3px solid purple'    
        boxes[34 - 10*i].style.borderRight = '0px solid purple'
        boxes[35 - 10*i].style.borderBottom = '0px solid purple'    
        boxes[35 - 10*i].style.borderTop = '0px solid purple'    
        boxes[35 - 10*i].style.borderLeft= '0px solid purple'    
        boxes[35 - 10*i].style.borderRight = '3px solid purple'
        boxes[64 + 10*i].style.borderBottom = '0px solid purple'    
        boxes[64 + 10*i].style.borderTop = '0px solid purple'    
        boxes[64 + 10*i].style.borderLeft= '3px solid purple'    
        boxes[64 + 10*i].style.borderRight = '0px solid purple'
        boxes[65 + 10*i].style.borderBottom = '0px solid purple'    
        boxes[65 + 10*i].style.borderTop = '0px solid purple'    
        boxes[65 + 10*i].style.borderLeft= '0px solid purple'    
        boxes[65 + 10*i].style.borderRight = '3px solid purple'
        
        
        
    }
    for (let i = 0; i < 2; i++) {
        boxes[44+i].style.borderBottom = '0px solid purple'    
        boxes[44+i].style.borderTop = '0px solid purple'    
        boxes[44+i].style.borderLeft= '0px solid purple'    
        boxes[44+i].style.borderRight = '0px solid purple'
        boxes[54+i].style.borderBottom = '0px solid purple'    
        boxes[54+i].style.borderTop = '0px solid purple'    
        boxes[54+i].style.borderLeft= '0px solid purple'    
        boxes[54+i].style.borderRight = '0px solid purple'
   
        boxes[41+i*10].style.borderLeft= '3px solid purple'       
        boxes[48+i*10].style.borderRight = '3px solid purple'
        boxes[84+i].style.borderBottom = '3px solid purple'    
        boxes[14+i].style.borderTop = '3px solid purple'    

    }
    ghost[j].style.left = `${coordinate[j][0]}px`
    ghost[j].style.top = `${coordinate[j][1]}px`
}
function Leveltwo(j) {
    workingSpace = [80,81,82,83,84,85,86,87,88,89,79,69,59,49,39,29,19,9]
    coordinate[j][0] = 30
    coordinate[j][1] = 510
   boxes[80].style.borderBottom = '3px solid purple'    
   boxes[80].style.borderTop = '3px solid purple'    
   boxes[80].style.borderLeft= '3px solid purple'    
   boxes[80].style.borderRight = '0px solid purple' 
   boxes[89].style.borderBottom = '3px solid purple'    
   boxes[89].style.borderTop = '0px solid purple'    
   boxes[89].style.borderLeft= '0px solid purple'    
   boxes[89].style.borderRight = '3px solid purple' 
   boxes[9].style.borderBottom = '0px solid purple'    
   boxes[9].style.borderTop = '3px solid purple'    
   boxes[9].style.borderLeft= '3px solid purple'    
   boxes[9].style.borderRight = '3px solid purple' 
for (let i = 81; i < 89; i++) {
   boxes[i].style.borderBottom = '3px solid purple'    
   boxes[i].style.borderTop = '3px solid purple'    
   boxes[i].style.borderLeft= '0px solid purple'    
   boxes[i].style.borderRight = '0px solid purple'    
}
let n = 10
for (let i = 1; i < 8; i++) {
   boxes[89 - i*n].style.borderBottom = '0px solid purple'    
   boxes[89 - i*n].style.borderTop = '0px solid purple'    
   boxes[89 - i*n].style.borderLeft= '3px solid purple'    
   boxes[89 - i*n].style.borderRight = '3px solid purple'    
}
   ghost[j].style.left = `${coordinate[j][0]}px`
   ghost[j].style.top = `${coordinate[j][1]}px`


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
            console.log(`${i} - Эта ячейка существует`)
            num = i
        }
        
    }
    for (let i = 0; i < workingSpace.length; i++) {
        if (num === workingSpace[i]) {
            opportunitys[j]++
            opportunityRight[j] = true
            console.log(`${num} Эта ячейка в игровом поле`)

        }    
     
    }
    
    console.log(`${opportunitys[j]} - столько возможностей`)

}
function checkTop(j) {
    let top = coordinate[j][1] - 30 
    let num = ''
    for (let i = 0; i < boxes.length; i++) {
        if ((coordinate[j][0] === coordinates[i][0]) && (top === coordinates[i][1])){
            console.log(`${i} - Эта ячейка существует`)
            num = i
        }
        
    }
    for (let i = 0; i < workingSpace.length; i++) {
        if (num === workingSpace[i]) {
            opportunityTop[j] = true    
            opportunitys[j]++    
            console.log(`${num} Эта ячейка в игровом поле`)
   
        }    
     
    }
    console.log(`${opportunitys[j]} - столько возможностей`)
    

}
function checkLeft(j) {
    let left = coordinate[j][0] - 30 
    let num = ''
    for (let i = 0; i < boxes.length; i++) {
        if ((left === coordinates[i][0]) && (coordinate[j][1] === coordinates[i][1])){
            console.log(`${i} - Эта ячейка существует`)
            num = i
        }
        
    }
    for (let i = 0; i < workingSpace.length; i++) {
        if (num === workingSpace[i]) {
            opportunityLeft[j] = true   
            opportunitys[j]++ 
            console.log(`${num} Эта ячейка в игровом поле`)
      
        }    
     
    }
    console.log(`${opportunitys[j]} - столько возможностей`)

}
function checkBottom(j) {
    let bottom = coordinate[j][1] + 30 
    let num = ''
    for (let i = 0; i < boxes.length; i++) {
        if ((coordinate[j][0] === coordinates[i][0]) && (bottom === coordinates[i][1])){
            console.log(`${i} - Эта ячейка существует`)
            num = i
        }
        
    }
    for (let i = 0; i < workingSpace.length; i++) {
        if (num === workingSpace[i]) {
            opportunityBottom[j] = true   
            opportunitys[j]++       
            console.log(`${num} Эта ячейка в игровом поле`)

        }    
     
    }
    console.log(`${opportunitys[j]} - столько возможностей`)

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
function Moving(i) {
                    
    switch (true) {
        case opportunitys[i] === 1:
                if (opportunityRight[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][0] += 30
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                    
                } else if(opportunityBottom[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] += 30
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`       
                } else if(opportunityLeft[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][0] -= 30
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                }else if(opportunityTop[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] -= 30
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
                    coordinate[i][0] += 30
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                    
                } else if(opportunityBottom[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] += 30
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                } else if(opportunityLeft[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][0] -= 30
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                }else if(opportunityTop[i] === true) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] -= 30
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
                    coordinate[i][0] += 30
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                } else if((opportunityBottom[i] === true) && (random === b)) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] += 30
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                } else if((opportunityLeft[i] === true) && (random === l)) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[1] = coordinate[i][1]
                    coordinate[i][0] -= 30
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                }else if((opportunityTop[i] === true) && (random === t)) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] -= 30
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
                    coordinate[i][0] += 30
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                } else if((opportunityBottom[i] === true) && (random === b)) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] += 30
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                } else if((opportunityLeft[i] === true) && (random === l)) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][0] -= 30
                    ghost[i].style.left = `${coordinate[i][0]}px`
                    ghost[i].style.top = `${coordinate[i][1]}px`            
                }else if((opportunityTop[i] === true) && (random === t)) {
                    lastPosition[i][0] = coordinate[i][0]
                    lastPosition[i][1] = coordinate[i][1]
                    coordinate[i][1] -= 30
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
        Moving(i)
        
    }
    OpportunitiesReset()

}
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
function MovinPacMan() {

    setInterval(()=>{
        CheckEating()

        coordinatePacman[0] = coordinatePacman[0]+WE
        coordinatePacman[1] = coordinatePacman[1]+NS
        pacman.style.top = `${coordinatePacman[1]}px`
        pacman.style.left = `${coordinatePacman[0]}px`
        Checking()
    },1000)
    
}
function Checking() {
    switch (true) {
        case direction === 'top':
            NS = 0;WE = 0
            workingSpace.forEach((elem,index) =>{
                if((coordinates[elem-20][1] === coordinatePacman[1]-30)&&(workingSpace.includes(elem-20))){
                    NS = -30;WE = 0;
                    boxwherePacmanNow = elem
                    // direction = 'x';

                }
            })

            break;
        case direction === 'bottom':
            NS = 0;WE = 0
            workingSpace.forEach((elem,index) =>{
                if((coordinates[elem+20][1] === coordinatePacman[1]+30)&&(workingSpace.includes(elem+20))){
                    boxwherePacmanNow = elem

                    NS = +30;WE = 0
                }})
                // direction = 'x'

            break;
        case direction === 'left':
            NS = 0;WE = 0

            workingSpace.forEach((elem,index) =>{
                if((coordinates[elem-1][0] === coordinatePacman[0]-30)&&(workingSpace.includes(elem-1))){
                    boxwherePacmanNow = elem

                    NS = 0;WE = -30
                }})
                // direction = 'x'

            break;
        case direction === 'right':
            NS = 0;WE = 0
            workingSpace.forEach((elem,index) =>{
                if((coordinates[elem+1][0] === coordinatePacman[0]+30)&&(workingSpace.includes(elem+1))){
                    boxwherePacmanNow = elem
                    NS = 0;WE = +30
                }})
                // direction = 'x'

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
            BoxesWithFoods[index] = -1
            foods[index].style.display = 'none'
        
     
       }
    })
}

createSpace()
createNumeration()
built.addEventListener('click', CreatePlayingSpace)
start.addEventListener('click', ()=>{
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
         foods = document.querySelectorAll('.food-container')
    let pacmanRandom = Math.floor(Math.random()*workingSpace.length)
        coordinatePacman[0] = coordinates[workingSpace[pacmanRandom]][0]
        coordinatePacman[1] = coordinates[workingSpace[pacmanRandom]][1]
        pacman.style.left = `${coordinatePacman[0]}px`
        pacman.style.top = `${coordinatePacman[1]}px`
    setInterval(() => {
    Action()
    },1000)
    MovinPacMan()
    PacManMoving()
    console.log(foods)
})


