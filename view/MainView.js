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

        
        // 1DGrid section
        this.create1DSection(document.body);
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
}