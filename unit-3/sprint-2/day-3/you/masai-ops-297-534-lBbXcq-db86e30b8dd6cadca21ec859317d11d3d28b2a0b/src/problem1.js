let subjectsHash = {
    1: 'Javascript',
    2: 'HTML',
    3: 'CSS',
    4: 'Java',
    5: 'Rust',
  }
  
  let students = [
    {id: 1, name: 'Prateek', subjectID: 5},
    {id: 2, name: 'Yogesh', subjectID: 2},
    {id: 3, name: 'Nrupul', subjectID: 4},
    {id: 4, name: 'Prateek', subjectID: 1},
  ]
  
  
  let newObj = students.reduce((acc,item)=>{
    let id = item.id;
    let name = item.name;
    let subjectID = item.subjectID;
    let subjectName = subjectsHash[subjectID];

    acc[name] = acc[name] || [];
    acc[name].push(subjectName)

    return acc
  },{})
  
  console.log(newObj);
  
  /* 
  ----------------------------------
  create a new object called `newObj` using the `students` array &  
  the `subjectsHash` object.
  ----------------------------------
  
  Expected Output of `newObj`: 
  {
    Prateek: ["Rust", "Javascript"],
    Yogesh: ["HTML"],
    Nrupul: ["Java"],
  }
  */

  export {newObj}