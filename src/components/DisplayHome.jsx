import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import Albumitem from './Albumitem'
import SongItems from './SongItems'

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (
                        <Albumitem key={index} image={item.image} name={item.name} desc={item.desc} id={item.id} />
                    ))}
                </div>

            </div>

            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Todays biggest hits</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item, index) => (
                        <SongItems key={index} image={item.image} name={item.name} desc={item.desc} id={item.id} />
                    ))}
                </div>

            </div>
        </>
    )
}

export default DisplayHome
