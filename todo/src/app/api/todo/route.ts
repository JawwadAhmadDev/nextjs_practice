import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const client = await db.connect();

  try {
    // await client.sql`CREATE TABLE IF NOT EXISTS todos(id serial, task varchar(255))` // to create table using code
    // await client.sql`DROP TABLE todos` // to drop table
    return NextResponse.json({ message: "You called this api" });
  } catch (error) {
    console.log("error", error);
    return new NextResponse("Something went wrong");
  }
}

export async function POST(request: NextRequest) {
  const client = await db.connect();
  const req = await request.json();
  try {
    if (req.task) {
      await client.sql`CREATE TABLE IF NOT EXISTS todos(id serial, task varchar(255))`; // to create table using code
      await client.sql`INSERT INTO todos(task) VALUES(${req.task})`; // to add new task
      return NextResponse.json({ message: "Task added successfully" });
    } else {
      throw new Error("Task field is required");
    }
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({message: (error as {message: string}).message});
  }
}
