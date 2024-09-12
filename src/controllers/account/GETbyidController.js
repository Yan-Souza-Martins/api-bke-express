
import { getByIdAccount } from "../../models/accountModel.js"

const getById = async (req, res) => {
    //const id = req.params.id
    try {
        const { id } = req.params
        const account = await getByIdAccount(+id)

        if (!account)
            return res.status(404).json({
                error: `Conta com o id ${id}, não encontrado!`
            })

        return res.json({
            success: "Conta encontrada com sucesso!",
            account
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            error: `Erro no servidor!`
        })
    }
}

export default getById
