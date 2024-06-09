import React from 'react'
import "./AddPost.css"

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

export default function AddPost() {
  return (
    <div className='addPost'>
      <div className="addPostContainer">

        <div className="addPostTop">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-ksVM_lwmwxA%2FT-_6yWiTK0I%2FAAAAAAAABc0%2FZZLfZTwzd30%2Fs1600%2Fbeautiful%2Bchinese%2Bwomen-2.jpg&f=1&nofb=1&ipt=df449394454ca6259906bd0bb623a9c0b2eac0ebc3814a284aa4469d4a1dbbbc&ipo=images" alt="" className='addPostPic'/>
            <input type="text" placeholder='What is your mind' className='addPostInput'/>
        </div>



        <hr className='postHr'/>
        <div className="addPostBottom">
            <div className="addPostOptions">

                <div className="addPostOption">
                    <VideoCameraFrontIcon htmlColor='red' className='addPhoto'/>
                    <span className='addPostOption'>Live Video</span>
                </div>

                <div className="addPostOption">
                    <AddPhotoAlternateIcon htmlColor='#00ff7f' className='addPhoto'/>
                    <span className='addPostOption'>Add Photo/Video</span>
                </div>

                <div className="addPostOption">
                    <EmojiEmotionsIcon htmlColor='orange' className='addPhoto'/>
                    <span className='addPostOption'>Feelings/Activity</span>
                </div>

            </div>

        </div>


      </div>
    </div>
  )
}
