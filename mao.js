function Box(){}
Box.prototype={
    constructor:Box,
    play:function(){
        console.log("毛佳庆");
    },
    a:10
}
let box=new Box();
new Box()=function(){
    var obj={};
    obj.__proto__=Box.prototype;
    var result=obj.call(box,arguments);
    return result instanceof Object?result:obj;
}