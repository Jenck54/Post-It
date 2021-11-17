class PostIt {
    x;
    y;
    largeur;
    hauteur;
    couleur;
    texte;
    id;
    /**
     * X est horizontal (abscisse) et Y est vertical (ordonnee) par rapport a en haut a gauche de la fenetre
     * La largeur et la hauteur de l'element
     * Le changement de la couleur du post-it
     * Le texte qui sera rentrer dans le post-it
     * Le numero du post-it
     * @param  {number} x L'abscisse
     * @param  {number} y L'ordonnee
     * @param  {number} largeur La largeur de l'element
     * @param  {number} hauteur La hauteur de l'element
     * @param  {string} couleur La couleur du post-it
     * @param  {string} texte Le texte rentrer dans le post-it
     * @param  {number} id
     */
    constructor(x, y, largeur, hauteur, couleur, texte, id) {
        this.x=x;
        this.y=y;
        this.largeur=largeur;
        this.hauteur=hauteur;
        this.couleur=couleur;
        this.texte=texte;
        this.id=id;
    }
    /**
     * X est horizontal et Y est vertical par rapport a en haut a gauche de la fenetre
     * @param  {number} x L'abscisse
     * @param  {number} y L'ordonnee
     */
    deplacement(x, y) {
        this.x=x;
        this.y=y;
    }
    /**
     * La largeur et la hauteur de l'element
     * @param  {number} largeur La largeur de l'element
     * @param  {number} hauteur La hauteur de l'element
     */
    redimensionnement(largeur, hauteur) {
        this.largeur=largeur;
        this.hauteur=hauteur;
    }
    /**
     * Le texte qui sera rentrer dans le post-it
     * @param  {string} texte
     */
    changementText(texte) {
        this.texte=texte;
    }
    /**
     * Le changement de la couleur du post-it
     * @param  {string} couleur
     */
    changerCouleur(couleur) {
        this.couleur=couleur;
    }
    /**
     * Fonction qui permet d'afficher le post-it ainsi que ses boutons
     */
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
            elem.parentNode.removeChild(elem)
            supprimer(this.id)
        })
    }
}