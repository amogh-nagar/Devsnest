var obj1={
    name:"Object 1",
    printname:function(a,b){
        console.log(this.name);
        console.log(a*b);
    }
}
var obj2={
    name:"Object 2",
    
}
obj1.printname.call(obj2,1,2)
obj1.printname.apply(obj2,[1,3])
const x=obj1.printname.bind(obj1,2,3)
x()

// const ab=()=>{
//     console.log(10);
// }
// ab()
// ab1()
// function ab1(){
//     console.log(20);
// }