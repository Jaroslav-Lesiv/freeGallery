import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    width: 100%;
    min-height: 75px;
    background: ${props => props.background ? props.background : '#ecf0f1'};
    display: flex;
    align-items: center;
`

export const NavMenu = styled.nav`
    display: flex;
    max-width: 700px;
    align-items: center;
    min-height: 75px;
`

export const NavLink = styled.a`
    flex-grow: 1;
    display: flex;
    text-align: center;
    border-radius: 17px;
    box-shadow: none;
    padding: 5px 15px;
    margin-left: 7.5px;
    margin-right: 7.5px;
    border-style: solid;
    background: ${props => props.isActive ? '#2ecc71' : '#ffffff'};
    border-color: ${props => props.isActive ? '#2ecc71' : '#ffffff'};
    border-width: 2px;
    color: ${props => props.isActive ? '#ffffff' : '#2ecc71'};
    text-decoration: none;
    text-transform: uppercase;
    transition-duration: 0.4s;
    &:hover {
        border-color: #ffffff;
        background: #2ecc71;
        color: #ffffff;
        cursor: pointer;
    }
`

export const CartIcon = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-weight: 700;
    font-size: 24px;
    background-image: url(/images/header/favorite.svg);
    background-repeat: no-repeat;
    cursor: pointer;
    &:hover {

    }
`

export const CartIconCounter = styled.div`
    // position: absolute;
    // width: 30px;
    // height: 30px;
    // line-height: 30px;
    text-align: center;
    border-radius: 50%;
    // border: 2px solid #ffffff;
    // background: #2ecc71;
    color: ${props => props.background ? props.background : '#ffffff' };
    transition-duration: 0.4s;
    // &:hover {
    //     border-style: solid;
    //     background: #ffffff;
    //     border-color: #2ecc71;
    //     color: #2ecc71;
    // }
`

export const MiniFavoriteList = styled.ul`
  position: absolute;
  max-width: 300px;
  min-height: 30px;
  left: -105px;
  top: 20px;
  display: flex;
  flex-direction: column;
  // border: 2px solid #2ecc71;
  z-index: 10;
  border-radius: 15px;
  padding: 5px 15px;

`

export const MiniFavoriteItems = styled.li`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 18px;
  width: 400;
  transition-duration: 0.4s;
  background: rgba(70, 70, 70, 0.6);
  &:hover {
    transform: scale(1.3);
    z-index: 11;
  }
`
export const MiniFavoritePreview = styled.div`
  width: 60px;
  height: 50px;
  background-image: url(${props => props.img ? props.img : './images/default/default.png' });
  background-size: contain;
  background-repeat: no-repeat;

`
export const MiniFavoriteName = styled.div`
  text-transform: uppercase;
  text-align: center;
`
// AuthBlock
export const LogWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const LogButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border-width: 2px;
  border-color: ${props => props.color || '#2ecc71'};
  border-style: solid;
  background-color: ${props => props.backgroundColor || '#ffffff'};
  border-radius: 17px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 5px;
  margin-right: 5px;
  font-weight: 500;
  cursor: pointer;
  transition-duration: 0.4s;
  &:hover {
    color: ${props => props.color || '#ffffff'};
    background: ${props => props.backgroundColor || '#2ecc71'};

  }
`
