import React from 'react'

export const InvisibleAudio = () => {
  return (
    <div style={{display:"none"}}>
        <audio id="invisibleSound" src={process.env.PUBLIC_URL+"/media/empty.mp3"}></audio>
    </div>
  )
}
