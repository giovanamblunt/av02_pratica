import { Router } from 'express';
import { controllerJogo } from '../controllers/jogo.controllers.js';

export const jogoRouter = Router()

jogoRouter.get("/", controllerJogo.getAll)
jogoRouter.get("/:id", controllerJogo.getById)
jogoRouter.post("/", controllerJogo.create)
jogoRouter.delete("/", controllerJogo.delete)