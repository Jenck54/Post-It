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
        elem.style.position = "fixed"
        elem.style.width = this.largeur+"px"
        elem.style.height = this.hauteur+"px"
        elem.style.backgroundColor = this.couleur
        elem.style.top = this.y+"px"
        elem.style.left = this.x+"px"
        elem.innerHTML = this.texte
        elem.id = "PostIt"+this.id
    }
}