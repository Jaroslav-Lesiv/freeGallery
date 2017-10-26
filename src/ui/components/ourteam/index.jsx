import styled from 'styled-components'

export const OurTeamWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background: rgb(230,230,230);
`

export const DevCategoryName = styled.div`
    width: 100%;
    min-height: 70px;
    text-align: center;
    margin: 40px auto;
    font-size: 35px;
    font-weight: 700;
`

export const DevInformBlock = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 700px;
    margin: 15px auto;
    background: white;
    padding: 15px;
    border-radius: 3px;
`

export const DevInformImg = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 2px solid #bdc3c7;
    background: url(images/team/logo/${props => props.src || 'standartLogo.png'});
    background-size: cover;    
    margin: 15px;
`

export const DevInformDescript = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 15px;
    flex-direction: column;
`

export const DevName = styled.a.attrs({
    href: props => props.href || 'none',
    title: props => props.title || props.href
})`
    text-decoration: none;
    color: black;
    margin-top: 15px;
    margin-bottom: 15px;
    transition-duration: 0.3s;
    width: 150px;
    &:hover {
        transform: scale(1.2);
    }
`
