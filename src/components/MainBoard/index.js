import React from 'react'
import { Wrapper, Container } from './style'
import Pin from './Pin'

export default function MainBoard(props) {
    
    let { pins } = props
    
    return (
        <Wrapper>
            <Container>
                {pins.map((pin, index) => {
                    let {urls} = pin;
                    return <Pin key={index} urls={urls} />
                })}
            </Container>
        </Wrapper>
    )
}
