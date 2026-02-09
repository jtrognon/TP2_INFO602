class MainView {
    // Settings
    updateTime; // time out between each update
    static MS = 1; // value of 1 millisecond

    constructor(updateTime) {
        this.updateTime = updateTime;

        // Title
        const title = document.createElement('h1');
        title.innerText = "Automate Cellulaire";
        document.body.appendChild(title);

        
        // Sections
        this.create1DSection(document.body);
        this.createGameOfLifeSection(document.body);
        this.createEpidemicSection(document.body);
    }


    create1DSection(container){
        // Section
        const section1D = document.createElement("section");
        section1D.id = "section1D";
        container.appendChild(section1D);

        // Title
        const title = document.createElement("h2");
        title.innerHTML = "Automate cellulaire 1D"
        section1D.appendChild(title);

        // Grid
        let automate1D = new Automate1D(100)
        let grid1D = new Grid1D(section1D, automate1D.getArray());

        setInterval(_ => {
            automate1D.next();
            grid1D.updateGrid();
        }, this.updateTime)
    }

    createGameOfLifeSection(container){
        // Section
        const sectionGOL = document.createElement("section");
        sectionGOL.id = "sectionGOL";
        container.appendChild(sectionGOL);

        // Title
        const title = document.createElement("h2");
        title.innerHTML = "Jeu de la vie"
        sectionGOL.appendChild(title);

        // Grid
        let gol = new Grid(10, 10)
        let gridGOL = new Grid2D(sectionGOL, gol.getGrid(), 10, 10);

        setInterval(_ => {
            gol.next();
            
            gridGOL.updateGrid(gol.getGrid());
            
        }, this.updateTime)
    }


    createEpidemicSection(container){
        // Section
        const sectionEpidemic = document.createElement("section");
        sectionEpidemic.id = "sectionEpidemic";
        container.appendChild(sectionEpidemic);

        // Title
        const title = document.createElement("h2");
        title.innerHTML = "Épidémie"
        sectionEpidemic.appendChild(title);

        // Grid
        let epidemic = new Epidemie(10, 10, 0.5, 0.05)
        let gridEpidemic = new GridEpidemic(sectionEpidemic, epidemic.getGrid(), 10, 10);

        setInterval(_ => {
            epidemic.next();
            gridEpidemic.updateGrid(epidemic.getGrid());
            
        }, this.updateTime)
    }
}