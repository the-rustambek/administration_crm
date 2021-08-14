
mainAddElement = document.querySelector(".main-add")
mainNameElement = document.querySelector(".main-name")
mainTelElement = document.querySelector(".main-tel")
mainDeleteElement= document.querySelector(".main-delete")
mainNotFoundElement = document.querySelector(".main-not-found")

mainAddElement.addEventListenter("click",event =>{
    event.preventDefault();
const  tableElement = document.querySelector(".table")
    // tableElement.classList.add("d-block")

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

    // shu jiyda ID qo'yish kerak
    newNameElement.textContent = mainNameElement.value;
    newNumberElement.textContent = mainTelElement.value;
    newKursElement.textContent = asideKursElement.value;
    newKursTuriElement.textContent =  asideTuriElement.value;
    newIshJoyiElement.textContent =asideIshElement.value;
    newDarsVaqtiElement.textContent =asideVaqtiElement.value;
    newKelishManbasiElement.textContent =asideManbaELement.value;

    trElement.appendChild(newNameElement)
    trElement.appendChild(newNumberElement)
    trElement.appendChild(newKursElement)
    trElement.appendChild(newKursTuriElement)
    trElement.appendChild(newIshJoyiElement)
    trElement.appendChild(newDarsVaqtiElement)
    trElement.appendChild(newKelishManbasiElement)

 
    tbodyElement.prepend(trElement) 
          
})





