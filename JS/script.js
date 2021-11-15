let tablePostIt = []
let numPostIt = -1
let action = ""
document.querySelector(".post1").addEventListener("click",()=>{
    tablePostIt.push( new PostIt (450, 100, 250, 250, "red", "", tablePostIt.length ))
    tablePostIt[tablePostIt.length-1].affichePostIt()
})
document.querySelector(".post2").addEventListener("click",()=>{
    tablePostIt.push( new PostIt (450, 375, 250, 250, "blue", "", tablePostIt.length ))
    tablePostIt[tablePostIt.length-1].affichePostIt()
})
document.querySelector(".post3").addEventListener("click",()=>{
    tablePostIt.push( new PostIt (450, 650, 250, 250, "yellow", "", tablePostIt.length ))
    tablePostIt[tablePostIt.length-1].affichePostIt()
})
document.body.addEventListener("keydown", (evt)=>{
    console.log(evt.key)
    if (numPostIt>-1 && action=="ecrit") {
        if(evt.key=="Backspace"){
    
            tablePostIt[numPostIt].changementText(tablePostIt[numPostIt].texte.substr(0, tablePostIt[numPostIt].texte.length-1))
            tablePostIt[numPostIt].affichePostIt()
        }
        else if(evt.key=="Delete"){  
            tablePostIt[numPostIt].changementText(tablePostIt[numPostIt].texte.substr(0, tablePostIt[numPostIt].texte.length-1))
            tablePostIt[numPostIt].affichePostIt()
        }
        else if(evt.key=="Enter"){  
            tablePostIt[numPostIt].changementText(tablePostIt[numPostIt].texte+"<br>")
            tablePostIt[numPostIt].affichePostIt()
        }
        else if(evt.key=="²"){
        }
        else if(evt.key=="Tab"){
        }
        else if(evt.key=="CapsLock"){
        }
        else if(evt.key=="Shift"){    
        }
        else if(evt.key=="Control"){
        }
        else if(evt.key=="Meta"){  
        }
        else if(evt.key=="Alt"){  
        }
        else if(evt.key=="AltGraph"){  
        }
        else if(evt.key=="ContextMenu"){  
        }
        else if(evt.key=="NumLock"){  
        }
        else if(evt.key=="Escape"){  
        }
        else {
            tablePostIt[numPostIt].changementText(tablePostIt[numPostIt].texte+evt.key)
            tablePostIt[numPostIt].affichePostIt()
        }
    }
})
document.body.addEventListener("mousemove",(evt)=>{
    if(numPostIt>-1 && action=="deplace") {
        tablePostIt[numPostIt].deplacement(evt.clientX-tablePostIt[numPostIt].largeur+220,evt.clientY-tablePostIt[numPostIt].hauteur+20)
        tablePostIt[numPostIt].affichePostIt()
    }
    if(numPostIt>-1 && action=="redimensionne") {
        tablePostIt[numPostIt].redimensionnement(evt.clientX-tablePostIt[numPostIt].xorigin+tablePostIt[numPostIt].largeurorigin,evt.clientY-tablePostIt[numPostIt].yorigin+tablePostIt[numPostIt].hauteurorigin)
        tablePostIt[numPostIt].affichePostIt()
    }
})
document.body.addEventListener("click",()=>{
    numPostIt=-1
    action = ""
})