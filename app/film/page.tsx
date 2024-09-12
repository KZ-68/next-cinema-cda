"use client"
import { db } from '@/lib/db'
import { formatDate } from '@/lib/utils'
import React, { useEffect, useState } from 'react'
import FilmCard from '@/components/FilmCard'


const FilmPage = () => {

    // VERSION 1
    // const Films = await db.Film.findMany({
    //     "orderBy": {
    //         "createdAt": 'desc'
    //     },
    //     "include":{
    //         "tags":{
    //             "include":{
    //                 "tag":true
    //             }
    //         }
    //     }
    // })
    
    // VERSION 2 - HOOKS
    const [films, setFilms] = useState([])

    useEffect(() => {
        const fetchFilms = async () => {
            const response = await fetch('api/film')
            const data = await response.json()
            setFilms(data)
        }
        fetchFilms()
    })

    return (
        <>
            <h1 className='text-4xl font-bold mb-6'>Blog</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {/* Liste des Films */}
                {films.map((film: any) => (
                    <FilmCard film={film} key={film.id}/>
                ))}
            </div>
        </>
    )
}

export default FilmPage