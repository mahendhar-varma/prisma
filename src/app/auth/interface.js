const prismaClient = require("@prisma/client");
const PostgresInterface = require("../../core/interface");

class AuthInterface extends PostgresInterface {
  constructor(db) {
    super();
    this.db = db;
  }
}
