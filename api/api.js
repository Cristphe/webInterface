//const { criarUsuario } = require('./db');

async function procuraNome() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();

        const user = data.results[0];
        const name = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const dob = new Date(user.dob.date);
        const age = calculaIdade(dob);

//        await criarUsuario({ name, email, dob, age });

        atualizarInterface(name, email, dob.toLocaleDateString(), age);

        console.log(`Nome: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Data de Nascimento: ${dob.toLocaleDateString()}`);
        console.log(`Idade: ${age}`);
    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
    }
}

function calculaIdade(dob) {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    return age;
}

function atualizarInterface(name, email, dob, age) {
    document.getElementById("nome").innerHTML = `Nome: ${name} <br>`;
    document.getElementById("email").innerHTML = `Email: ${email} <br>`;
    document.getElementById("data_nascimento").innerHTML = `Data de Nascimento: ${dob} <br>`;
    document.getElementById("idade").innerHTML = `Idade: ${age} <br>`;
}

document.getElementById("buscarBotao").addEventListener('click', procuraNome);
