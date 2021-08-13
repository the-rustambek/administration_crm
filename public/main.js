
mainAddElement = document.querySelector(".main-add")
mainNameElement = document.querySelector(".main-name")
mainTelElement = document.querySelector(".main-tel")
mainDeleteElement= document.querySelector(".main-delete")
mainNotFoundElement = document.querySelector(".main-not-found")

mainAddElement.addEventListenter("click",event =>{
    event.preventDefault();
    const tableElement = document.querySelector(".table")
    tableElement.classList.remove("d-none")
})