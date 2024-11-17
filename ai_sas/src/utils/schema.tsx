// import { serial } from "drizzle-orm/mysql-core";
import { boolean, integer, pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const Aioutput = pgTable("aiOutput", {
     id:serial('id').primaryKey(),
     formData:varchar("formData").notNull(),
     aiResponse:text("aiResponse"),
     templateSlug:varchar('templateSlug').notNull(),
     createdBy:varchar('createdBy').notNull(),
     createdAt:varchar('createdAt').notNull()

});

export const UserSubscription = pgTable('userSubscription',{
     id:serial('id').primaryKey(),
     email:varchar('email'),
     userName:varchar('userName'),
     active:boolean('active'),
     paymentId:varchar('paymentId'),
     joinDate:varchar('joinDate')
     

})