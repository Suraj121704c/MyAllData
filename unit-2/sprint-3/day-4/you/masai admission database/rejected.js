// All the Code for the Rejected page goes here
let rejected_data = JSON.parse(localStorage.getItem("admission-rejected"))
let tbody = document.querySelector("tbody")


function displayTable(data){
    //    tbody.innerHTML=null
    
        data.forEach(function(element){
    
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
    
           
           tr.append(name,email,course,gender,phone)
    
           tbody.append(tr)
    
        })
    }
    
    displayTable(rejected_data);