import { repositoryJogo } from "../repositories/jogo.repository.js";

class ServicesJogo {
    async getAll (){
        const pegaTudo = repositoryJogo.getAll()
        return pegaTudo
    }

    async getById (id) {
        const pegarId = repositoryJogo.getById(id)
        return pegarId
    }

    async create (data) {
        const criar = repositoryJogo.create(data)
        console.log ("route curtidas:", criar);
        return criar
    }

    async delete (id) {
        const deletar = repositoryJogo.delete(id)
        return deletar
    }
}

export const servicesJogo = new ServicesJogo()