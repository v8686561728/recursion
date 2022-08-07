function solve(n,a, x){
    x.sort((k,l)=>l-k)
        const sum=(y,z)=>{
            return Math.abs(a-y)+Math.abs(a-z)
        }
        
        if(n>2)
     {   return Math.max(
        sum(x[0],x[1]),
        sum(x[x.length-1],x[x.length-2]),
        sum(x[0],x[x.length-2]),
        sum(x[x.length-1],x[0]),
        sum(x[1],x[x.length-2]),
        sum(x[x.length-1],x[1])
        )}else{
            return Math.max(
        sum(x[0],x[1]),
        sum(x[x.length-1],x[x.length-2]),
        sum(x[x.length-1],x[0]),
        sum(x[1],x[x.length-2])
        )
        }
    }
let x=[60,30,20]
let a=50
console.log(solve(3,a,x))
console.log(Math.abs(a-x[x.length-1])+Math.abs(a-x[0]))