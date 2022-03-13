import './Css/Askheader.css'
import React from 'react';
import Homeicon from '@material-ui/icons/Home'
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList'
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn'
import NotificationsOutlined from '@material-ui/icons/NotificationsOutlined'
import PeopleAltOutlined from '@material-ui/icons/PeopleAltOutlined'
import Search from '@material-ui/icons/Search'
import { Avatar, Button } from '@material-ui/core';


function Askheader() {
  return(
  <div className='aHeader'>
    <div className="aHeader-content">
        <div className="aHeader_logo">
            Q&A
        </div>
            <div className="aHeader_icons">
                <div className="aHeader_icon"><Homeicon/></div>
                <div className="aHeader_icon"><FeaturedPlayListIcon/></div>
                <div className="aHeader_icon"><AssignmentTurnedInIcon/></div>
                <div className="aHeader_icon"><NotificationsOutlined/></div>
                <div className="aHeader_icon"><PeopleAltOutlined/></div>
            </div>
            <div className="aHeader_input">
                <Search />
                <input type="text" placeholder="Search Here" />
            </div>
            <div className="aHeader_Rem">
                <Avatar />
            </div>
            <Button>Ask Question</Button>
    </div>
  </div>
  )
}

export default Askheader;
