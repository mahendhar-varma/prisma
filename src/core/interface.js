const prisma = require("@prisma/client");

class PostgresInterface {
  constructor(db) {
    this.db = db;
  }

  getMany(
    filters = {},
    selected = null,
    orderBy = {},
    limit = undefined,
    offset = undefined,
    include = undefined
  ) {
    return this.db.findMany({
      where: filters,
      select: selected,
      orderBy,
      take: limit,
      skip: offset,
      include,
    });
  }

  createSingle(data, selectedFields = null) {
    return this.db.create({
      data,
      select: selectedFields,
    });
  }

  getSingle(
    filters,
    selectedFields = null,
    orderBy = {},
    limit = undefined,
    offset = undefined,
    include = undefined
  ) {
    return this.db.findFirst({
      where: filters,
      select: selectedFields,
      orderBy,
      take: limit,
      skip: offset,
      include,
    });
  }

  updateSingle(filters, data, selectedFields) {
    return this.db.update({
      where: filters,
      data,
      select: selectedFields,
    });
  }

  transaction(dbQueries = [], params = {}) {
    return prisma.$transaction(dbQueries, params);
  }
}

module.exports = PostgresInterface;
