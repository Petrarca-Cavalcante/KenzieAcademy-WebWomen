const trialBox = document.querySelector('.vacancy-trial')
const vacancyTried = document.querySelector('.vacancy-list-tried')
const tryCardBtn = document.getElementsByClassName('card-try-buttons')

let saveSubmited = []

function submitedVacancies(button, id) {

    vacancyTried.innerText = ""
    saveSubmited.forEach((element, i) => {
    saveInMachine = saveSubmited
        const tryCard = document.createElement('li')

        const header = document.createElement('div')
        const title = document.createElement('h4')
        const remove = document.createElement('button')
        const trashIco = document.createElement('img')
        remove.addEventListener('click', (event) => {

            event.preventDefault()
            let random = saveSubmited.findIndex(e => e === id)
            saveSubmited.splice(random, 1)
            let zombie = saveSubmited.splice(random, 1)
            persistantData(zombie)

            tryCardBtn[element].innerText = "Candidatar"
            tryCard.remove()
        })

        const infos = document.createElement('div')
        const tryEnterprise = document.createElement('p')
        const tryCity = document.createElement('p')

        tryCard.classList.add("try-card")
        header.classList.add("try-card-header")
        remove.classList.add("delete-try-card")
        infos.classList.add("trial-infos")

        title.innerText = jobsData[element].title
        trashIco.src = "/assets/img/trash.svg"
        tryEnterprise.innerText = jobsData[element].enterprise
        tryCity.innerText = jobsData[element].location


        remove.append(trashIco)
        header.append(title, remove)
        infos.append(tryEnterprise, tryCity)
        tryCard.append(header, infos)
        vacancyTried.append(tryCard)
        
    });
}

function persistantData(brain) {
    let saveInMachine = JSON.stringify(brain)
    localStorage.setItem("saveSubmited", saveInMachine)
    
    let welcomeback =   localStorage.getItem("saveSubmited")
}