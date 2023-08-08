let obj={
    id:123,
    name:"rishu",
    branch:"cse",
    info:function(){
        return "welcome mr./mrs." +this.name+'your branch is'+this.branch;
    },
};
console.log(obj.info());