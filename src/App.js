import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router'
import { Row, ImgWrapper, ImgInform, Picture, ImgName, ImgNavigations, AddToFavorite } from './ui/core/index.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { user } from './actions/user'

const mapStateToProps = ({ user }) => ({

})

const mapDispachToProps = dispatch => bindActionCreators({
	addToFavorite: user.addToFavorite,
}, dispatch)

class Aboute extends Component {
  render() {
      return (
        <div>aboute</div>
      )
  }
}

class App extends Component {
  addToFavorite = (data) => {
    this.props.addToFavorite(data)
  }
  render() {
    var image = [{name: 'images1', src: './images/standart-img.jpg', id: 0},
    {name: 'images2', src: './jcnjs/.', id: 1},
    {name: 'images3', src: './images/standart-img.jpg', id: 2},
    {name: 'images4', src: '', id: 3},
    {name: 'images1', id: 4},];
    return (
          <Row>
          {image.map(key => (
            <ImgWrapper key={key.id}>
              <Picture image={key.src} />
              <ImgInform>
                <ImgName>{key.name}</ImgName>
                <ImgNavigations>
                  <AddToFavorite onClick={() => this.addToFavorite(key)} style={{ marginLeft: 'auto' }} />
                </ImgNavigations>
              </ImgInform>
            </ImgWrapper>
          ))}
          </Row>
    );
  }
}
export default connect(mapStateToProps, mapDispachToProps)(App)
