import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1960px;
    margin: 0 auto;
`
export const Row = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: calc(100% - 15px);
    min-height: 50px;
    padding: 7.5px;
`

export const ImgWrapper = styled.div`
    position: relative;
    border: 2px solid #FD5B03;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 15px;
    margin-bottom: 15px;
`
export const Picture = styled.div`
  width: 30vw;
  height: 18vw;
  cursor: pointer;
  background-size: cover;
  background-image: url(${props => props.image ? props.image : './images/default/default.png'});
  
`

export const ImgInform = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-directions: row;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 30px);
  left: 0;
  bottom: 0;
  height: 15%;
  padding-left: 15px;
  padding-right: 15px;
  background: rgba(189,195,199,0.5)
`
export const ImgNavigations = styled.div`
  flex-grow: 1;
`

export const ImgName = styled.div`
  flex-grow: 1;
  text-transform: uppercase;
`

export const AddToFavorite = styled.div`
  width: 35px;
  height: 35px;
  background: url(./images/default/addToFavorite.svg);
  background-size: cover;
  cursor: pointer;
`
export const Title = styled.div`
  width: 100%;
  min-height: 45px;
  text-align: ${props => props.textAlign || 'center'};
  font-size: ${props => props.fontSize || '35px'};
  font-weight: ${props => props.fontWeight || '700'};
`

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  flex-wrap: wrap;
  flex-direction: column;
`

export const BigSearch = styled.input.attrs({
  type: 'text',
  placeholder: props => props.placeholder || 'Write you text'
})`
  width: 70%;
  min-height: 40px;
  border-radius: 13px;
  border: 2px solid grey;
  padding-left: 15px;
  margin: 0 auto;
  font-size: large;
`