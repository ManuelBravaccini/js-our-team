const employees = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg',
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg',
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg',
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg',
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg',
    }
];

for (let i = 0; i < employees.length; i++){
    console.log(employees[i]);
}



const employeesNames = document.getElementById('employees-names');
const employeesRoles = document.getElementById('employees-roles');
const employeesPhotos = document.getElementById('employees-photos');

for (let i = 0; i < employees.length; i++){
    employeesNames.append(employees[i].nome, ", ");
    employeesRoles.append(employees[i].ruolo, ", ");
    employeesPhotos.append(employees[i].foto, ", ");
}

