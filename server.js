// Instalar nodemon - para ter refresh automatico ao salvar no arquivo do server
// npm install nodemon@2.0.15 -D

const http = require("http"); //importar metodo interno HTTP
const port= 3000;       //porta server

const rotas = {
    '/':'Curso de Node',
    '/livros' : 'Entrei na pagina de livros',
    '/autores' : 'Listagem de autores',
    '/editora': 'Pag editora',
    '/sobre' : 'Info sobre o projeto'
}

const server = http.createServer((req, res) =>{         //criar server e oque ele vai fazer: req e res (requisição e resposta) e na arrow function o callback
    res.writeHead(200, {'Content-Type':'text/plain'});       //resposta -> cabeçalho, status = 200 = OK , tipo = texto/plano -> callback
    res.end(rotas[req.url]);        //end -> oque vai ser exibido no final -> callback
})      
server.listen(port, ()=> { //server listen = escutando porta, retornando mensagemd e sucesso
    console.log(`Servidor escutando em http://localhost:${port}`); 
})