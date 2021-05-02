import React from 'react'
import { Wrapper, Container } from './stylePin'

function Pin(props) {
    
    let {urls} = props
    
    return (
        <Wrapper>
            <Container>
                <img src={urls?.regular} alt="Pins" />
            </Container>
        </Wrapper>
    )
}

export default Pin
