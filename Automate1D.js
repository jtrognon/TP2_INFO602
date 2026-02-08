class Automate1D{
    length;
    automate1D;
    regle;

    constructor(length){
        this.length = length;
        this.automate1D = [];
        this.automate1D.length = length;
        this.automate1D.fill("0");
        this.regle = {
            "111" : "0",
            "110" : "1",
            "101" : "1",
            "100" : "0",
            "011" : "1",
            "010" : "1",
            "001" : "1",
            "000" : "0"
        }

        this.initAutomate();
        //console.log(this.automate1D);
        this.next();
        //console.log(this.automate1D);
    }

    initAutomate() {
        this.automate1D[Math.floor(this.length/2)] = "1";
    }

    next(){
        this.automate1D[0] = this.regle["0"+this.automate1D[0]+this.automate1D[1]];

        for (let i=1; i<(this.length)-1; i++) {
            this.automate1D[i] = this.regle[this.automate1D[i-1]+this.automate1D[i]+this.automate1D[i+1]];
        }

        this.automate1D[(this.length)-1] = this.regle[this.automate1D[(this.length)-2]+this.automate1D[(this.length)-1]+"0"];
    }
}

new Automate1D(100);
