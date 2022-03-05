import React from 'react'

import {PaidOutlined, AssessmentOutlined,FeedbackOutlined,
     MailOutlineOutlined, ForumOutlined,
      ManageAccountsOutlined, Inventory2Outlined, LineStyle,
       Timeline, TrendingUp, PersonOutline}
        from '@mui/icons-material/';

import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar first-color-background'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h2 className="sidebarTitle">Dashboard</h2>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <LineStyle className='sidebarIcon'/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h2 className="sidebarTitle">Quick Menu</h2>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <PersonOutline className='sidebarIcon'/>
                        Users
                    </li>
                    <li className="sidebarListItem">
                        <Inventory2Outlined className='sidebarIcon'/>
                        Products
                    </li>
                    <li className="sidebarListItem">
                        <PaidOutlined className='sidebarIcon'/>
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <AssessmentOutlined className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h2 className="sidebarTitle">Notifications</h2>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <MailOutlineOutlined className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <FeedbackOutlined className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <ForumOutlined className='sidebarIcon'/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h2 className="sidebarTitle">Staff</h2>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <ManageAccountsOutlined className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
