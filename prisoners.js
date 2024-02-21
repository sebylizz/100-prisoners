const runs = 10000; // How many rounds should the program run
const amount = 100; // Amount of prisoners and boxes. Chances equals to half of this

function prepbox(nr){
    let boxArr = [nr];
    for(let i = 0; i < nr; i++){
        boxArr[i] = i;
    }
    let i = nr;
    while(i > 0){
        let random = Math.floor(Math.random()*i);
        i--;
        [boxArr[i], boxArr[random]] = [boxArr[random], boxArr[i]];
    }
    return boxArr;
}

function person(personnr, boxs, nr){
    let chances = nr/2;
    let curbox = personnr;
    while(chances > 0){
        if(boxs[curbox] === personnr){
            return true;
        }
        curbox = boxs[curbox];
        chances--;
    }
    return false;
}

function runGame(nr){
    let boxs = prepbox(nr);
    let success = true;
    for(let i = 0; i < nr; i++){
        if(success === false){break;}
        success = person(i, boxs, nr);
    }
    return (success === true) ? true : false;
}

let totalW = 0;
for(let x = 0; x < runs; x++){
    if(runGame(amount)){totalW++}
}
console.log(totalW / runs * 100);