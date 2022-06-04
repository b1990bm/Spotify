import React,{ useState,useEffect } from 'react';
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa';
import { Songs } from "./Songs";
const AudioList = () => {
    
    useEffect(() => {
        const song=document
          .querySelectorAll(".songs");
    
          function changeMenuActive(){
           song.forEach((n)=>n.classList.remove("active"))
            this.classList.add("active")
          }
    
          song.forEach((n)=>n.addEventListener('click', changeMenuActive))
      },[])
    const [songs,setSongs]=useState(Songs);
    const [song,setSong]=useState(Songs[0].song);
    const [img,setImage]=useState(Songs[0].imgSrc);
    const changeFacourite=(id)=>{
        Songs.forEach((song)=>{
            if (song.id === id){
                song.favourite=!song.favourite
            }
            setSongs([...Songs])
        })
    }
    const setMainSong=(songSrc,imgSrc)=>{
       setSong(songSrc);
       setImage(imgSrc); 

    }
    console.log(img,song)

    return (
        <div className='AudioList'>
            <h2 className='title'>
                The List <span>{`${Songs.length} songs`}</span>
            </h2>
                <div className='songsContainer'>
                    {
                        songs && songs.map((song,index)=>(
                    <div className='songs' key={song.key}
                            onClick={()=>setMainSong(song.song , song.imgSrc)}
                    >
                    <div className='count'>{`#${index + 1}`}</div>
                        <div className='song'>
                            <div className='imgBox'>
                                 <img src={song.imgSrc} alt='' />    
                            </div>
                        <div className='section'>
                                <p className='songName'>
                                    {song.songName}
                                         <span className='songSpan'>{song.artist}</span> 
                                  </p>
                            <div className='hits'>
                                 <p className='hit'>
                                     <i><FaHeadphones /></i>
                                        95,490,102
                                  </p>
                            <p className='duration'>
                                <i><FaRegClock /></i>
                                03.04
                            </p>
                            <div className='favourite' onClick={()=>changeFacourite(song.id) }>
                                {
                                   song.favourite ? 
                                   <i><FaHeart /></i> :
                                   <i><FaRegHeart /></i>         
                                }
                                
                                
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
                        ))}

        </div> 
        
     </div>
    );
};

export default AudioList;