import { React, useRef, useState } from 'react';
import './intro.css';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { Meal } from '../../constants';

const Intro = () => {
    const  [playVideo, setPlayVideo] = useState(false);
    const videoRef = useRef();

  return (
   <div className="app__video">
        <video src={Meal} ref={videoRef} type="video/mp4" loop controls={false} muted/>
        <div className="app__video-overlay flex__center">
            <div
                className="app__video-overlay_circle flex__center"
                onClick={() => {
                    setPlayVideo(!playVideo);
                    if(playVideo){
                        videoRef.current.pause();
                    }else{
                        videoRef.current.play();
                    }
                }}
            >
                {
                    playVideo?(
                        <BsPauseFill color='#fff' fontSize={30}/>
                    ) :(
                        <BsFillPlayFill color='#fff' fontSize={30}/>
                    )
                }
            </div>
        </div>
   </div>
  )
}

export default Intro