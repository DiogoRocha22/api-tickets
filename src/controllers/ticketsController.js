import { randomUUID } from 'node:crypto'

export class ticketsController {
  static async create(req, res, database) {
    try {
      const { equipment, description, username } = req.body;

      const ticket = {
        id: randomUUID(),
        equipment,
        description,
        username,
        status: 'open',
        created_at: new Date(),
        updated_at: new Date()
      }
      
      console.log("Criando ticket:", ticket); 
      await database.insert('Tickets', ticket);

      res.end(JSON.stringify({ message: "Ticket criado com sucesso!", data: ticket}));
    }
    catch (error) {
      console.log(error);
    }
  }
}