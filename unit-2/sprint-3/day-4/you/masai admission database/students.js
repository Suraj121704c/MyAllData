// All the Code for All Students Page Goes Here

let LSData = JSON.parse(localStorage.getItem("admission"));

let tbody = document.querySelector("tbody");

let filter = document.getElementById("filter")

function displayTable(data){
    document.querySelector("tbody").innerHTML=""

    data.forEach(function(element,i){

        let tr = document.createElement("tr");
        

        let name = document.createElement("td")
        name.innerText=element.name;

        let phone = document.createElement("td")
        phone.innerText=element.phone;

        let email = document.createElement("td")
        email.innerText=element.email;

        let gender = document.createElement("td")
        gender.innerText=element.gender;

        let course = document.createElement("td")
        course.innerText=element.course;

       let accept = document.createElement("td")
       accept.innerText="Accpet"
       accept.addEventListener("click",function(){
        addData("admission-accepted",element)
        delData(LSData,i);
       })

       let reject = document.createElement("td")
       reject.innerText="Reject";
       reject.addEventListener("click",function(){
        addData("admission-rejected",element)
        delData(LSData,i);
       })

       tr.append(name,email,course,gender,phone,accept,reject)

       tbody.append(tr)

    })
}

//we are taking key value cause in local storage key values are stored in key value format

function addData(key,value){
    let newLSData = JSON.parse(localStorage.getItem(key)) || [];
    newLSData.push(value);
    localStorage.setItem(key,JSON.stringify(newLSData));
}

function delData(data,index){
    data.splice(index,1)//splice functin needs two values one is index where we wanna remove and the other one is how many we will be going to remove
    localStorage.setItem("admission",JSON.stringify(data))
    displayTable(data)
}

filter.addEventListener("change",function(){
    //using filter function to filter all the data
   if(filter.value=="" || filter.value=="all"){
    displayTable(LSData)
   }else{
    let filteredData = LSData.filter(function(el){
        return el.course===filter.value
      })
      displayTable(filteredData);
   }
    
})

displayTable(LSData); //calling the function to display on the second page 

//local storage contains data in the form of obj so it always have data in the form of key and data