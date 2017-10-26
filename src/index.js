import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store/index'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import Header from './components/header/index'
import OurTeam from './components/ourteam/index'
import Footer from './components/footer/index'
import Category from './components/category/index'
import { Wrapper, Row, ImgWrapper, ImgInform, Picture, ImgName, ImgNavigations, AddToFavorite } from './ui/core/index.jsx'

const history = createHistory()
const store = configStore


class Home extends Component {
      render() {
          return (
            <div>Home</div>
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

class Anoth extends Component {
  render() {
      return (
        <div>another</div>
      )
  }
}
ReactDOM.render(<Provider store={store}>
                  <ConnectedRouter history={history}>
                      <Wrapper>
                      <Header />
                      <Category />
                        <Route exact path="/" component={App}/>
                        <Route path="/about" component={Aboute}/>
                        <Route path="/anoth" component={Anoth}/>
                        <Route path="/ourteam" component={OurTeam}/>
                      <Footer />
                    </Wrapper>
                  </ConnectedRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
