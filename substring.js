var isSubsequence = function(s, t) {
    let index=0
    for(let i=0;i<s.length;i++){
        let currIndex=t.substring(index).indexOf(s[i])
        console.log(index)
        if(currIndex>-1){
           index=index+1+currIndex
        }else{
            return false
        }
    }
    return true
};

console.log(isSubsequence("aaaaaa","bbaaaa"))
