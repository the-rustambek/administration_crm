window.addEventListener("DOMContentLoaded", 
(event) =>{
    loadTodos();
})

async function loadTodos(){
    let response = await fetch("/todos",{
        method:"GET",
    });
    response = await response.json();
    // console.log(response);
    renderTodos(response.data.reverse());
    
}

function renderTodos(array){
    for(let todo of array){
        // console.log(todo)
        const tbodyElement = document.createElement("tbody")
        const trElement = document.createElement("tr")
        const newIdElement = document.createElement("td")
        const newNameElement = document.createElement("td")
        const newNumberElement = document.createElement("td")
        const newKursElement = document.createElement("td")
        const newKursTuriElement = document.createElement("td")
        const newIshJoyiElement = document.createElement("td")
        const newDarsVaqtiElement = document.createElement("td")
        const newKelishManbasiElement = document.createElement("td")
       
        const asideKursElement = document.querySelector(".aside-kurs")
        const asideTuriElement =  document.querySelector(".aside-turi")
        const asideIshElement = document.querySelector(".aside-ish")
        const asideVaqtiElement = document.querySelector(".aside-vaqti")
        const asideManbaELement = document.querySelector(".aside-manba")
    
         newIdElement.textContent=id;
    
        
        newNameElement.textContent = mainNameElement.value;
        newNumberElement.textContent = mainTelElement.value;
        newKursElement.textContent = asideKursElement.value;
        newKursTuriElement.textContent =  asideTuriElement.value;
        newIshJoyiElement.textContent =asideIshElement.value;
        newDarsVaqtiElement.textContent =asideVaqtiElement.value;
        newKelishManbasiElement.textContent =asideManbaELement.value;
    
        trElement.appendChild(newIdElement)
        trElement.appendChild(newNameElement)
        trElement.appendChild(newNumberElement)
        trElement.appendChild(newKursElement)
        trElement.appendChild(newKursTuriElement)
        trElement.appendChild(newIshJoyiElement)
        trElement.appendChild(newDarsVaqtiElement)
        trElement.appendChild(newKelishManbasiElement)
    
     
        tbodyElement.prepend(trElement) 
        tableElement.prepend(tbodyElement) 
        
    }
}


formElement.addEventListener("submit",async (event) => {
    event.preventDefault();
    let response = await fetch("/add_todo",{
        method:"POST",
        headers:{
            "Content-Type":"application.json",
        },
        body: JSON.stringify
    })
})




















const mainAddElement = document.querySelector(".main-add")
const mainNameElement = document.querySelector(".main-name")
const mainTelElement = document.querySelector(".main-tel")
const mainDeleteElement= document.querySelector(".main-delete")
const mainNotFoundElement = document.querySelector(".main-not-found")
const formElement = document.querySelector(".form")

formElement.addEventListener("submit", event => {
    event.preventDefault()
})


const  tableElement = document.querySelector(".table")

    mainAddElement.addEventListener("click",event =>{  
if(mainNameElement.value != ""){
        const tbodyElement = document.createElement("tbody")
        const trElement = document.createElement("tr")
        const newIdElement = document.createElement("td")
        const newNameElement = document.createElement("td")
        const newNumberElement = document.createElement("td")
        const newKursElement = document.createElement("td")
        const newKursTuriElement = document.createElement("td")
        const newIshJoyiElement = document.createElement("td")
        const newDarsVaqtiElement = document.createElement("td")
        const newKelishManbasiElement = document.createElement("td")
       
        const asideKursElement = document.querySelector(".aside-kurs")
        const asideTuriElement =  document.querySelector(".aside-turi")
        const asideIshElement = document.querySelector(".aside-ish")
        const asideVaqtiElement = document.querySelector(".aside-vaqti")
        const asideManbaELement = document.querySelector(".aside-manba")
    
         newIdElement.textContent=newNameElement.length;
    
        
        newNameElement.textContent = mainNameElement.value;
        newNumberElement.textContent = mainTelElement.value;
        newKursElement.textContent = asideKursElement.value;
        newKursTuriElement.textContent =  asideTuriElement.value;
        newIshJoyiElement.textContent =asideIshElement.value;
        newDarsVaqtiElement.textContent =asideVaqtiElement.value;
        newKelishManbasiElement.textContent =asideManbaELement.value;
    
        trElement.appendChild(newIdElement)
        trElement.appendChild(newNameElement)
        trElement.appendChild(newNumberElement)
        trElement.appendChild(newKursElement)
        trElement.appendChild(newKursTuriElement)
        trElement.appendChild(newIshJoyiElement)
        trElement.appendChild(newDarsVaqtiElement)
        trElement.appendChild(newKelishManbasiElement)
    
     
        tbodyElement.prepend(trElement) 
        tableElement.prepend(tbodyElement) 
    // }
    }
else{

}

})


// mainDeleteElement.addEventListener("click" ,event =>{
//     tbodyElement.reset()

// })





