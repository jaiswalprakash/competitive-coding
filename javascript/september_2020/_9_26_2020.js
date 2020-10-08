//1.write a function takes input as “ he is going to school” 

//a.Print total number of words .

function WordCount(str) {
    str1 = str.trim();
    str2 = str1.replace(/[ ]{2,}/gi, " ");
    console.log(str2);
    return str2.split(" ")
    
}
console.log(WordCount("he   is going to school"));




//b.Remove space with “ , ”.





//c.Total number of counts of each character.

function counts(str){
    let lookup={};
    for(i=0;i<str.length;i++){
        let letter =str[i];
        lookup[letter]?lookup[letter]+=1:lookup[letter]=1;
    }
    return lookup;
}

console.log(counts("he   is going to school"));


