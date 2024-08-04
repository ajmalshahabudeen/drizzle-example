import { pgTable, integer, varchar } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const tableOne = pgTable("table_one", {
	id: integer("id"),
	name: varchar("name", { length: 255 }),
});