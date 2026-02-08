class Grid {
    lineLength;
    columnLength;
    grille;

    constructor(lineLength, columnLength) {
        this.lineLength = lineLength;
        this.columnLength = columnLength;
        this.grille = [];

        this.initGrille();
        //console.log(this.grille);
        this.next();
        //console.log(this.grille);
    }

    random_choice(){
        var choice = [0, 1];
        const ind = Math.floor(Math.random() * choice.length);
        return choice[ind];
    }

    initGrille(){
        for (let i=0; i<this.lineLength; i++){
            let line = [];
            this.grille.push(line);
            for (let j=0; j<this.columnLength; j++) {
                line.push(this.random_choice());
            }
        } 
    }

    nb_voisins(i,j) { 
        let nb_voisins = 0;
        
        if (i == 0 && j == 0){
            nb_voisins = 
                this.grille[i][j+1] +   // Milieu droite
                this.grille[i+1][j] +   // Bas milieu
                this.grille[i+1][j+1];  // Bas droite
        } else if (i == 0 && j == this.lineLength-1) {
            nb_voisins = 
                this.grille[i][j-1] +   // Milieu gauche
                this.grille[i+1][j-1] + // Bas gauche
                this.grille[i+1][j];    // Bas milieu
        } else if (i == this.columnLength-1 && j == 0) {
            nb_voisins = 
                this.grille[i-1][j] +   // Haut milieu
                this.grille[i-1][j+1] + // Haut droite
                this.grille[i][j+1];    // Milieu droite
        } else if (i == this.columnLength-1 && j == this.lineLength-1) {
            nb_voisins = 
                this.grille[i-1][j-1] + // Haut gauche
                this.grille[i-1][j] +   // Haut milieu
                this.grille[i][j-1];    // Milieu gauche


        } else if (i == 0) {
            nb_voisins = 
                this.grille[i][j-1] +   // Milieu gauche
                this.grille[i][j+1] +   // Milieu droite
                this.grille[i+1][j-1] + // Bas gauche
                this.grille[i+1][j] +   // Bas milieu
                this.grille[i+1][j+1];  // Bas droite
        } else if (j == 0){
            nb_voisins = 
                this.grille[i-1][j] +   // Haut milieu
                this.grille[i-1][j+1] + // Haut droite
                this.grille[i][j+1] +   // Milieu droite
                this.grille[i+1][j] +   // Bas milieu
                this.grille[i+1][j+1];  // Bas droite
        } else if (j == this.lineLength-1) {
            nb_voisins = 
                this.grille[i-1][j-1] + // Haut gauche
                this.grille[i-1][j] +   // Haut milieu
                this.grille[i][j-1] +   // Milieu gauche
                this.grille[i+1][j-1] + // Bas gauche
                this.grille[i+1][j];    // Bas milieu
        } else if (i == this.columnLength-1){
            nb_voisins = 
                this.grille[i-1][j-1] + // Haut gauche
                this.grille[i-1][j] +   // Haut milieu
                this.grille[i-1][j+1] + // Haut droite
                this.grille[i][j-1] +   // Milieu gauche
                this.grille[i][j+1];    // Milieu droite


        } else {
            nb_voisins = 
                this.grille[i-1][j-1] + // Haut gauche
                this.grille[i-1][j] +   // Haut milieu
                this.grille[i-1][j+1] + // Haut droite
                this.grille[i][j-1] +   // Milieu gauche
                this.grille[i][j+1] +   // Milieu droite
                this.grille[i+1][j-1] + // Bas gauche
                this.grille[i+1][j] +   // Bas milieu
                this.grille[i+1][j+1];  // Bas droite
        }
        return nb_voisins;
    }

    next(){
        let nouvelleGrille = [];

        for (let i=0; i < this.lineLength; i++) {
            let ligne = [];
            for (let j=0; j<this.columnLength; j++) {
                ligne.push(this.grille[i][j]);
            }
            nouvelleGrille.push(ligne);
        }

        for (let i=0; i<this.lineLength; i++){
            for (let j=0; j<this.columnLength; j++){
                const nb_voisins = this.nb_voisins(i,j);

                if(this.grille[i][j] == 1 && nb_voisins == 2 || this.grille[i][j] == 1 && nb_voisins == 3){
                    nouvelleGrille[i][j] = 1;
                } else if(this.grille[i][j] == 0 && nb_voisins == 3) {
                    nouvelleGrille[i][j] = 1;
                } else {
                    nouvelleGrille[i][j] = 0;
                }
            }
        }
        this.grille = nouvelleGrille;
    }
}

new Grid(4,4);
