class Epidemie {
    lineLength;
    columnLength;
    p1;
    p2;
    etat;
    grille;

    constructor(lineLength, columnLength, p1, p2){
        this.lineLength = lineLength;
        this.columnLength = columnLength;
        this.p1 = p1;
        this.p2 = p2;
        this.etat = [
            "saine",
            "morte",
            "malade",
            "immunisee"
        ];
        this.grille = [];

        this.initGrille();

    }

    tauxContamination(){
        let infectes = 0;
        for(let i=0; i<this.lineLength; i++){
            for(let j=0; j<this.columnLength; j++){
                if (this.grille[i][j] != "saine"){
                    infectes++;
                }
            }
        }
        return (infectes / (this.lineLength * this.columnLength)) *100;
    }

    trouverSeuilP2() {
        this.p1 = 0.5;
        for (let p2_test = 0.1; p2_test <= 1.0; p2_test += 0.05) {
            
            this.grille = [];
            this.initGrille();
            this.p2 = p2_test;

            let iterations = 0;
            while (!this.estStable() && iterations < 1000) {
                this.next();
                iterations++;
            }

            let taux = this.tauxContamination();

            if (taux >= 95) {
                return p2_test;
            }
        }
    }

    initGrille(){
        for (let i=0; i<this.lineLength; i++){
            let line = [];
            this.grille.push(line);
            for (let j=0; j<this.columnLength; j++) {
                line.push("saine");
            }
        } 
        this.grille[Math.floor(Math.random() * this.lineLength)][Math.floor(Math.random() * this.columnLength)] = "malade";
    }

    estStable() {
        for (let i=0; i<this.lineLength; i++){
            for(let j=0; j<this.columnLength; j++){
                if (this.grille[i][j] == "malade") {
                    return false;
                }
            }
        }
        return true;
    }

    simuler() {
        let tour = 0;

        while (!this.estStable() && tour<1000){
            this.next();
            tour++;
        }
    }

    simuler_immuniser(){
        let imu = 0.3;
        for(let i = 0; i<this.lineLength; i++) {
            for(let j = 0; j<this.columnLength; j++) {
                if(this.grille[i][j] == "saine" && Math.random() < imu) {
                    this.grille[i][j] = "immunisee";
                }
            }
        }

        let tour = 0;

        while (!this.estStable() && tour<1000){
            this.next();
            tour++;
        }
    }

    nb_voisins(i,j) { 
        let nb_voisins = 0;
        
        if (i == 0 && j == 0){
                if(this.grille[i][j+1] == "malade") nb_voisins++;   // Milieu droite
                if(this.grille[i+1][j] == "malade") nb_voisins++;   // Bas milieu
                if(this.grille[i+1][j+1] == "malade") nb_voisins++;  // Bas droite

        } else if (i == 0 && j == this.columnLength-1) {
                if(this.grille[i][j-1] == "malade") nb_voisins++; // Milieu gauche
                if(this.grille[i+1][j-1] == "malade") nb_voisins++; // Bas gauche
                if(this.grille[i+1][j] == "malade") nb_voisins++;    // Bas milieu

        } else if (i == this.lineLength-1 && j == 0) {
                if(this.grille[i-1][j] == "malade") nb_voisins++;   // Haut milieu
                if(this.grille[i-1][j+1] == "malade") nb_voisins++; // Haut droite
                if(this.grille[i][j+1] == "malade") nb_voisins++;   // Milieu droite

        } else if (i == this.lineLength-1 && j == this.columnLength-1) {
                if(this.grille[i-1][j-1] == "malade") nb_voisins++; // Haut gauche
                if(this.grille[i-1][j] == "malade") nb_voisins++;   // Haut milieu
                if(this.grille[i][j-1] == "malade") nb_voisins++;   // Milieu gauche


        } else if (i == 0) {
                if(this.grille[i][j-1] == "malade") nb_voisins++;   // Milieu gauche
                if(this.grille[i][j+1] == "malade") nb_voisins++;   // Milieu droite
                if(this.grille[i+1][j-1] == "malade") nb_voisins++; // Bas gauche
                if(this.grille[i+1][j] == "malade") nb_voisins++;   // Bas milieu
                if(this.grille[i+1][j+1] == "malade") nb_voisins++;  // Bas droite

        } else if (j == 0){
                if(this.grille[i-1][j] == "malade") nb_voisins++;   // Haut milieu
                if(this.grille[i-1][j+1] == "malade") nb_voisins++; // Haut droite
                if(this.grille[i][j+1] == "malade") nb_voisins++;   // Milieu droite
                if(this.grille[i+1][j] == "malade") nb_voisins++;   // Bas milieu
                if(this.grille[i+1][j+1] == "malade") nb_voisins++;  // Bas droite

        } else if (j == this.columnLength-1) {
                if(this.grille[i-1][j-1] == "malade") nb_voisins++; // Haut gauche
                if(this.grille[i-1][j] == "malade") nb_voisins++;   // Haut milieu
                if(this.grille[i][j-1] == "malade") nb_voisins++;   // Milieu gauche
                if(this.grille[i+1][j-1] == "malade") nb_voisins++; // Bas gauche
                if(this.grille[i+1][j] == "malade") nb_voisins++;   // Bas milieu

        } else if (i == this.lineLength-1){
                if(this.grille[i-1][j-1] == "malade") nb_voisins++; // Haut gauche
                if(this.grille[i-1][j] == "malade") nb_voisins++;   // Haut milieu
                if(this.grille[i-1][j+1] == "malade") nb_voisins++; // Haut droite
                if(this.grille[i][j-1] == "malade") nb_voisins++;   // Milieu gauche
                if(this.grille[i][j+1] == "malade") nb_voisins++;   // Milieu droite


        } else {
                if(this.grille[i-1][j-1] == "malade") nb_voisins++; // Haut gauche
                if(this.grille[i-1][j] == "malade") nb_voisins++;   // Haut milieu
                if(this.grille[i-1][j+1] == "malade") nb_voisins++; // Haut droite
                if(this.grille[i][j-1] == "malade") nb_voisins++;   // Milieu gauche
                if(this.grille[i][j+1] == "malade") nb_voisins++;   // Milieu droite
                if(this.grille[i+1][j-1] == "malade") nb_voisins++; // Bas gauche
                if(this.grille[i+1][j] == "malade") nb_voisins++;   // Bas milieu
                if(this.grille[i+1][j+1] == "malade") nb_voisins++;  // Bas droite
        }
        return nb_voisins;
    }

    next() {
        let nouvelleGrille = [];

        for (let i=0; i < this.lineLength; i++) {
            let ligne = [];
            for (let j=0; j<this.columnLength; j++) {
                ligne.push(this.grille[i][j]);
            }
            nouvelleGrille.push(ligne);
        }

        for (let i=0; i<this.lineLength; i++) {
            for (let j=0; j<this.columnLength; j++) {

                const etatCourant = this.grille[i][j];

                if(etatCourant == "morte") {
                    nouvelleGrille[i][j] = "morte";
                }
                else if(etatCourant == "malade") {
                    if(Math.random() < this.p1) {
                        nouvelleGrille[i][j] = "morte";
                    }else{
                        nouvelleGrille[i][j] = "immunisee";
                    }
                }
                else if (etatCourant == "immunisee") {
                    nouvelleGrille[i][j] = "immunisee";
                }
                else if (etatCourant == "saine") {
                    const nb_voisins = this.nb_voisins(i,j);

                    if (nb_voisins > 0) {
                        if (Math.random() < this.p2) {
                            nouvelleGrille[i][j] = "malade";
                        }
                    }
                }
            }
        }
        
        this.grille = nouvelleGrille;
    }

    getGrid(){
        return this.grille;
    }
}