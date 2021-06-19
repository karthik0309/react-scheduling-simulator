const BankersAlgorithm=(instance:number[],alloc:number[][],max:number[][])=>{
    
    //  const alloc:number[][]=[[0, 1, 0 ], 
    //                           [ 2, 0, 0 ], 
    //                           [ 3, 0, 2 ], 
    //                           [ 2, 1, 1 ], 
    //                           [ 0, 0, 2 ]]
    //  const max:number[][]=[[ 7, 5, 3 ],
    //                       [ 3, 2, 2 ],
    //                       [ 9, 0, 2 ], 
    //                       [ 2, 2, 2 ], 
    //                       [ 4, 3, 3 ]]
    //  const instance:number[]=[10,5,7]

    const noOfResources=alloc[0].length
    const noOfProcess=alloc.length
    const need:number[][]=new Array(noOfProcess)
    const available:number[]=new Array(noOfResources)
    const flag:number[]=new Array(noOfProcess)
    const answer:number[]=new Array(noOfResources)
    let count=noOfProcess,index=0
    flag.fill(1,0,flag.length)

    
    for(let i=0;i<noOfResources;i++){
        let sum=0;
        for(let j=0;j<noOfProcess;j++){
            sum+=alloc[j][i]
        }
        available[i]=instance[i]-sum
    }
    const initAvailable:number[]=[...available]
    for(let i=0;i<noOfProcess;i++){
        need[i]=new Array(noOfResources)
        for(let j=0;j<noOfResources;j++){
            need[i][j]=max[i][j]-alloc[i][j]
        }
    }
    while(count!==0){
        let safeState=0
        for(let i=0;i<noOfProcess;i++){
            if(flag[i]===1){
                let temp=1
                for(let j=0;j<noOfResources;j++){
                    if(need[i][j]>available[j]){
                        temp=0;
                        break;
                    }
                }
                if(temp===1){
                    count--
                    safeState=1
                    answer[index++]=i
                    for(let j=0;j<noOfResources;j++){
                        available[j]=available[j]+alloc[i][j]
                    }
                    flag[i]=0
                }
            }
        }
        
        if(!safeState){
            return "Error: Not safe process"
        }

    }
    return [need,initAvailable,answer]
}

//  const alloc=[[0, 1, 0 ], 
//                         [ 2, 0, 0 ], 
//                         [ 3, 0, 2 ], 
//                         [ 2, 1, 1 ], 
//                         [ 0, 0, 2 ]]
// const max=[[ 7, 5, 3 ],
//                     [ 3, 2, 2 ],
//                     [ 9, 0, 2 ], 
//                     [ 2, 2, 2 ], 
//                     [ 4, 3, 3 ]]
// const instance=[10,5,7]

// BankersAlgorithm(instance,alloc,max)
// console.log(alloc[0].length)



export default BankersAlgorithm