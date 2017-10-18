import styled from 'styled-components'


const Button = div`
    padding: 15px 48px;
    border-radius: 2px;
    border-color: ${props => props.error ? '#e74c3c' : props.success ? '#2ecc71' : '#95a5a6'}
    border-width: 3px;
    font-size: 22px;
`