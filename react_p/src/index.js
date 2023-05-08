//objects
// const person={
// name:'p',
// walk(){},
// talk() {}
// };
// person.talk();
// person.name='';
// const targetMember='name';
// person[targetMember.value]='Dip';



//Arrow functions
 const square=number=>number*number;
 console.log(square(5));

  const jobs=[
    { id: 1, isActive: true},
    { id: 1, isActive: true},
    { id: 1, isActive: false},
  ];

  const activeJobs=jobs.filter(job=>job.isActive);


  //Map(useful while rendering lists)
  const colors=['red','green','blue'];
   const items=colors.map(color=> `<li>${color}</li>`);  //Template Literal
  console.log(items);


  //Object Destructing
  const address={
    street:'',
    city:'',
    country:''
  };

  const{street,city,country}=address;      //instead of const street=address.street;
  const {street:st}=address;


  //Spread Operator
  const first=[1,2,3];
  const second=[4,5,6];
  
  const combined=[...first, 'a',...second,'b'];       // instad of const combined=first.concat(second);

//(clone)
const clone=[...first];
console.log(first);
console.log(clone);

//Spread Operator using objects
const f={name:'Dipanshi'};
const s={job:'Student'};

const comb={...f,...s,location:'India'};
console.log(comb);

//(clone objects)
const c={...f};
console.log(c);


//Classes
class Person {
constructor(name){
this.name=name;
}
  walk(){
    console.log("walk");
  }
}


//Inheritance
class Teacher extends Person{
  constructor(name,degree){
    super(name);                       //Child class must have parent constructor
    this.degree=degree;
  }
  teach(){
    console.log("teach");
  }
}
const teacher=new Teacher('Dipanshi',"Btech");
teacher.teach();


//Modules
//(Multiple Files)
//to make it public use export and import


//Ternary operators
let age=15;
const component=()=>{
return age>10?"Yes":"No";
}

//Switch statement

  var i=9;
  switch(i)
  {
    case 0:
      console.log("i is zero");
      break;
      case 1:
        console.log("i is one");
        break;
        case 2:
          console.log("i is two");
          break;
          default:
            console.log("not found");

  }

  //Async and await
  async function dipanshi(){
    let weather1=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("27Deg")
      },2000)
    })        
    let weather2=new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve("21Deg")
      },5000)
    })      
    console.log("Fetching weather1 Please Wait...")             
    let w1=await weather1
    console.log("Fetching weather1 is"+w1) 
    console.log("Fetching weather2 Please Wait...") 
    let w2=await weather2
    console.log("Fetching weather2 is"+w2) 
    return [w1,w2]
  }
  console.log("Hello")
  let a=dipanshi()
  a.then((value)=>{
    console.log(value)
  })
  

//Inline function
 var play= function(){
  console.log("anonymous")
}
play()

