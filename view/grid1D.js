class Grid1D {
    container;

    // Cells
    nbCells;
    values; // cells' values
    cells; // graphical cells

    constructor(container, values) {
        this.container = container;

        // Cells
        this.nbCells = values.length;
        this.values = values;
        
        this.createView();

        window.addEventListener("resize", _ => {
            this.destroyView();
            this.createView();
        })
    }

    createView(){
        this.cells = [];

        // Grid
        let grid = document.createElement("table");
        grid.id = "grid1D";
        this.container.appendChild(grid);
        
        // init cells
        let nbRows = Math.ceil(this.nbCells / (document.body.clientWidth * 0.8 / 20));
        let maxNbCellsPerRow = Math.ceil(this.nbCells / nbRows);
        

        for (let i = 0; i < nbRows; i++){
            let nbCellsPerRow = (i+1 < nbRows || this.nbCells % maxNbCellsPerRow == 0) ? maxNbCellsPerRow : (this.nbCells % maxNbCellsPerRow);

            // line
            let line = document.createElement("tr");
            grid.appendChild(line);

            for (let j = 0; j < nbCellsPerRow; j++) {                
                let cell = document.createElement("td");
                this.cells.push(cell);
                line.appendChild(cell)
            }
        };


        this.updateGrid();
    }

    updateGrid(){
        for (let i = 0; i < this.nbCells; i++) {
            if (this.values[i] == 1){
                this.cells[i].classList.add("alive");
            } else{
                this.cells[i].classList.remove("alive");
            }
        }
    }

    destroyView(){
        let grid = document.querySelector("#grid1D");
        this.container.removeChild(grid);
    }
}