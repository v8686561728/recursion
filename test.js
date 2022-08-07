// const costT = (cost,n) => {

// let first = cost[0];
// let second = cost[1];
// let result = 0
//   // iterate for finding the cost
//   for (let i = 2; i < n; i++) {
//     result = Math.min(second, first) + cost[i];
//     first=second
//     second=result
//   }

//   // return the minimum
//   return Math.min(first,second);
// };

const costf=(cost,n)=>{
    if(n == 0) return cost[0] ;
    if(n == 1) return cost[1] ;
 
    let top = Math.min( costf(n-1,cost) + cost[n] ,
    costf(n-2, cost)+ cost[n] );
    return top;
}

let data = [1,100,1,1,1,100,1,1,100,1];

console.log(
 costf(data, data.length-1)
);
