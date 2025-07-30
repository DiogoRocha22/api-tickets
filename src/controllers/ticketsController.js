export class ticketsController {
  static async create(req, res) {
    try {
      console.log("Criando ticket:", req.body); 
  
      res.end("Criado com sucesso!");
    }
    catch (error) {
      console.log(error);
    }
  }
}