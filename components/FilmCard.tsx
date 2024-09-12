import React from 'react'
import { formatDate, formatYear } from '@/lib/utils'
import Image from 'next/image'

const FilmCard:React.FC<any> = ({film}) => {
    return (
        <div className='group border border-slate-500 p-6 rounded-md hover:bg-slate-700 cursor-pointer hover:translate-y-2 duration-300' key={film.id}>
            <Image src={`/public/images/${film.image}.jpg`} width={500} height={500} alt="Image du film" />
            {/* Titre de l'film */}
            <h2 className='text-2xl md:text-xl font-bold'>{film.title}</h2>
            <p className='text-sm text-slate-300'>{formatYear(film.createdAt)}</p>
            <div className='flex flex-wrap gap-2 my-4'>
                {film.genres?.map((genreFilm:any)=> (
                    <span className='group: px-3 py-2 text-xs rounded-full bg-slate-600 group-hover:bg-pink-600 duration-500' key={genreFilm.genre.id}>
                        {genreFilm.genre.nom}
                    </span>
                ))}
            </div>
            
            {/* Texte de l'film */}
            <p className='line-clamp-4'>{film.text}</p>

        </div>
    )
}

export default FilmCard