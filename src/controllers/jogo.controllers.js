import { servicesJogo } from "../services/jogo.services.js";

class ControllerJogo {
    async getAll (req, res) {
        try {
            const jogo = await servicesJogo.getAll()
            return res.status(200).json(jogo)
        } catch (error) {
            console.error(error)
            console.log("Erro ao pegar jogo");
        }
    }

    async getById (req, res) {
        const jogoId = req.params.id
        try {
            const jogo = await servicesJogo.getById(jogoId)
            return res.status(200).json(jogo)
        } catch (error) {
            console.error(error)
            console.log("Erro ao pegar id do jogo");
        }
    }

    async create (req, res) {
        try {
            const jogo = await servicesJogo.create(req.body)
            return res.status(201).json(jogo)
        } catch (error) {
            console.error(error)
            console.log("Erro ao criar jogo");
        }
    }

    async delete (req, res) {
        const jogoId = req.params.id
        try {
            const jogo = await servicesJogo.delete(jogoId)
            return res.status(204).json(jogo)
        } catch (error) {
            console.error(error)
            console.log("Erro ao deletar jogo");
        }
    }
}

export const controllerJogo = new ControllerJogo()