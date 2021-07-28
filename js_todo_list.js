const textBox = document.getElementById("textBox")
const addButton = document.getElementById("addButton")
const pending = document.getElementById("pendingList")
const completed = document.getElementById("completedList")

addButton.addEventListener("click", funtion(){
    const task = textBox.value 
    addButton.setAttribute("id", "addButton")
    const taskLi = document.createElement("li")
    taskLi.innerHTML = task
    taskLi.setAttribute("class", "tasks")
    textBox.value = ""
    const removeButton = document.createElement("button")
    removeButton.addEventListener("click", function(){
        this.parentElement.remove()
    })

    const checkBox = document.createElement("input")
    checkBox.setAttribute("type", "checkbox")
    checkBox.setAttribute("class", "check")
    taskLi.appendChild(checkBox)

    pending.appendChild(taskLi)
    checkBox.addEventListener("change", function(){
        if(this.checked){
            completed.appendChild(this.parentElement)
        }else{
            pending.appendChild(this.parentElement)
        }
    })
    removeButton.innerHTML ="Remove"
    removeButton.setAttribute("class", "remove")
    taskLi.appendChild(removeButton)
})