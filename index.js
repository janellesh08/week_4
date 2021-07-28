const starter = dishes.filter((dish) => dish.course == "Starters")
const entree = dishes.filter((dish) => dish.course == "Entrees")
const dessert = dishes.filter((dish) => dish.course == "Desserts")

const starterUL = document.getElementById("starterUL")
const entreeUL = document.getElementById("entreeUL")
const dessertUL = document.getElementById("dessertUL")

const starterBtn = document.getElementById("starterBtn")
const entreeBtn = document.getElementById("entreeBtn")
const dessertBtn = document.getElementById("dessertBtn")

const content = document.getElementById("content")

starterBtn.addEventListener("click", () => {
    content.innerHTML = ""
    starter.map((dish) => {
        const starterItems = `
            <ul id = "starters"
                <li>
                    <img src = "${dish.imageURL}"/> 
                    <h1>${dish.title}</h1>
                    <h2>${dish.description}</h2> 
                    <h4>${dish.price}</h4>
                </li>
            </ul>
        `

        content.insertAdjacentHTML("beforeend", starterItems)
    })

})
entreeBtn.addEventListener("click", () => {
    content.innerHTML = ""
    entree.map((dish) => {
        const entreeItems = `
            <ul id = "starters"
                <li>
                    <img src = "${dish.imageURL}"/> 
                    <h1>${dish.title}</h1>
                    <h2>${dish.description}</h2> 
                    <h4>${dish.price}</h4>
                </li>
            </ul>
        `

        content.insertAdjacentHTML("beforeend", entreeItems)
    })

})
dessertBtn.addEventListener("click", () => {
    content.innerHTML = ""
    dessert.map((dish) => {
        const dessertItems = `
            <ul id = "starters"
                <li>
                    <img src = "${dish.imageURL}"/> 
                    <h1>${dish.title}</h1>
                    <h2>${dish.description}</h2> 
                    <h4>${dish.price}</h4>
                </li>
            </ul>
        `

        content.insertAdjacentHTML("beforeend", dessertItems)
    })

})
