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
}
