class Grid1D {
    // Cells
    nbCells;
    values; // cells' values
    cells; // graphical cells

    // Settings
    updateTime; // time out between each update
    static MS = 1; // value of 1 millisecond

    constructor(container, values, updateTime) {
        // Cells
        this.nbCells = values.length;
        this.values = values;
        this.cells = [];

        // Settings
        this.updateTime = updateTime;


        // Grid
        let grid = document.createElement("table");
        grid.id = "grid1D";
        container.appendChild(grid);

        // line
        let line = document.createElement("tr");
        grid.appendChild(line);

        // init cells
        for (let i = 0; i < this.nbCells; i++){
            let cell = document.createElement("td");
            this.cells.push(cell);
            line.appendChild(cell)
        };


        this.updateGrid();
    }

    updateGrid(){
        for (let i = 0; i < this.nbCells; i++) {
            if (this.values[i] == 1){
                this.cells[i].classList.add("alive");
            } else {
                this.cells[i].classList.remove("alive");
            }
        }
    }
}