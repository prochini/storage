let arr =[];
class Stack{
    push(n){
        arr[arr.length] = n
        console.log(arr)
    }
    pop(){
        let num = arr[arr.length-1]
        arr.length = arr.length-1
        return num        
    }
}
var stack = new Stack() 
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

let Array =[];
class Queue{
    push(n){
        Array[Array.length] = n
        console.log(Array)
    }
    pop(){
               
        var firstElement = Array.shift();
        return firstElement      
    }
}
var queue = new Queue() 
queue.push(4)
queue.push(5)
queue.push(6)
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
