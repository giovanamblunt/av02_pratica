import { knex } from "../config/knex.js"

class RepositoryJogo {
    async getAll (){
        const pegaTudo = knex('jogo').select('*').returning('*')
        return pegaTudo
    }
    async getById (id) {
        const pegarId = knex('jogo').where({id}).select('*').returning('*')
        return pegarId
    }

    async create (data) {
        const criar = knex('jogo').insert(data).returning('*')
        return criar
    }

    async delete (id) {
        const deletar = knex ('jogo').where({id}).del().returning('*')
        return deletar
    }
}

export const repositoryJogo = new RepositoryJogo()