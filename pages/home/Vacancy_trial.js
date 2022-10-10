const trialBox = document.querySelector('.vacancy-trial')
const vacancyTried = document.querySelector('.vacancy-list-tried')
const tryCardBtn = document.querySelectorAll('.card-try-buttons')
let saveSubmited = []

function submitedVacancies(button){

    vacancyTried.innerText = ""
    saveSubmited.forEach((element, i) => {
        const tryCard = document.createElement('li') 
        

        const header = document.createElement('div')
        const title  = document.createElement('h4')
        const remove = document.createElement('button')
        const trashIco = document.createElement('img')
        remove.addEventListener('click', (event) => {
            event.preventDefault()
            saveSubmited.splice(i, 1) 
            console.log(saveSubmited)
            button.innerText = "Candidatar"
            tryCard.remove()
        })

        const infos = document.createElement('div')
        const tryEnterprise = document.createElement('p')
        const tryCity  = document.createElement('p')

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
