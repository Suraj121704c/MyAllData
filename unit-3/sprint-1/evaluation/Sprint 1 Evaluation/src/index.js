function studentData(firstName,lastName,age,marksArray,...hobbies) {
  return {
    fullName : `${firstName} ${lastName}`,
    age : age,
    hobbies : hobbies,
    getInfo : function(){
      return `${this.fullName}'s age is ${this.age}.`
    },
    getResult : function(){
      let sum = 0
      let size = marksArray.length;

      for(let i = 0;i<size;i++){
        sum = sum + marksArray[i]
      }

      let avg = sum / size
      if(avg > 50){
        return 'Result: PASS'
      }else{
        return 'Result: FAIL'
      }
    }
  }
}








export {studentData}