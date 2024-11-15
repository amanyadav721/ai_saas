// import { serial } from "drizzle-orm/mysql-core";
import { integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const Aioutput = pgTable("aiOutput", {
     id:serial('id').primaryKey(),
     formData:varchar("formData").notNull(),
     aiResponse:text("aiResponse"),
     templateSlug:varchar('templateSlug').notNull(),
     createdBy:varchar('createdBy').notNull(),
     createdAt:varchar('createdAt').notNull()

});
