import React from 'react';
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa';

const AudioList = () => {
    return (
        <div className='AudioList'>
            <h2 className='title'>
                The List <span>12 Songs</span>
            </h2>
                <div className='songsContainer'>
                    <div className='songs'>
                    <div className='count'>#01</div>
                        <div className='song'>
                            <div className='imgBox'>
                                 <img src="" alt='' />    
                            </div>
                        <div className='section'>
                                <p className='songName'>
                                    take me one
                                         <span className='songSpan'>Artist</span> 
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
                            <div className='favourite'>
                                <i><FaHeart /></i>
                                <i><FaRegHeart /></i>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div> 
     </div>
    );
};

export default AudioList;