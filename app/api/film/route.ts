import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {

        const films = await db.film.findMany({
            "orderBy": {
                "createdAt": 'desc'
            },
            "include": {
                "genres":{
                    "include":{
                        "genre":true
                    }
                }
            }
        })
        return NextResponse.json(films)
    } catch (error) {
        console.log("{FILMS}", error)
        return new NextResponse("Internal Error", {status:500})
    }
}