const jobsData = [
    {
      id: 0,
      title: "Pessoa desenvolvedora front-end - React",
      enterprise: "Kenzie",
      location: "Curitiba",
      descrition:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      modalities: "Presencial",
    },
    {
      id: 1,
      title: "Pessoa desenvolvedora back-end - Node JS",
      enterprise: "Brazilians in Tech",
      location: "Rio de Janeiro",
      descrition:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      modalities: "Home Office",
    },
    {
      id: 2,
      title: "Pessoa desenvolvedora Fullstack - Node JS",
      enterprise: "Brazilians in Tech",
      location: "Rio de Janeiro",
      descrition:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      modalities: "Home Office",
    },
  ];


let vacancyList = document.querySelector('.vacancy-list')


function renderVacancy(vacancyArr){

    vacancyArr.forEach((element, i) => {
        const newCard = document.createElement('li')

        const header = document.createElement('div')
        const titleBox = document.createElement('div')        
        const title = document.createElement('h3')

        const infos = document.createElement('div')
        const enterpriseUnity = document.createElement('p')
        const workLocation = document.createElement('p')

        const descritionBox = document.createElement('div')
        const description = document.createElement('p')

        const workplaceBox = document.createElement('div')
        const workplace = document.createElement('p')
        
        const tryBtn = document.createElement('button')

        newCard.classList.add('feed-cards')
        infos.classList.add('feed-cards-header')
        workplace.classList.add('feed-place-box')
        tryBtn.classList.add('card-try-buttons')
        workplaceBox.classList.add('feed-card-bottom')

        tryBtn.addEventListener('click', (event) => {
            event.preventDefault()
            if(tryBtn.innerText == "Candidatar"){
                tryBtn.innerText = "Remover candidatura"
                saveSubmited.unshift(i)
                submitedVacancies(tryBtn, element.id)
            } else {
                tryBtn.innerText = "Candidatar"
                let random = saveSubmited.findIndex(e => e === element.id)
                saveSubmited.splice(random, 1)
                submitedVacancies(tryBtn, element.id)          
            }
        })

        title.innerText = element.title
        enterpriseUnity.innerText = element.enterprise
        workLocation.innerText = element.location
        description.innerText = element.descrition
        workplace.innerText = element.modalities
        tryBtn.innerText = "Candidatar"

        header.append(titleBox, infos)
        titleBox.append(title)
        infos.append(enterpriseUnity, workLocation)
        descritionBox.append(description)
        workplaceBox.append(workplace, tryBtn)
        newCard.append(
            header, 
            titleBox,
            infos,
            descritionBox,
            workplaceBox,
        )
        vacancyList.append(newCard)
    });
}
renderVacancy(jobsData)