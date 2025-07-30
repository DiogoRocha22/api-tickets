export class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message = 'Bad Request') {
    return new ApiError(400, message);
  }

  static internal(message = 'Erro interno do servidor') {
    return new ApiError(500, message);
  }

  static forbidden(message = "Access Forbidden") {
    return new ApiError(403, message);
  }

  static unauthorized(message = "Acesso não autorizado") {
    return new ApiError(401, message);
  }

  static notFound(message = "Rota não encontrada") {
    return new ApiError(404, message);
  }
}