let radiologia = [{

  hora: '11:00',
  especialista: 'Ignacio Schulz',
  paciente: 'Francisca Rojas',
  RUT: '9878782-1',
  prevision: 'fonasa'
},
{
  hora: '11:30',
  especialista: 'Federico Subercaseaux',
  paciente: 'Pamela estrada',
  RUT: '15345241-3',
  prevision: 'Isapre'
},
{
  hora: '15:00',
  especialista: 'Fernando wurthz',
  paciente: 'Armando Luna',
  RUT: '16445345-9',
  prevision: 'Isapre'
},
{
  hora: '15:30',
  especialista: 'Ana Maria Godoy',
  paciente: 'Manuel Godoy',
  RUT: '17666419-0',
  prevision: 'Fonasa'
},
{
  hora: '16:00',
  especialista: 'Patricia Suazo',
  paciente: 'Ramon Ulloa',
  RUT: '14989389-K',
  prevision: 'Fonasa'
},
];
let traumatologia = [{
  hora: '8:00',
  especialista: 'Maria paz',
  paciente: 'Paula sanchez',
  RUT: '15554774-5',
  prevision: 'fonasa'
},
{
  hora: '10:00',
  especialista: 'Raul Araya',
  paciente: 'Angelica Navas',
  RUT: '12354633-3',
  prevision: 'Isapre'
},
{
  hora: '10:30',
  especialista: 'Maria Arriagada',
  paciente: 'Ana Klapp',
  RUT: '18231246-2',
  prevision: 'Isapre'
},
{
  hora: '11:00',
  especialista: 'Alejandro badilla',
  paciente: 'Felipe mardones',
  RUT: '14276156-0',
  prevision: 'Isapre'
},
{
  hora: '11:30',
  especialista: 'Cecilia budnik',
  paciente: 'Diego marre',
  RUT: '12222222-K',
  prevision: 'Fonasa'
},
{
  hora: '12:00',
  especialista: 'Arturo cavagnaro',
  paciente: 'Ceci mendez',
  RUT: '1321147-5',
  prevision: 'Isapre'
},
{
  hora: '12:30',
  especialista: 'Andres Kanacri',
  paciente: 'Marcial suazo',
  RUT: '13548521-7',
  prevision: 'Isapre'
},
];
let dental = [{

  hora: '8:30',
  especialista: 'Andrea Zuñiga',
  paciente: 'Marcela Retamal',
  RUT: '11123425-6',
  prevision: 'isapre'
},
{
  hora: '11:00',
  especialista: 'Maria Pia zañartu',
  paciente: 'Angel muñoz',
  RUT: '9878789-2',
  prevision: 'Isapre'
},
{
  hora: '11:30',
  especialista: 'Scarlet witting',
  paciente: 'Mario Kavet',
  RUT: '7998789-5',
  prevision: 'Fonasa'
},
{
  hora: '13:00',
  especialista: 'Francisco Von Teuber',
  paciente: 'Karin Fernandez',
  RUT: '18887662-K',
  prevision: 'Fonasa'
},
{
  hora: '13:30',
  especialista: 'Eduardo Viñuela',
  paciente: 'Hugo Sanchez',
  RUT: '17665461-4',
  prevision: 'Fonasa'
},
{
  hora: '14:00',
  especialista: 'Raquel Villaseca',
  paciente: 'Ana sepulveda',
  RUT: '14441281-0',
  prevision: 'Isapre'
}
];

// TITULO
document.getElementById('titulo').innerHTML = 'Estadisticas centro médico ñuñoa';

/** RADIOLOGÍA */
document.getElementById('radiologia').innerHTML = "RADIOLOGÍA: ";

for (let i = 0; i < radiologia.length; i++) {
  let table =
    `<tr>
      <td>${radiologia[i].hora}</td>
      <td>${radiologia[i].especialista}</td>
      <td>${radiologia[i].paciente}</td>
      <td>${radiologia[i].RUT}</td>
      <td>${radiologia[i].prevision}</td>
  
    </tr>`;

  document.getElementById("table-radiologia").innerHTML += table;
}

/** Primera y ultima hora */
document.getElementById("atencionRadio").innerHTML = `<span class="fw-bold"> Primera atencion:</span>  ${radiologia[0].paciente} -  ${radiologia[0].prevision} | <span class="fw-bold">  Última atención: </span> ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.`;

/** Traumatología */
document.getElementById('traumatologia').innerHTML = "TRAUMATOLOGÍA: ";

for (let i = 0; i < traumatologia.length; i++) {
  let table =
    `<tr>
      <td>${traumatologia[i].hora}</td>
      <td>${traumatologia[i].especialista}</td>
      <td>${traumatologia[i].paciente}</td>
      <td>${traumatologia[i].RUT}</td>
      <td>${traumatologia[i].prevision}</td>
  
    </tr>`;

  document.getElementById("table-traumatologia").innerHTML += table;
}

/** Primera y ultima hora */
document.getElementById("atencionTrauma").innerHTML = ` <span class="fw-bold"> Primera atencion:</span>  ${traumatologia[0].paciente} - ${traumatologia[0].prevision} |<span class="fw-bold">  Última atención: </span> ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}`;

/** Dental */
document.getElementById('dental').innerHTML = "DENTAL: ";

for (let i = 0; i < dental.length; i++) {
  let table =
    `<tr>
      <td>${dental[i].hora}</td>
      <td>${dental[i].especialista}</td>
      <td>${dental[i].paciente}</td>
      <td>${dental[i].RUT}</td>
      <td>${dental[i].prevision}</td>
  
    </tr>`;

  document.getElementById("table-dental").innerHTML += table;
}

/** Primera y ultima hora */
document.getElementById("atencionDental").innerHTML = `<span class="fw-bold"> Primera atencion: </span> ${dental[0].paciente} - ${dental[0].prevision} | <span class="fw-bold">  Última atención: </span> ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.`;