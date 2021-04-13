class Queue{
    private front:number
    private rear:number
    private size:number
    private queue:number[]

    constructor(capacity:number){
        this.size=capacity
        this.front=0
        this.rear=-1
        this.queue=new Array(this.size)
    }
    
    public isEmpty=():boolean=>{
        return (this.rear===-1 && this.front===0) || (this.front > this.rear)
    }
    public isFull=():boolean=>{
        return this.size===this.rear+1
    }
    
    public Enqueue=(data:number):void=>{
        if(this.isFull()){
            throw new Error("Queue overflow")
        }
        else{
            this.rear++
            this.queue[this.rear]=data
        }
    }
    public Dequeue=():number=>{
        let retVal:number=-1
        if(this.isEmpty()){
            throw new Error("No Elements in queue")
        }
        else{
            retVal=this.queue[this.front]
            if(this.front===this.rear){
                this.front=0
                this.rear=-1
            }
            else{
                this.front++
            }
        }
        return retVal
    }
}

let queue=new Queue(30)
export default queue
