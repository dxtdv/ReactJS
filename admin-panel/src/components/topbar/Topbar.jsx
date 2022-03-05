import React from 'react'
import {NotificationsNone, Language, Settings} from '@material-ui/icons'

import './topbar.css'

export default function Topbar() {
  return (
    <div className='topbar second-color-background'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className="logo third-color-font">DXT</span>
            </div>
            <div className='topRight'>
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBag">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBag">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img src="https://images.pexels.com/photos/11293709/pexels-photo-11293709.jpeg?cs=srgb&dl=pexels-vietnam-photographer-11293709.jpg&fm=jpg" alt="" className="topAvatar" />
            </div>
        </div>
      
    </div>
  )
}
