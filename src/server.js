import express from "express"

const app = express()

app.post('/auth/signup', (req, res) =>{
    res.json({massage: "Rota de POST Auth/Signup",}) //Autenticação cadastro
})

app.post('/auth/login', (req, res) =>{
    res.json({massage: "Rota de POST Auth/Login",}) //Autenticação login
})

app.post('/auth/logout', (req, res) =>{
    res.json({massage: "Rota de POST Auth/Logout",}) //Autenticação sair da conta
})


app.post('/account/', (req, res) => {
    res.json({massege: "Rota de POST /Account/"}) //Entrar na conta
})
app.get('/account/list', (req, res) => {
    res.json({massege: "Rota GET /Account/List"}) //Lista de contas
})
app.get('/account/:id', (req, res) => {
    res.json({massege: "Rota GET /Account/:id"}) //Chamar conta pelo id
})
app.put('/account/:id', (req, res) => {
    res.json({massege: "Rota PUT /Account/:id"}) //Atualizar conta
})
app.delete('/account/:id', (req, res) => {
    res.json({massege: "Rota DELETE /Account/:id"}) //Deletar conta
})


app.listen(3000, () =>{
    console.log('Servidor Rodando em http://localhost:3000')
})