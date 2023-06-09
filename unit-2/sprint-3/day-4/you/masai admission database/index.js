// All the JS Code for the Add Students Page Goes Here
let admission_form = document.querySelector("form")

let LSData = JSON.parse(localStorage.getItem("admission"))||[];  //even if we refresh the web page the data will not be going to refreshed

form.addEventListener("submit",function(event){
   event.preventDefault();
   //preventing the form from refreshing
   
   let obj = {
    name: admission_form.name.value,
    email: admission_form.email.value,
    phone: admission_form.phone.value,
    gender: admission_form.gender.value,
    course: admission_form.course.value,
   }
   if(obj.name==""||obj.email==""||obj.phone==""||obj.gender==""||obj.course==""){
    alert("Please fill all the details")
   }else{
   LSData.push(obj);
   localStorage.setItem("admission",JSON.stringify(LSData));
   }
})