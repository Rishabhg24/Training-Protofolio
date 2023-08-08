let m= new Map();
m.set("name","Gopal");
m.set("rollno",2002900100119);
m.delete("rollno");
//console.log(m.has('mobile'));
//console.log(m);
for(let i of m.values()){
    console.log(i);
}