import styled from 'styled-components'
import _ from 'lodash'

export const ImagesRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-start;
    padding: 10px 15px;
    min-height: 300px;
`
export const Images  = styled.img.attrs({  
    title: (props => props.title || _.uniqueId('images_')),
    src: props => props.images || './images/default/default.png'
})`
    height: 230px;
    margin: 5px 10px;
    margin-right: auto;
`
