import { createContext, useContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

export const usePlayerContext = () => useContext(PlayerContext)

const PlayerContextProvider = (props) => {

    const audioRef = useRef()
    const seekBgRef = useRef()
    const seekBarRef = useRef()

    const [track, setTrack] = useState(songsData[0])
    const [playStatus, setPlayStatus] = useState(false)
    const [time, setTime] = useState({
        currentTime: { second: 0, minute: 0 },
        totalTime: { second: 28, minute: 3 }
    })

    const playSong = () => {
        audioRef.current.play()
        setPlayStatus(true)
    }

    const pauseSong = () => {
        audioRef.current.pause()
        setPlayStatus(false)

    }
    const playWithId = async (id) => {
        await setTrack(songsData[id])
        await playSong()
    }

    const playPreviousSong = async () => {
        if (track.id > 0) {
            await setTrack(songsData[track.id - 1])
            await playSong()
        }
    }

    const playNextSong = async () => {
        if (track.id < songsData.length - 1) {
            await setTrack(songsData[track.id + 1])
            await playSong()
        }
    }

    const seekSong = async (e) => {
        audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBgRef.current.offsetWidth) * audioRef.current.duration)
        playSong()
    }

    const contextValue = {
        seekSong,
        audioRef,
        seekBgRef,
        seekBarRef,
        track, setTrack,
        playStatus, setPlayStatus,
        time, setTime,
        pauseSong,
        playSong,
        playWithId,
        playNextSong, playPreviousSong
    }

    useEffect(() => {
        setTimeout(() => {
            audioRef.current.ontimeupdate = () => {
                seekBarRef.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + '%'
                setTime({
                    currentTime: {
                        second: Math.floor(audioRef.current.currentTime % 60),
                        minute: Math.floor(audioRef.current.currentTime / 60),
                    },
                    totalTime: {
                        second: Math.floor(audioRef.current.duration % 60),
                        minute: Math.floor(audioRef.current.duration / 60),
                    }
                })
            }
        }, 1000)
    }, [audioRef])
    return (
        <PlayerContext.Provider value={contextValue}>
            {props.children}
        </PlayerContext.Provider>)
}

export default PlayerContextProvider;
