import React,{ useRef, useState,useEffect } from 'react';
import "../Styles/musicPlayer.css";
import { FaBackward , FaHeart, FaPause, FaRegHeart, FaStepBackward, FaPlay, FaForward, FaStepForward, FaShareAlt } from "react-icons/fa"
import { BsDownload } from "react-icons/bs";
const MusicPlayer = ({ song,imgSrc }) => {
    const [isLove,setLoved]=useState(false);
    const [isPlaying,setPlaying]=useState(false);
    const [duration,setDuration]=useState(0)
    const audioPlayer=useRef();
    const progressBar =useRef();
    const changeLoved=()=>{
        setLoved(!isLove)
        
    }
    useEffect(()=>{
         const seconds=audioPlayer.current.duration;   
         setDuration(seconds)
    },[audioPlayer?.current?.loadedmetada, audioPlayer?.current?.readyState])
    const changePlayPause=()=>{
        const prevValue=isPlaying;
        if (!prevValue){
            audioPlayer.current.play();
        }else{
            audioPlayer.current.pause();
        }
        setPlaying(!prevValue)
    }
    return (
        <div className="musicPlayer">
            <div className='songImage'>
                <img src={imgSrc} alt="" />
            </div>
            <div className='songAttributes'>
                <audio src={song} 
                    preload="metadata"
                    ref={audioPlayer}
                />
                <div className='top'>
                    <div className='left'>
                    <div className='loved' onClick={changeLoved}>
                    {isLove ? (
                    <i><FaHeart /></i>
                    ):( 
                    <i><FaRegHeart /></i>
                    )} 
                    </div>
                    <div className='download'><i><BsDownload /></i></div>
                    </div>
                    <div className='middle'>
                        <div className='back'>
                            <i><FaStepBackward /></i>
                            <i><FaBackward /> </i>
                        </div>
                        <div className='playPause' onClick={changePlayPause}>
                            {
                                isPlaying ? <i><FaPause /></i> : <i><FaPlay /></i>
                            }
                        </div>
                        <div className='forward'>
                            <i><FaForward /></i>
                            <i><FaStepForward /></i>
                        </div>
                    </div>
                    <div className='right'>
                        <i><FaShareAlt /></i>
                    </div>

                </div>
                <div className='bottom'>
                    <div className='curretnTime'>00:00</div>
                    <input type="range" className='progressBar' ref={progressBar}/>
                    <div className='duration'>{duration}</div>
                </div>
            </div>
            
        </div>
    );
};

export default MusicPlayer;