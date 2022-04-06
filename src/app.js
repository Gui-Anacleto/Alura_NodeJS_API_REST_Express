import express from "express"; 
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";

db.on("error", console.log.bind(console, 'ERROR DE CONEXAO !'))
db.once("open", () =>{
    console.log('conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json());


/* const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
] */

app.get('/',(req, res) => {
    res.status(200).send('Curso de Node');
         
}) 

//visualiza todos os livros
app.get('/livros',(req, res) =>{
    livros.find((err, livros) => {
        res.status(200).json(livros);   
    })
})

//visualiza livro por ID
app.get('/livros/:id', (req, res) =>{
    let index = buscaLivro(req.params.id);
    res.json(livros[index])
})

//adicionar
app.post('/livros',(req, res) =>{
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso')
})
//alterar
app.put('/livros/:id', (req, res) =>{
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros)
})

//deletar
app.delete('/livros/:id', (req, res) =>{
    let{id} = req.params;
    let {index} = buscaLivro(id);
    livros.splice(index, 1); 
    res.send(`Livro ${id} removido com successo`)
})


//função buscar livro
function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id);
}
export default app

