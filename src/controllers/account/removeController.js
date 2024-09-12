import { deleteAccount } from "../../models/accountModel.js"

const remove = async (req, res) => {
    try {
        const { id } = req.params
        const account = await deleteAccount(+id)
        return res.json({
            success: "Conta removida com sucesso!",
            account
        })
    } catch (error) {
        console.log(error)
        if (error?.code === 'P2025')
            return res.status(404).json({
                error: `Conta com o id ${id}, não encontrado!`
            })
        return res.status(500).json({
            error: `Erro no servidor!`
        })
    }
}

export default remove