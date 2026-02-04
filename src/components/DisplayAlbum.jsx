import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'

const DisplayAlbum = () => {
    const { id } = useParams()
    function formatDuration(minutes) {
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;

        if (h === 0) return `${m} min`;
        if (m === 0) return `${h} hr`;

        return `${h} hr ${m} min`;
    }


    const albumData = albumsData[id]
    return (
        <div>
            <Navbar />
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img className='w-48 rounded' src={albumData.image} alt="" />
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
                    <h4 className="">{albumData.desc}</h4>
                    <p className="mt-1">
                        <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                        <b className="">Spotify</b>
                        • {albumData.likeCount.toLocaleString()} likes
                        • {albumData.totalSongs} songs, about {formatDuration(albumData.duration)}
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 md-4 pl-2 text-[#a7a7a7]">
                <p className="mr-4"><b>#</b></p>
                <p className="">Album</p>
                <p className="hidden sm:block">Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {
                songsData.map((item, index) => (
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"></div>
                ))
            }
        </div>
    )
}

export default DisplayAlbum
