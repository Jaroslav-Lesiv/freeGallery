import React, { Component } from 'react'
import {
  MiniFavoriteList,
  MiniFavoriteItems,
  MiniFavoriteName,
  MiniFavoritePreview,
  CartIcon,
  CartIconCounter,
} from '../../ui/components/header/index.jsx'
import _ from 'lodash'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


import { user } from '../../actions/user'

const mapStateToProps = ({ user }) => ({
	Favorite: user.Favorite,
  isShowMiniFavorite: user.isShowMiniFavorite
})

const mapDispachToProps = dispatch => bindActionCreators({
	showFavoriteList: user.showFavoriteList,
  hideFavoriteList: user.hideFavoriteList
}, dispatch)

class MiniFavorite extends Component {

  showFavoriteList = () => {
    this.props.showFavoriteList()
  }

  hideFavoriteList = () => {
    this.props.hideFavoriteList()
  }

    render() {
			const { Favorite, isShowMiniFavorite } = this.props
        return (
                <CartIcon
                    onMouseEnter={() => this.showFavoriteList()}
                    onMouseLeave={() => this.hideFavoriteList()}
                    style={{ marginLeft: 'auto', marginRight: '5%' }}
                >
									<CartIconCounter
                    style={{ top: 0, right: 0 }}>
                    {Favorite.length}
                  </CartIconCounter>
                  {isShowMiniFavorite &&
                    <MiniFavoriteList>
                       {Favorite.map(img => (
                        <MiniFavoriteItems key={_.uniqueId()}>
                          <MiniFavoritePreview
                              img={img.src}
                              style={{ marginRight: 15 }}
                              >
                          </MiniFavoritePreview>
                          <MiniFavoriteName>
                            {img.name || 'default'}
                          </MiniFavoriteName>
                        </MiniFavoriteItems>))}
                        {!Favorite.length &&
                        <MiniFavoriteItems>
                          Empty
                        </MiniFavoriteItems>}
                    </MiniFavoriteList>
                  }
								</CartIcon>
        )
    }
}
export default connect(mapStateToProps, mapDispachToProps)(MiniFavorite)
