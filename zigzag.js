const conversation=(s,numRows)=>{

    let result=''
let index=0
    while (result.length<=s.length) {
        result=result+s[index]
        console.log(result)
        index=index+numRows+1
        if(index>s.length-1){
            index=index-s.length-1
            console.log(index)
        }
    }
    return result
}

console.log(conversation('PAYPALISHIRING',3))
// PAHNAPLSIIGYIR
// PAHNALIGYIRundefined