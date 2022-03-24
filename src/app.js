import express from "express"; 

const app = express()

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
]

app.get('/',(req, res) => {
    res.statusd(200).send('Curso de Node');
         
}) 
 //time aula  7:00min  