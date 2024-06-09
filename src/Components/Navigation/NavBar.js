import React from 'react'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';

export default function navBar() {
  return (
    <div>
      {/* Navigation Bar */}
      <div className="navBarBox">


        {/* Left Side */}
        <div className="navBarLeft">
          <span className="logo">Facebook</span>

          <div className="searchBarBox">
          <SearchIcon className='searchIcon'/>
            <input type="text" placeholder='Enter Search' className='searchInput' />
          </div>
        </div>


        {/* Center Side */}
        <div className="navBarCenter">

          <div className="navBarRightIcons">

            {/* Home Icon */}
            <div className="navBarRightIcon">
              <HomeIcon/>
            </div>

            {/* Video Icon */}
            <div className="navBarRightIcon">
              <OndemandVideoIcon/>
              <span className='iconTag'>9+</span>
            </div>

            {/* Video Icon */}
            <div className="navBarRightIcon">
              <PeopleAltIcon/>
              <span className='iconTag'>4</span>
            </div>

            {/* Market Place Icon */}
            <div className="navBarRightIcon">
              <StorefrontIcon/>
              <span className='iconTag'>1</span>
            </div>

            
          </div>
          
        </div>


        {/* Right Side */}
        <div className="navBarRight">

          <div className="navBarRightIcons">

            {/* Message Icon */}
            <div className="navBarRightIcon">
              <ForumIcon/>
              <span className='iconTag'>4</span>
            </div>

            {/* Person Icon */}
            <div className="navBarRightIcon">
              <NotificationsIcon/>
              <span className='iconTag'>3</span>
            </div>

            {/* Setting Icon */}
            <div className="navBarRightIcon">
              <SettingsIcon/>
              <span className='iconTag'>1</span>
            </div>
          </div>

          <div className="pic">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-ksVM_lwmwxA%2FT-_6yWiTK0I%2FAAAAAAAABc0%2FZZLfZTwzd30%2Fs1600%2Fbeautiful%2Bchinese%2Bwomen-2.jpg&f=1&nofb=1&ipt=df449394454ca6259906bd0bb623a9c0b2eac0ebc3814a284aa4469d4a1dbbbc&ipo=images" alt="" className="profilePicImg" />
          </div>

        </div>

      </div>
    </div>
  )
}
