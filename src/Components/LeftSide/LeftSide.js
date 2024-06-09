import React from 'react'
import './LeftSide.css'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RestoreIcon from '@mui/icons-material/Restore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupsIcon from '@mui/icons-material/Groups';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import FeedIcon from '@mui/icons-material/Feed';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export default function LeftSide() {
  return (
      <div className='LeftSide'>
        <div className="leftSideContainer">
          <div className="leftSideMenu">
            
            <li className="leftMenuItems">
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-ksVM_lwmwxA%2FT-_6yWiTK0I%2FAAAAAAAABc0%2FZZLfZTwzd30%2Fs1600%2Fbeautiful%2Bchinese%2Bwomen-2.jpg&f=1&nofb=1&ipt=df449394454ca6259906bd0bb623a9c0b2eac0ebc3814a284aa4469d4a1dbbbc&ipo=images" alt="" className='pagePic'/>
              <span className='sn'>Amenda Gomez</span>
            </li>

            <li className="leftMenuItems">
              <PeopleAltIcon className='leftSideMenuIcon'/>
              <span>Friends</span>
            </li>

            <li className="leftMenuItems">
              <RestoreIcon className='leftSideMenuIcon' htmlColor='blue'/>
              <span>Memories</span>
            </li>

            <li className="leftMenuItems">
              <BookmarkIcon className='leftSideMenuIcon' htmlColor='purple'/>
              <span>Saved</span>
            </li>

            <li className="leftMenuItems">
              <GroupsIcon className='leftSideMenuIcon'htmlColor='cyan'/>
              <span>Groups</span>
            </li>

            <li className="leftMenuItems">
              <OndemandVideoIcon className='leftSideMenuIcon'htmlColor='red'/>
              <span>Videos</span>
            </li>

            <li className="leftMenuItems">
              <StorefrontIcon className='leftSideMenuIcon'htmlColor='blue'/>
              <span>Marketplace</span>
            </li>

            <li className="leftMenuItems">
              <FeedIcon className='leftSideMenuIcon'htmlColor='cyan'/>
              <span>Feeds</span>
            </li>

            <li className="leftMenuItems">
              <EventNoteIcon className='leftSideMenuIcon'htmlColor='red'/>
              <span>Events</span>
            </li>

            <li className="leftMenuItems">
              <ExpandCircleDownIcon className='leftSideMenuIcon'/>
              <span>See More</span>
            </li>

{/*------------------- Line Brake --------------------*/}
            <hr />
            <div className="shortcuts">
              <span>Your Shortcuts</span>
            </div>
            
            <div className="pageList">

              <li className="pageListItem">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F10%2FDownload-Beautiful-Girl-Picture.jpg&f=1&nofb=1&ipt=cd23376b5e2412bdc2ec1a8f9e757df0d71a0a34f9148faeb77402448224d0c8&ipo=images" alt="" className='pagePic' />
                <span className='pageName'>Mary Jane</span>
              </li>

              <li className="pageListItem">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Nolz7WP6ihgX54G98AcWnAHaEo%26pid%3DApi&f=1&ipt=272edfe4f1c4ac5e5f04e41ff5afb17d3d22e5b13661350b203a87cf20252e63&ipo=images" alt="" className='pagePic' />
                <span className='pageName'>Anne Marie</span>
              </li>

              <li className="pageListItem">
                <img src="https://wallpapercave.com/wp/wp6893093.jpg" alt="" className='pagePic' />
                <span className='pageName'>Sarah Beth</span>
              </li>

              <li className="pageListItem">
                <img src="http://www.inspiredluv.com/wp-content/uploads/2016/09/11-beautiful-girl-image.jpg" alt="" className='pagePic' />
                <span className='pageName'>Emma Lou</span>
              </li>

              <li className="pageListItem">
                <img src="https://www.1zoom.me/big2/17/179945-stranger.jpg" alt="" className='pagePic' />
                <span className='pageName'>Lisa Marie</span>
              </li>

              <li className="pageListItem">
                <img src="https://wallpapercave.com/wp/wp5005650.jpg" alt="" className='pagePic' />
                <span className='pageName'>Ruby Rose</span>
              </li>

              <li className="pageListItem">
                <img src="https://cdn.wallpapersafari.com/38/42/MzIoe7.jpg" alt="" className='pagePic' />
                <span className='pageName'>Carol Ann</span>
              </li>

              <li className="pageListItem">
                <img src="http://eskipaper.com/images/beautiful-girls-wallpaper-4.jpg" alt="" className='pagePic' />
                <span className='pageName'>Laura Lee</span>
              </li>

              <li className="pageListItem">
                <img src="http://hdwallpapers2013.com/wp-content/uploads/2012/09/cute-girl-hd-wallpaper.jpg" alt="" className='pagePic' />
                <span className='pageName'>Anna Grace</span>
              </li>
            </div>
            
            
          </div>
        </div>
      </div>
  )
}
