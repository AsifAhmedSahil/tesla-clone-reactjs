import React from 'react'
import styled from "styled-components"

const Section = () => {
  return (
    <Wrap>
        <ItemText>
            <h1>Model S</h1>
            <p>Order Online For Touchless Delivery</p>
        </ItemText>

        <Buttons>
        <ButtonGroup>
            <LeftButton>
                custom order
            </LeftButton>
            <RightButton>
                Existing Inventory
            </RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"/>
            </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
        width: 100vw;
        height:100vh;
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat;
        background-image: url('/images/model-s.jpg');
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-between ;

`
const ItemText = styled.div`
    test-align:center;
    padding-top:15vh;
`
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
    margin:10px

`

const RightButton = styled(LeftButton)`

`
const DownArrow = styled.img`
height:40px;
margin-top:10px;
animation:animateDown infinite 1.5s;


`
const Buttons = styled.div``
