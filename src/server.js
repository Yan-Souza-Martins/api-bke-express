import express from "express"
import authRouter from './routers/authRouter.js'
import accountRouter from './routers/accountRouter.js'

const app = express()

app.use('/auth', authRouter)

app.use('/account', accountRouter)


app.listen(process.env.PORT,  () =>{
    console.log(`Servidor Rodando no Ambiente ${process.env.AMBIENTE}`)
})