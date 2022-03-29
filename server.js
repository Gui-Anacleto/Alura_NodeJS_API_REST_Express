// Instalar nodemon - para ter refresh automatico ao salvar no arquivo do server
// npm install nodemon@2.0.15 -D

import app from './src/app.js'

const port = process.env.PORT || 3000; //produçãou || homologação -> portas server
 
app.listen(port, ()=> { //server listen = escutando porta, retornando mensagemd e sucesso
    console.log(`Servidor escutando em http://localhost:${port}`); 
})