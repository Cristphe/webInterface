const { Client } = require('pg');

const conexao = () => {
    return new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'api',
        password: '1234',
        port: 5432,
    });
};


const criarUsuario = async (usuario) => {
    const cliente = conexao();

    try{
        await cliente.connect();
        const query =`
    INSERT INTO usuarios (nome, email, data_nascimento, idade)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `;
    const values = [
        usuario.name,
        usuario.email,
        usuario.dob.toISOString().split('T')[0],
        usuario.age
    ];
    const res = await cliente.query(query, values);
    }catch(error){
        console.log('Não foi possivel adicionar pessoa: ',error);
    } finally{
        await cliente.end();
    }
};
module.exports = { criarUsuario };