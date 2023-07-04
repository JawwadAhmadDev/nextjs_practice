import { db } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const client = await db.connect();

    try {
        // await client.sql`CREATE TABLE IF NOT EXISTS todos(id serial, tasks varchar(255))` // to create table using code
        // await client.sql`DROP TABLE todos` // to drop table
        return NextResponse.json({message: "You called this api"});
    } catch (error) {
        console.log('error', error)
        return new NextResponse("Something went wrong");
    }

}