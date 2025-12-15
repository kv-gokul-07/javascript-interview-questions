1..

var out = 20;
function whatsOut() {
    var out = 10;
    return out;
}

console.log(whatsOut()); //Output: 10

<---------------------------------------------------------->

2. 
    
    console.log(null + undefined);  --  NAN
    console.log(undefined + null);  --  NAN
    console.log(1 + null);  --  1
    console.log(null + 1); --  1
    console.log(undefined + 2); -- NAN
    console.log(2 + undefined); --  NAN
    console.log(2 ++ 2); -- ERROR
    console.log(2 + + 2); --  4
    console.log(null + + null);  -- 0
    console.log( 1 + "ABS"); --  1ABS
    console.log( "ABS" + 1); -- ABS1
