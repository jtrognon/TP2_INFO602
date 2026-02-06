class MainView {
    constructor(parameters) {
        // Title
        const title = document.createElement('h1');
        title.innerText = "Automate Cellulaire";
        document.body.appendChild(title);

        /* 
        ===============================================================
        =========================== 1D grid ===========================
        ===============================================================
        */

        // 1DGrid section
        let section1D = document.createElement("section");
        section1D.id = "section1D";
        document.body.appendChild(section1D);

        let grid1D = new Grid1D(section1D, [0, 1, 1, 0, 1, 0], 10 * Grid1D.MS);
    }
}