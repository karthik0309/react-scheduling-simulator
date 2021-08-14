const BankersAlgorithm=(instance:number[],alloc:number[][],max:number[][])=>{

    const noOfResources=3
    const noOfProcess=5
    const need:number[][]=new Array(noOfProcess)
    const available:number[]=new Array(noOfResources)
    const flag:number[]=new Array(noOfProcess)
    const answer:number[]=new Array(noOfResources)
    let count=noOfProcess,index=0
    flag.fill(1,0,flag.length)

    console.log(noOfResources,noOfProcess)
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
            console.log(max[i][j]-alloc[i][j])
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
            alert('Error: Deadlock in given process')
            return null;
        }

    }
    return {need,initAvailable,answer}
}

export default BankersAlgorithm