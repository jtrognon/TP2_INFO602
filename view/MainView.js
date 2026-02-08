class MainView {
    constructor() {
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
        let grid1D = new Grid1D(section1D, [0, 1, 1, 0, 1, 0], 10 * Grid1D.MS);
    }
}