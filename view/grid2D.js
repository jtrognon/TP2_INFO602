class Grid2D {
    container;

    // Size
    nbRows;
    nbColumns;
    
    // Cells
    values; // cells' values
    cells; // graphical cells

    constructor(container, values, nbRows, nbColumns) {
        this.container = container;

        // Size
        this.nbRows = nbRows;
        this.nbColumns = nbColumns;

        // Cells
        this.values = values;
        
        this.createView();
    }

    createView(){
        this.cells = [];

        // Grid
        let grid = document.createElement("table");
        grid.id = "life";
        this.container.appendChild(grid);
        
        // init cells
        for (let i = 0; i < this.nbRows; i++){
            // line
            let line = document.createElement("tr");
            grid.appendChild(line);

            this.cells.push([]);

            for (let j = 0; j < this.nbColumns; j++) {                
                let cell = document.createElement("td");
                this.cells[i].push(cell);
                line.appendChild(cell)
            }
        };


        this.updateGrid();
    }

    updateGrid(){
        for (let i = 0; i < this.nbRows; i++) {
            for (let j = 0; j < this.nbColumns; j++) {
                if (this.values[i][j] == 1){
                    this.cells[i][j].classList.add("alive");
                } else{
                    this.cells[i][j].classList.remove("alive");
                }
            }

        }
    }
}