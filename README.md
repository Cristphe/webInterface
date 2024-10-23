# API RANDOM USER

As informações são puxadas diretamente do site https://randomuser.me/

Utilizado Node.js e JS

Necessário para utilização o PostGree instalado na máquina.

Coisas necessárias para o funcionamento:

git clone https://github.com/Cristphe/webInterface.git

> npm init
> npm install pg //Banco de dados
> npm install cors //Conseguir utilizar a API para compartilhamento de dados
> npm install express //Requisições http

Utilize a extensão live server e abra o index.html

Abra o servidor com: node server.js
Irá aparecer uma mensagem informando que o servidor está na porta 3000, caso não apareça verifique se todas as dependências necessárias estão instaladas

Como funciona?

Começamos do index.html:
HTML padrão criando as divs e conexão com os arquivos js e css.

server.js:
Inicia um servidor local para possibilitar a ligação do front com o banco de dados.
Abre uma conexão com o PostGree
Abre um app.post para o envio dos usuarios puxados da API e de lá salva no banco de dados.

api.js
Responsável por pegar os dados do site https://randomuser.me/
Atualiza o front com as informações recebidas do front, calcula a idade de acordo com o ano de nascimento e envia com o metódo POST os usuarios recebidos para o servidor local aberto.



