import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    max-width: 75px;
    background: ${props => props.background ? props.background : '#ecf0f1'};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const NavMenu = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 75px;
    padding-top: 75px;
    overflow: hidden;
`

export const NavLinkStyle = styled.div`
    width: 100%;
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
    box-shadow: none;
    text-decoration: none;
    min-height: 75px;
    min-width: 45px;
    margin: 0 auto;
    background-image: url(./images/header/nav/${props => props.background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transition-duration: 0.4s;
    &:hover {
        cursor: pointer;
    }
`

export const SiteLogo = styled.div`
    width: ${props => props.width || '75px'};
    height: ${props => props.height || '75px'};
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid red;
`

export const CartIcon = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 24px;
    background-image: url(/images/header/nav/basic_star.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
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
  margin-top: 100%;
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

export const ShortProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-aroud;
  min-width: 100px;
  height: 75px;
`
export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100px;
`
export const ShortProfilePhoto = styled.div`
  display: flex;
  background: url(./images/uploads/user/${props => props.images || 'default.png'});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-right: 15px;
  cursor: pointer;
`

export const ProfilePhoto = styled.div`
display: flex;
background: url(./images/uploads/user/${props => props.images || 'default.png'});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
border-radius: 50%;
width: 150px;
height: 150px;
margin-right: 15px;
cursor: pointer;
`
export const ShortProfileName = styled.div`
  font-size: 18px;
  cursor: pointer;
`
export const ProfileName = styled.div`
  font-size: 24px;
  cursor: pointer;
`
export const UserSettingsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px 15px;
  margin: 0 auto;
`

export const UserSettingsItems = styled.div`
  display: flex;
  width: calc(33.333334% - 30px);
  min-height: 110px;
  margin: 15px;
  flex-direction: column;
  align-items: center;
`


export const UserSettingsItemsImage = styled.div`
  background-image: url(./images/settings/${props => props.images});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 70px;
  height: 70px;
  cursor: pointer;
`


export const UserSettingsItemsName = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
`