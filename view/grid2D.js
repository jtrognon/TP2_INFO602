class Grid2D {
    container;
    id;

    // Size
    nbRows;
    nbColumns;
    
    // Cells
    cells; // graphical cells

    constructor(container, values, nbRows, nbColumns, id) {
        this.container = container;
        this.id = id;

        // Size
        this.nbRows = nbRows;
        this.nbColumns = nbColumns;
        
        this.createView(values);
    }

    createView(values){
        this.cells = [];

        // Grid
        let grid = document.createElement("table");
        grid.id = this.id;
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


        this.updateGrid(values);
    }

    updateGrid(values){
        for (let i = 0; i < this.nbRows; i++) {
            for (let j = 0; j < this.nbColumns; j++) {
                if (values[i][j] == 1){
                    this.cells[i][j].classList.add("alive");
                } else{
                    this.cells[i][j].classList.remove("alive");
                }
            }

        }
    }
}