import React, { useState } from 'react'
import { Wrapper, LogoWrapper, HomepageBtn, FollowingBtn, SearchWrapper, SearchBarWrapper, IconsWrapper } from './style'
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextsmsIcon from '@material-ui/icons/Textsms';
import FaceIcon from '@material-ui/icons/Face'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
 
export default function Header(props) {
    const [input, setInput] = useState("")

    const onSearchSubmit = (e) => {
        e.preventDefault()
        props.onSubmit(input)
    }

    
    return (
        <Wrapper>

            <LogoWrapper>
                <IconButton>
                    <PinterestIcon/>
                </IconButton>
            </LogoWrapper>


            <HomepageBtn>
                <a href="/">Homepage</a>
            </HomepageBtn>


            <FollowingBtn>
                <a href="/">Following</a>
            </FollowingBtn>


            <SearchWrapper>
                 <SearchBarWrapper>
                     <IconButton>
                         <SearchIcon/>
                     </IconButton>
                     <form>
                         <input type="text" onChange={(e) => setInput(e.target.value)} />
                         <button type="submit" onClick={onSearchSubmit} ></button>
                     </form>
                </SearchBarWrapper>
            </SearchWrapper>


            <IconsWrapper>

                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <TextsmsIcon/>
                </IconButton>
                <IconButton>
                    <FaceIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardArrowDownIcon/>
                </IconButton>

            </IconsWrapper>
        </Wrapper>
    )
}
