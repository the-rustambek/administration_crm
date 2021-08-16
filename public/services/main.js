window.addEventListener("DOMContentLoaded",
    (event) => {
        loadTodos();
    })

async function loadTodos() {
    let response = await fetch("/todos", {
        method: "GET",
    });
    response = await response.json();
    // console.log(response);
    renderTodos(response.data.reverse());
};
const tbodyElement = document.querySelector(".tbody")

function renderTodos(array) {
    tbodyElement.textContent = null;
    for (let todo of array) {
        // console.log(todo)

        const trElement = document.createElement("tr")
        const newIdElement = document.createElement("td")
        const newNameElement = document.createElement("td")
        const newNumberElement = document.createElement("td")
        const newKursElement = document.createElement("td")
        const newKursTuriElement = document.createElement("td")
        const newIshJoyiElement = document.createElement("td")
        const newDarsVaqtiElement = document.createElement("td")
        const newKelishManbasiElement = document.createElement("td")


        newIdElement.textContent = todo.id;
        newNameElement.textContent = todo.name;
        newNumberElement.textContent = todo.number;
        newKursElement.textContent = todo.kurs;
        newKursTuriElement.textContent = todo.kursTuri;
        newIshJoyiElement.textContent = todo.ishJoyi;
        newDarsVaqtiElement.textContent = todo.darsVaqti;
        newKelishManbasiElement.textContent = todo.kelishManbasi;

        trElement.appendChild(newIdElement)
        trElement.appendChild(newNameElement)
        trElement.appendChild(newNumberElement)
        trElement.appendChild(newKursElement)
        trElement.appendChild(newKursTuriElement)
        trElement.appendChild(newIshJoyiElement)
        trElement.appendChild(newDarsVaqtiElement)
        trElement.appendChild(newKelishManbasiElement)

        tbodyElement.prepend(trElement)
        // tableElement.prepend(tbodyElement)


        const mainDeleteButtonElement = document.querySelector(".main-delete")

        mainDeleteButtonElement.addEventListener("click",async (event) =>{
            // console.log(todo.id)
            let response = await fetch("/delete/" + todo.id,{
                method: "DELETE",

            });
            loadTodos()
        })
    }
}



const mainAddElement = document.querySelector(".main-add")
const mainNameElement = document.querySelector(".main-name")
const mainTelElement = document.querySelector(".main-tel")
const mainDeleteElement = document.querySelector(".main-delete")
const mainNotFoundElement = document.querySelector(".main-not-found")
const formElement = document.querySelector(".form")
const tableElement = document.querySelector(".table")
const asideKursElement = document.querySelector(".aside-kurs")
const asideTuriElement = document.querySelector(".aside-turi")
const asideIshElement = document.querySelector(".aside-ish")
const asideVaqtiElement = document.querySelector(".aside-vaqti")
const asideManbaELement = document.querySelector(".aside-manba")



formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    let response = await fetch("/add_todo", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            
            name: mainNameElement.value,
            number: mainTelElement.value,
            kurs: asideKursElement.value,
            kursTuri: asideTuriElement.value,
            ishJoyi: asideIshElement.value,
            darsVaqti: asideVaqtiElement.value,
            kelishManbasi: asideManbaELement.value,


        }),


    });
    response = await response.json()
    console.log(response);
    console.log(name)
    loadTodos()
    

})
