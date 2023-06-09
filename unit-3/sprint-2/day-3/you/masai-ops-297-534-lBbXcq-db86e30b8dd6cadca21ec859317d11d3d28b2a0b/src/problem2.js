let subjectsData = [
    {id: 1, name: 'Javascript'},
    {id: 2, name: 'HTML'},
    {id: 3, name: 'CSS'},
    {id: 4, name: 'Java'},
    {id: 5, name: 'Rust'},
  ]
  
  // code your key-value object for subjects here
  
  let subjectHash = subjectsData.reduce((acc,item)=>{
    acc[item.id] = item.name
    return acc
  },{})

  let students = [
    {id: 1, name: 'Prateek', subjectID: 5},
    {id: 2, name: 'Yogesh', subjectID: 2},
    {id: 3, name: 'Nrupul', subjectID: 4},
    {id: 4, name: 'Prateek', subjectID: 1},
  ]
  
  // let newObj = students.reduce((acc,item)=>{
  //   let new_Arr = []
  //   if(acc[item.name] === undefined){
  //     subjectsData.filter((Element)=>{
  //       if(Element.id === item.subjectID){
  //         new_Arr.push(Element.name)
  //         return true;
  //       }
  //     })
  //     acc[item.name] = new_Arr;
  //   }else{
  //     let arr = acc[item.name];
  //     subjectsData.filter((Element)=>{
  //       if(Element.id===item.subjectID){
  //         arr.push(Element.name);
  //         return true;
  //       }
  //     })
  //   }

  //   return acc
  // },{})

  let newObj = students.reduce((acc,item)=>{
     acc[item.name] = acc[item.name] || []
     acc[item.name].push(subjectHash[item.subjectID])
     return acc
  },{})

  /* 
  ----------------------------------
  create a new object called `newObj` using the `students` array &  
  the `subjectsData` array.
  
  Hint: consider creating an extra key-value object for quickly accessing subject names
  ----------------------------------
  
  Expected Output of `newObj`: 
  {
    Prateek: ["Rust", "Javascript"],
    Yogesh: ["HTML"],
    Nrupul: ["Java"],
  }
  */

 export {newObj};