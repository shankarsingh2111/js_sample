function transpose(matrix) {
    let transp = [];
    let length = matrix.length;
    let breadth = matrix[0].length;

    let i = 0, j = 0;
    while(j < breadth){
        console.log('i =',i, 'j = ',j);
        if(!transp[j]){
            transp[j] = [];
        }
        if(i < length){
            transp[j][i] = matrix[i][j];
            i++;
        }
        else {
            i = 0;
            j++;
        }
    }
    
    console.log(transp);
    return transp;
}


let matrix = [[1,2,3],[4,5,6],[7,8,9]];

let transp = transpose(matrix);

console.log('transp =',JSON.stringify(transp));