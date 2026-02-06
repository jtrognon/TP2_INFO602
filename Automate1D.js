const automate1D = [];
automate1D.length = 99;
automate1D.fill("0");

const regle = {
    "111" : "0",
    "110" : "1",
    "101" : "1",
    "100" : "0",
    "011" : "1",
    "010" : "1",
    "001" : "1",
    "000" : "0"
}

function initAutomate(automate1D) {
    automate1D[Math.floor(automate1D.length/2)] = "1";
}

function next(automate1D){
    const length = automate1D.length-1;
    automate1D[0] = regle["0"+automate1D[0]+automate1D[1]];

    for (let i=1; i<length; i++) {
        automate1D[i] = regle[automate1D[i-1]+automate1D[i]+automate1D[i+1]];
    }

    automate1D[length] = regle[automate1D[length-1]+automate1D[length]+"0"];
}
