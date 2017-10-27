import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store/index'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import Header from './components/header'
import OurTeam from './components/ourteam'
import Footer from './components/footer'
import Category from './components/category'
import Gallery from './components/gallery'
import { Wrapper, Row, ImgWrapper, ImgInform, Picture, ImgName, ImgNavigations, AddToFavorite } from './ui/core/index.jsx'

const history = createHistory()
const store = configStore


class Home extends Component {
      render() {
          return (
            <div>Home page</div>
          )
      }
  }


class Aboute extends Component {
  render() {
      return (
        <div>aboute</div>
      )
  }
}

ReactDOM.render(<Provider store={store}>
                  <ConnectedRouter history={history}>
                      <Wrapper>
                      <Header />
                      <Category />
                        <Route exact path="/" component={Home}/>
                        <Route path="/gallery" component={Gallery}/>
                        <Route path="/about" component={Aboute}/>                        
                        <Route path="/ourteam" component={OurTeam}/>
                      <Footer />
                    </Wrapper>
                  </ConnectedRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
