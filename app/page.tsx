'use client';
import { AddDataToDb } from "@/utils/drizzleActions/addData";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const adddata = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data:any = e.target;

    AddDataToDb(data.some_text.value);
  };

  return (
    <main className="p-24">
      <form onSubmit={adddata} className="flex gap-3 items-center">
        <input type="text" name="some_text" className="p-3 text-black rounded-md" autoComplete="off"/>
      <button className="bg-red-500 p-3 rounded-md">
        Add Value
      </button>
      </form>
      <p className="pt-20">
        Read the Docs for more information. <Link href="https://orm.drizzle.team/docs/overview" className="text-green-500 hover:underline">Click here</Link>
      </p>
      <p>
        Source Code. <Link href="https://github.com/ajmalshahabudeen/drizzle-example" className="text-green-500 hover:underline">Click here</Link>
      </p>
    </main>
  );
}
