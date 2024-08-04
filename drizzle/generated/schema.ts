import { pgTable, integer, varchar } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const table_one = pgTable("table_one", {
	id: integer("id"),
	name: varchar("name", { length: 255 }),
});