const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

  let percorso ='assets/img/';

  for(let i=0; i<team.length; i++){

    let elementoTeam = team[i]
    console.log(elementoTeam.name)

    document.getElementById('card').innerHTML += `
    <div class="col-4 p-5">
    <div class="card">
        <img src= "${percorso + elementoTeam.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${elementoTeam.name}</h5>
        <p class="card-text">${elementoTeam.role}</p>
    </div>
    </div>
    </div>`
  }