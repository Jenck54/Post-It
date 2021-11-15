class PostIt {
    x;
    y;
    largeur;
    hauteur;
    couleur;
    texte;
    id;

    constructor(x, y, largeur, hauteur, couleur, texte, id) {
        this.x=x;
        this.y=y;
        this.largeur=largeur;
        this.hauteur=hauteur;
        this.couleur=couleur;
        this.texte=texte;
        this.id=id;
    }
    deplacement(x, y) {
        this.x=x;
        this.y=y;
    }
    redimensionnement(largeur, hauteur) {
        this.largeur=largeur;
        this.hauteur=hauteur;
    }
    changementText(texte) {
        this.texte=texte;
    }
    changerCouleur(couleur) {
        this.couleur=couleur;
    }
    affichePostIt() {
        let elem=document.getElementById("PostIt"+this.id)
        if(elem==null) {
            elem=document.createElement("div")
            document.body.appendChild(elem)
        }
        elem.style.borderRadius = "10px"
        elem.style.position = "fixed"
        elem.style.width = this.largeur+"px"
        elem.style.height = this.hauteur+"px"
        elem.style.backgroundColor = this.couleur
        elem.style.top = this.y+"px"
        elem.style.left = this.x+"px"
        elem.innerHTML = this.texte
        elem.id = "PostIt"+this.id
        let menu = document.createElement("div")
        elem.appendChild(menu)
        menu.className = "menu"
        let btn1 = document.createElement("div")
        btn1.className = "fas fa-arrows-alt"
        menu.appendChild(btn1)
        btn1.addEventListener("click", (evt)=>{
            if(numPostIt==this.id) {
                numPostIt = -1
            }
            else {
                numPostIt = this.id
            }
            action = "deplace"
            evt.stopPropagation()
        })
        let btn2 = document.createElement("div")
        btn2.className = "fas fa-expand-arrows-alt"
        menu.appendChild(btn2)
        btn2.addEventListener("click",(evt)=>{
            if(numPostIt==this.id) {
                numPostIt = -1
            }
            else {
                numPostIt = this.id
            }
            this.xorigin = evt.clientX
            this.yorigin = evt.clientY
            this.largeurorigin = this.largeur
            this.hauteurorigin = this.hauteur
            action = "redimensionne"
            evt.stopPropagation()
        })
        let btn3 = document.createElement("div")
        btn3.className = "fas fa-file-alt"
        menu.appendChild(btn3)
        btn3.addEventListener("click",(evt)=>{
            numPostIt = this.id
            evt.stopPropagation()
            action = "ecrit"
        })
        let btn4 = document.createElement("div")
        btn4.className = "fas fa-paint-roller"
        menu.appendChild(btn4)
        btn4.addEventListener("click",()=>{
            if (this.couleur=="red") {
                this.changerCouleur("blue")
                this.affichePostIt()
            }
            else if (this.couleur=="blue") {
                this.changerCouleur("yellow")
                this.affichePostIt()
            }
            else if (this.couleur=="yellow") {
                this.changerCouleur("red")
                this.affichePostIt()
            }
        })
        let btn5 = document.createElement("div")
        btn5.className = "fas fa-trash-alt"
        menu.appendChild(btn5)
        btn5.addEventListener("click", (evt)=>{
            
        })
    }
}