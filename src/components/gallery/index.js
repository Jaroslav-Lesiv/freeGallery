import React, { Component } from 'react';
import '../../App.css';
import { ImagesRow, Images } from '../../ui/components/gallery'
import { Route } from 'react-router'
import { Row, ImgWrapper, ImgInform, Picture, ImgName, ImgNavigations, AddToFavorite } from '../../ui/core/index.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { user } from '../../actions/user'

const mapStateToProps = ({ user, gallery }) => ({
  image: gallery.result
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

class Gallery extends Component {
  addToFavorite = (data) => {
    this.props.addToFavorite(data)
  }
  render() {
    const { image } = this.props
    return (
          <ImagesRow>
          {image.map(key => (
            <Images key={key.id} title={key.name} images={key.src} />
            /* <ImgWrapper key={key.id}>
              <Picture image={key.src} />
              <ImgInform>
                <ImgName>{key.name}</ImgName>
                <ImgNavigations>
                  <AddToFavorite onClick={() => this.addToFavorite(key)} style={{ marginLeft: 'auto' }} />
                </ImgNavigations>
              </ImgInform>
            </ImgWrapper> */
          ))}
          {image.map(key => (
            <Images key={key.id} title={key.name} alt={key.name} images={key.src} />
            /* <ImgWrapper key={key.id}>
              <Picture image={key.src} />
              <ImgInform>
                <ImgName>{key.name}</ImgName>
                <ImgNavigations>
                  <AddToFavorite onClick={() => this.addToFavorite(key)} style={{ marginLeft: 'auto' }} />
                </ImgNavigations>
              </ImgInform>
            </ImgWrapper> */
          ))}
          </ImagesRow>
    );
  }
}
export default connect(mapStateToProps, mapDispachToProps)(Gallery)
