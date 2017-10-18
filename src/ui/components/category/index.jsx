import styled from 'styled-components'

export const CategoryWrapper = styled.div`
    width: 100%;
    min-height: 50px;
    background: ${props => props.background ? props.background : '#bdc3c7'};
    display: flex;
    align-items: center;
`

export const Search = styled.input.attrs({
    type: 'text',
    placeholder: props => props.placeholder,
})`
    border-radius: 17px;
    border-width: 2px;
    border-style: solid;
    border-color: #2ecc71;
    padding-left: 15px;
    max-width: 500px;
    padding: 5px 15px;
    margin-left: 7.5px;
    margin-right: 7.5px;
`
export const FilterIcon = styled.div`
    background-image: url(/images/category/filter.svg);
    width: 40px;
    height: 40px;
    background-size: 30px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 7.5px;
    margin-right: 7.5px;
    transition-duration: 0.4s;
    &:hover {
    }
`
