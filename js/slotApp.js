const factor = function (num){         // returns factor of num (num = 9 factor = 3)
            
    let factor = 0;
    for (let i = 0; i < num; i++) {
        if (i * i === num) {
            factor = i;
        }
    }
    return factor;
};      
const createMatrix = function (arr){   // returns a matrix (len of array 9 = 3x3 grid) from input array (arr)
    
    let length = arr.length;
    let colLength = factor(length);
    let matrix = [];
    let array = [];
    
    // clones arr to array
    for (let i = 0; i < length; i++){
        array[i] = arr[i].innerHTML;
    }

    // inserts array into grid by factor of the length (3x3)
    let i = 1;
    while (i < length){
        let subArray = [];
        for (let j = 0; j < colLength; j++){
            let elem = array.shift();
            subArray.push(elem);
            i++;
        }
        matrix.push(subArray);
    }

    //  ['1', '2', '3'],  or ['1', '2', '3'], ['2', '5', '6'], ['1', '8', '9']
    //  ['2', '5', '6'],
    //  ['1', '8', '9']
    return matrix;
};       
const randomNumber = function(l){      // returns random number (0 - 8) length 9   
    return Math.floor(Math.random() * l + 1) -1;
};             

const boxes = document.querySelectorAll('.box');
const length = boxes.length;
const rowLength = factor(length);

let matrix = [];

let row1Elem = document.getElementById('row1');
let row2Elem = document.getElementById('row2');
let row3Elem = document.getElementById('row3');

const checkRows = function(num) {
    if (matrix[num][0] === matrix[num][1] && matrix[num][0] === matrix[num][2]) {
        return 2;   // 3 of a kind
    } 
    if (matrix[num][0] === matrix[num][1] || matrix[num][0] === matrix[num][2] || matrix[num][1] === matrix[num][2]) {
        return 1;  // 2 of a kind
    } 
};

const spin = function() {
    for (let i = 0; i < length; i++){
        let random = randomNumber(length);
        boxes[i].innerHTML = random;

        setTimeout(() => {
            boxes[i].classList.toggle("box-show");
        }, 100);

        setTimeout(() => {
            boxes[i].classList.remove("box-show");
        },1400);

    }

    matrix = createMatrix(boxes);

    if (checkRows(0) === 2 ) {  
        setTimeout(() => {
            row1Elem.classList.toggle("line-jackpot-showJP");
        }, 200);

        setTimeout(() => {
            row1Elem.classList.remove("line-jackpot-showJP");
        },1300);
    } else if (checkRows(0) === 1 ) {  
        setTimeout(() => {
            row1Elem.classList.toggle("line-jackpot-show");
        }, 200);

        setTimeout(() => {
            row1Elem.classList.remove("line-jackpot-show");
        },1300);
    }

    if (checkRows(1) === 2) {
        setTimeout(() => {
            row2Elem.classList.toggle("line-jackpot-showJP");
        }, 200);

        setTimeout(() => {
            row2Elem.classList.remove("line-jackpot-showJP");
        },1300); 
    } else if (checkRows(1) === 1 ) {  
        setTimeout(() => {
            row2Elem.classList.toggle("line-jackpot-show");
        }, 200);

        setTimeout(() => {
            row2Elem.classList.remove("line-jackpot-show");
        },1300);
    }

    if (checkRows(2) === 2) {
        setTimeout(() => {
            row3Elem.classList.toggle("line-jackpot-showJP");
        }, 200);

        setTimeout(() => {
            row3Elem.classList.remove("line-jackpot-showJP");
        },1300);  
    } else if (checkRows(2) === 1 ) {  
        setTimeout(() => {
            row3Elem.classList.toggle("line-jackpot-show");
        }, 200);

        setTimeout(() => {
            row3Elem.classList.remove("line-jackpot-show");
        },1300);
    }
};  