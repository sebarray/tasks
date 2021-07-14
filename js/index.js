url = "https://tasksgo.herokuapp.com/tasks"
let anotar = document.getElementById("anotar")
let nom = document.getElementById('Name').value
let content = document.getElementById('Content').value

anotar.addEventListener('click', () => {
    if (nom != "" && content != "") {
        fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Name": document.getElementById('Name').value,
                    "Content": document.getElementById('Content').value
                })
            })
            .then(resp => resp.json())
            .then(data => {
               crear(data)
            })
    }
}, true)


getTask(url)










function getTask(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {

            data.forEach((d) => {
                crear(d)

            })

        })
}


function crear(d) {
    ctask = document.createElement("div")
    ctask.innerHTML = `
    <div class="bg-primary border-2 rounded-1">   
               <h3 class="text-white p-3">${d.Name} dice ...</h3>
               <hr>
               <p class="fs-3 text-white p-3">${d.Content}</p>
           </div>
    `
    document.getElementById('tareas').appendChild(ctask);

}