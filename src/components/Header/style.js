import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 12px;
  background-color: white;
  color: black;
`;

export const LogoWrapper = styled.div`
    color: #e60023;
    font-size: 32px;
    cursor: pointer;
    height: 48px;
    width: 48px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 50%;

    :hover{
        background-color: #e1e1e1;

    }
`
export const HomepageBtn = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    background-color: rgb(17,17,17);

    a{
        text-decoration: none;
        color: white;
        font-weight: 700;
    }
`
export const FollowingBtn = styled.div`
    display: flex;
    height: 48px;
    min-width: 123px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    cursor: pointer;
    background-color: white;

    a{
        text-decoration: none;
        color: black;
        font-weight: 700;
    }

    :hover{
        background-color: #e1e1e1;
    }
`
export const SearchWrapper = styled.div`
    flex: 1;

`
export const SearchBarWrapper = styled.div`
    background-color: #e1e1e1;
    display: flex;
    height: 48px;
    width: 100%;
    border: none;
    padding-left: 10px;
    display: flex;
    border-radius: 58px;

    form{
        display: flex;
        flex: 1;
    }

    form > input {
        background-color: #e1e1e1;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 20px;
        border-radius: 58px;
    }

    form > button{
        display: none;
    }

    input:focus{
        outline: none;
    }
    input:active{
        outline: none;
    }
`
export const IconsWrapper = styled.div``
export const IconButton = styled.div``