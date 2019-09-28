import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background: white;
    border: 1px solid black;
    opacity: 0.75;
    width: 40%;
    margin: 1% 4% 1% 4%;
`

export default function PersonCard(props) {
    return (
        <Div>
            <h3>{props.name}</h3>
            <p>Birth Year: {props.birth_year}</p>
            <p>Eye Color: {props.eye_color}</p>
        </Div>
    );
}