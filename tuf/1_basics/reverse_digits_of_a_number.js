let N = 0;

function reverseInteger(N) {
    let rem = Math.abs(N);
    let str = '';
    while (rem > 0) {
        str += (rem % 10);
        rem = Math.floor(rem / 10);
    }
    str = parseFloat(str) || 0;
    if (str > Math.pow(2, 31)) {
        return 0;
    }
    return (N < 0) ? -str : str;
}

reverseInteger(N);