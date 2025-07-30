import { ticketsController } from "../controllers/ticketsController.js";

export const ticketsRouter = [
  {
    method: 'POST',
    path: '/tickets',
    controller: ticketsController.create
  },
]