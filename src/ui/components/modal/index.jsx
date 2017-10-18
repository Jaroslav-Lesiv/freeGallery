import styled, { keyframes } from 'styled-components'
import React from 'react'


const slideInModalLeft = keyframes`
	from { opacity: 0; visibility: visible; right: -1000px }
	to { opacity: 0.9; visibility: visible ; right: 0 }
`

const slideOutModalLeft = keyframes`
	from { opacity: 0.91 ; visibility: visible; right: 0}
	99% { opacity: 0.1; visibility: visible; right: -1000px}
	to { opacity: 0; display: none; visibility: hidden; right: -1000px }
`

const defInModabackdroplLeft = keyframes`
	from { visibility: visible; opacity: 0; }
	100% { visibility: visible; opacity: 0.9; }
`

const defOutModabackdroplLeft = keyframes`
	from { opacity: 0.9 ; visibility: visible; }
	99% { opacity: 0; visibility: visible; }
	100% { opacity: 0; display: none; visibility: hidden }
`

export const ModalBackDrop = styled.div`
  display:
    ${props => props.isShow === true ? 'block' :
    props.isShow === false ? 'block' : 'none'};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(100,100,100, 0.7);
  filter: blur(3px);
  will-change: contents;
  animation-name:
    ${props => props.isShow === true ? defInModabackdroplLeft :
    props.isShow === false ? defOutModabackdroplLeft :
    'none'};
  animation-duration: 0.3s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
`

export const ModalBody = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  width: ${props => props.width || '40%'};
  padding-top: 50px;
  z-index: 1001;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  background: rgba(255,255,255, 0.85);
  animation-duration: 0.6s;
  will-change: contents;
  animation-name:
    ${props => props.isShow === true ? slideInModalLeft :
    props.isShow === false ? slideOutModalLeft :
    'none'};

  display:
    ${props => props.isShow === true ? 'flex' :
    props.isShow === false ? 'flex' : 'none'};
  animation-fill-mode: forwards;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
`
export const ModalForm = styled.div`
  position: relative;
  width: 100%;
  padding-left: 55px;
  padding-right: 55px;
  z-index: 102;
  height: 100%;
`

export const ModalInput = styled.input.attrs({
    type: props => props.type || 'text'
})`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: none;
  font-weight: 500;
  border: none;
  border-bottom: 2px;
  border-bottom-color: #FD5B03;
  border-bottom-style: solid;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 22px;
  padding-left: 10px;
`
export const ModalNavigationWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 70px;
`
export const ModalButton = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    border: none;
    background-color: ${props => props.backgroundColor || 'rgba(70,70,70, 0.4)'};
    border-radius: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 25px;
    padding-right: 25px;
    font-weight: 600;
    cursor: pointer;
    transition-duration: 0.4s;
    &:hover {
        background: rgba(253,91,3,0.7);
        color: #ffffff;
    }

}
`
export const ModalTitle = styled.h1`
  width: 100%;
  margin-left: 55px;
  margin-right: 55px;
  font-size: 36px;
  text-align: center;
`
