
const maxRepeat = (str) => {

    let maxChar = "";
    let maxLength = 0;

    let curChar = "";
    let curLength = 0;

    for(let i = 0; i < str.length; i++) {

        if(curChar === str[i]) {
            curLength ++;
        }
        else {
            curChar = str[i];
            curLength = 1;
        }

        if(curLength > maxLength) {
        console.log(curLength, "char", maxLength, "maxChar")
            maxChar = curChar;
            maxLength = curLength
        }
    }
        return {
            value: maxChar,
            length: maxLength
        }

}

const str = "aaaaaabbbbbbcccceeeeaaaaaaaaaaddddddd";
console.log(maxRepeat(str))