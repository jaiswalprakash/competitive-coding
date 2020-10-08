// the alphabet: 'abcdefghijklmnopqrstuvwxyz'

function findTheNumberPlate(customerID) {
    num = 001 + (customerID % 999);
    var letter = Math.round(customerID / 999);
    var answer=[97,97,97]
    while (letter != 0) {
        var val = Math.round(letter / 26);
        console.log(val);
        if(val==1){
            answer[0]=`${97+26}`
            break;
        }
        if (val <= 26 && val > 0) {
            answer[1]=97+val
            console.log("ans1",answer)
            
        }
        
    
        else {
            let val2 = Math.round(val / 26);
            if (val2 <= 26 && val2 > 0) {
                answer[2]=97+val2;
                console.log("ans2",answer)
            }

        }
        letter = val;
    }
    var res = String.fromCharCode(answer[0],answer[1],answer[2]);
    console.log(answer)
    return `${res+num}`

}
console.log(findTheNumberPlate(234567));  
