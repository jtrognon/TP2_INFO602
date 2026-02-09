class GridEpidemic {
    container;

    // Size
    nbRows;
    nbColumns;
    
    // Cells
    cells; // graphical cells

    constructor(container, values, nbRows, nbColumns) {
        this.container = container;

        // Size
        this.nbRows = nbRows;
        this.nbColumns = nbColumns;
        
        this.createView(values);
    }

    createView(values){
        this.cells = [];

        // Grid
        let grid = document.createElement("table");
        grid.id = "epidemic";
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
                let cell = this.cells[i][j];
                
                cell.setAttribute("class", "");
                cell.classList.add(values[i][j]);
            }
        }
    }
}