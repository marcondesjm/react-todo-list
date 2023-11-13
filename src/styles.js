import styled from 'styled-components'
import Background from './assets/background.jpg'
import { BiTrashAlt } from 'react-icons/bi'
import { BsCheckLg } from 'react-icons/bs'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('${Background}');
`

export const ContainerFlex = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const ContainerItems = styled.div`
    height: 90vh;
    width: 100%;
    display: flex;
`

export const ListBox = styled.div`
    min-height: 500px;
    width: 500px;
    padding: 50px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50px;
    align-self: center;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    ul {
        padding: 0;
        margin: 0;
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        h4 {
            color: rgba(60, 60, 60, 0.7);
            text-align: center;
        }
    }
`

export const InputButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Input = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.9);
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 30px;
    height: 40px;
    width: 70%;
    padding-left: 15px;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    color: rgb(255, 255, 255);

    &::placeholder {
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }
`

export const Button = styled.button`
    border: 1px solid rgba(0, 0, 0, 0.9);
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 100%;
    color: rgb(255, 255, 255);
    height: 44px;
    width: 44px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
        transition: 0.3s;
        font-weight: 700;
        transform: rotate(180deg);
    }

    &:active {
        opacity: 0.6;
    }
`

export const ListItem = styled.div`
    background: ${props => props.isFinished ? 'rgba(178, 208, 173, 0.9)' : 'rgba(255, 255, 255, 0.9)'};
    transition: 0.5s;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;

    li {
        list-style: none;
    }
`

export const Footer = styled.div`
    height: 10vh;
    width: 100vw;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;

    .my-name {
        font-size: 17px;
        font-weight: 500;
        
    }

    .link-container {
        display: flex;
        gap: 15px;
        font-size: 15px;

        a {
            text-decoration: none;

            &:visited {
                color: rgba(60, 60, 60, 0.7)
            }
        }
    }
`

export const Trash = styled(BiTrashAlt)`
    cursor: pointer;
`

export const Check = styled(BsCheckLg)`
    cursor: pointer;
`