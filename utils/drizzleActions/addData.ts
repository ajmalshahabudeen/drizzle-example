"use server";
import { table_one } from "@/drizzle/generated/schema";
import { db } from "@/lib/db";

export const AddDataToDb = async (value: string) => {
  const ID = Math.floor(Math.random() * 1000) + 1;
  await db.insert(table_one).values({ id: ID, name: value });
};
