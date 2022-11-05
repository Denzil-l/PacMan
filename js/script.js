const boxes = document.querySelectorAll('.box')
const ghost = document.querySelector('.ghost-container')
const coordinates = []
let workingSpace = []
ghost.style.top = '300px'
ghost.style.left = '300px'
let coordinate = [0,0]
let opportunitys = 0
let opportunityRight =false
let opportunityLeft =false
let opportunityTop =false
let opportunityBottom =false
let r
let t
let l
let b
let g
let random = 0
let lastPosition = []
function createSpace() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
           coordinates[i*10+j] = [30 + 60*j,30 + 60*i]
        }
    } 
}
function createNumeration(){
    boxes.forEach((e,i)=>{
        boxes[i].innerHTML = i
    })
}
function LevelOne() {
    workingSpace = [41,42,43,44,45,46,47,48,14,24,34,54,64,74,84,15,25,35,55,65,75,85,51,52,53,56,57,58]
    coordinate[0] = 330
    coordinate[1] = 330
    for (let i = 0; i < 3; i++) {
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
    ghost.style.left = `${coordinate[0]}px`
    ghost.style.top = `${coordinate[1]}px`
}
function checkRight() {
    let right = coordinate[0] + 60 
    let num = ''
    for (let i = 0; i < boxes.length; i++) {
        if ((right === coordinates[i][0]) && (coordinate[1] === coordinates[i][1])){
            console.log(`${i} - Эта ячейка существует`)
            num = i
        }
        
    }
    for (let i = 0; i < workingSpace.length; i++) {
        if (num === workingSpace[i]) {
            opportunitys++
            opportunityRight = true
            console.log(`${num} Эта ячейка в игровом поле`)

        }    
     
    }
    
    console.log(`${opportunitys} - столько возможностей`)

}
function checkTop() {
    let top = coordinate[1] - 60 
    let num = ''
    for (let i = 0; i < boxes.length; i++) {
        if ((coordinate[0] === coordinates[i][0]) && (top === coordinates[i][1])){
            console.log(`${i} - Эта ячейка существует`)
            num = i
        }
        
    }
    for (let i = 0; i < workingSpace.length; i++) {
        if (num === workingSpace[i]) {
            opportunityTop = true    
            opportunitys++    
            console.log(`${num} Эта ячейка в игровом поле`)
   
        }    
     
    }
    console.log(`${opportunitys} - столько возможностей`)
    

}
function checkLeft() {
    let left = coordinate[0] - 60 
    let num = ''
    for (let i = 0; i < boxes.length; i++) {
        if ((left === coordinates[i][0]) && (coordinate[1] === coordinates[i][1])){
            console.log(`${i} - Эта ячейка существует`)
            num = i
        }
        
    }
    for (let i = 0; i < workingSpace.length; i++) {
        if (num === workingSpace[i]) {
            opportunityLeft = true    
            opportunitys++ 
            console.log(`${num} Эта ячейка в игровом поле`)
      
        }    
     
    }
    console.log(`${opportunitys} - столько возможностей`)

}
function checkBottom() {
    let bottom = coordinate[1] + 60 
    let num = ''
    for (let i = 0; i < boxes.length; i++) {
        if ((coordinate[0] === coordinates[i][0]) && (bottom === coordinates[i][1])){
            console.log(`${i} - Эта ячейка существует`)
            num = i
        }
        
    }
    for (let i = 0; i < workingSpace.length; i++) {
        if (num === workingSpace[i]) {
            opportunityBottom = true    
            opportunitys++       
            console.log(`${num} Эта ячейка в игровом поле`)

        }    
     
    }
    console.log(`${opportunitys} - столько возможностей`)

}
function OpportunitiesReset() {
    opportunitys = 0
    opportunityBottom = false
    opportunityLeft = false
    opportunityRight = false
    opportunityTop = false
}
function checkLastPosition() {
    if (lastPosition[0] === coordinate[0] + 60){opportunityRight = false;}
    else if (lastPosition[1] === coordinate[1] - 60){opportunityTop = false;}
    else if (lastPosition[0] === coordinate[0] - 60){opportunityLeft = false;}
    else if (lastPosition[1] === coordinate[1] + 60){opportunityBottom = false;}
}
function Moving() {
                    
    switch (true) {
        case opportunitys === 1:
                if (opportunityRight === true) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[0] += 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                    
                } else if(opportunityBottom === true) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[1] += 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                } else if(opportunityLeft === true) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[0] -= 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                }else if(opportunityTop === true) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[1] -= 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                }
            break;
        case opportunitys === 2:
                if(opportunityRight === true){checkLastPosition();}
                if(opportunityTop === true){checkLastPosition();}
                if(opportunityLeft === true){checkLastPosition();}
                if(opportunityBottom === true){checkLastPosition();}
                 
                if (opportunityRight === true) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[0] += 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                    
                } else if(opportunityBottom === true) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[1] += 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                } else if(opportunityLeft === true) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[0] -= 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                }else if(opportunityTop === true) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[1] -= 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                }
            break;
        case opportunitys === 3:
             r = -1
             t = -1
             l = -1
             b = -1
             g = 0
             if(opportunityRight === true){checkLastPosition();if (opportunityRight === true) {r = g; g++;}}
             if(opportunityTop === true){checkLastPosition();if (opportunityTop === true) {t = g; g++;}}
             if(opportunityLeft === true){checkLastPosition();if (opportunityLeft=== true) {l = g; g++;}}
             if(opportunityBottom === true){checkLastPosition();if (opportunityBottom === true) {b = g; g++;}}
                 random = Math.floor(Math.random()*2)
                if ((opportunityRight === true) && (random === r)) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[0] += 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                } else if((opportunityBottom === true) && (random === b)) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[1] += 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                } else if((opportunityLeft === true) && (random === l)) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[0] -= 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                }else if((opportunityTop === true) && (random === t)) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[1] -= 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                }
            break;
        case opportunitys === 4:
            r = -1
             t = -1
             l = -1
             b = -1
             g = 0
             if(opportunityRight === true){checkLastPosition();if (opportunityRight === true) {r = g; g++;}}
             if(opportunityTop === true){checkLastPosition();if (opportunityTop === true) {t = g; g++;}}
             if(opportunityLeft === true){checkLastPosition();if (opportunityLeft=== true) {l = g; g++;}}
             if(opportunityBottom === true){checkLastPosition();if (opportunityBottom === true) {b = g; g++;}}
                 random = Math.floor(Math.random()*3)
                if ((opportunityRight === true) && (random === r)) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[0] += 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                } else if((opportunityBottom === true) && (random === b)) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[1] += 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                } else if((opportunityLeft === true) && (random === l)) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[0] -= 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                }else if((opportunityTop === true) && (random === t)) {
                    lastPosition[0] = coordinate[0]
                    lastPosition[1] = coordinate[1]
                    coordinate[1] -= 60
                    ghost.style.left = `${coordinate[0]}px`
                    ghost.style.top = `${coordinate[1]}px`            
                }
            break;
       
        default:
            break;
       }
}
function Action() {
    
    checkRight()
    checkTop()
    checkBottom()
    checkLeft()
    Moving()
    OpportunitiesReset()
}
function Leveltwo() {
     workingSpace = [80,81,82,83,84,85,86,87,88,89,79,69,59,49,39,29,19,9]
     coordinate[0] = 30
     coordinate[1] = 510
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
    ghost.style.left = `${coordinate[0]}px`
    ghost.style.top = `${coordinate[1]}px`


}





// workingSpace = [97,98,99,89,79,69,59,49,39,29,19,9]
// coordinate[0] = 570
// coordinate[1] = 570

// ghost.style.left = `${coordinate[0]}px`
// ghost.style.top = `${coordinate[1]}px`

createSpace()
createNumeration()
LevelOne()
lastPosition[0] = coordinate[0]
lastPosition[1] = coordinate[1]
console.log(lastPosition[0])
console.log(lastPosition[1])
setInterval(() => {
Action()
},1000)


