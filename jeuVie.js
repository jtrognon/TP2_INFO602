class Grid {
    lineLength;
    columnLength;
    grille;

    constructor(lineLength, columnLength, randGen=true) {
        this.lineLength = lineLength;
        this.columnLength = columnLength;
        this.grille = [];

        this.initGrille(randGen);
    }

    random_choice(){
        var choice = [0, 1];
        const ind = Math.floor(Math.random() * choice.length);
        return choice[ind];
    }

    initGrille(randGen){
        if (randGen){
            for (let i=0; i<this.lineLength; i++){
                let line = [];
                this.grille.push(line);
                for (let j=0; j<this.columnLength; j++) {
                    line.push(this.random_choice());
                }
            } 
        } else {
            for (let i=0; i<this.lineLength; i++){
                let line = [];
                line.length = this.columnLength;
                line.fill(0);

                this.grille.push(line);
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
        } else if (i == 0 && j == this.columnLength-1) {
            nb_voisins = 
                this.grille[i][j-1] +   // Milieu gauche
                this.grille[i+1][j-1] + // Bas gauche
                this.grille[i+1][j];    // Bas milieu
        } else if (i == this.lineLength-1 && j == 0) {
            nb_voisins = 
                this.grille[i-1][j] +   // Haut milieu
                this.grille[i-1][j+1] + // Haut droite
                this.grille[i][j+1];    // Milieu droite
        } else if (i == this.lineLength-1 && j == this.columnLength-1) {
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
        } else if (j == this.columnLength-1) {
            nb_voisins = 
                this.grille[i-1][j-1] + // Haut gauche
                this.grille[i-1][j] +   // Haut milieu
                this.grille[i][j-1] +   // Milieu gauche
                this.grille[i+1][j-1] + // Bas gauche
                this.grille[i+1][j];    // Bas milieu
        } else if (i == this.lineLength-1){
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

    getGrid(){
        return this.grille;
    }

    setGrid(nouvelleGrille){
        this.grille = nouvelleGrille;
    }

    static glider(){
        let grid = new Grid(20, 36, false);

        let grille = grid.getGrid();
        

        grille[0][24] = 1;

        grille[1][22] = 1;
        grille[1][24] = 1;

        grille[2][12] = 1;
        grille[2][13] = 1;
        grille[2][20] = 1;
        grille[2][21] = 1;
        grille[2][34] = 1;
        grille[2][35] = 1;

        grille[3][11] = 1;
        grille[3][15] = 1;
        grille[3][20] = 1;
        grille[3][21] = 1;
        grille[3][34] = 1;
        grille[3][35] = 1;

        grille[4][0] = 1;
        grille[4][1] = 1;
        grille[4][10] = 1;
        grille[4][16] = 1;
        grille[4][20] = 1;
        grille[4][21] = 1;

        grille[5][0] = 1;
        grille[5][1] = 1;
        grille[5][10] = 1;
        grille[5][14] = 1;
        grille[5][16] = 1;
        grille[5][17] = 1;
        grille[5][22] = 1;
        grille[5][24] = 1;

        grille[6][10] = 1;
        grille[6][16] = 1;
        grille[6][24] = 1;

        grille[7][11] = 1;
        grille[7][15] = 1;

        grille[8][12] = 1;
        grille[8][13] = 1;


        grid.setGrid(grille);

        return grid;
    }
}

