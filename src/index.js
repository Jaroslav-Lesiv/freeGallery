import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import configStore from './store/index'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Route, Switch, Redirect, RouteProps, Link as RouterLink, NavLink as RouterNavLink, LinkProps  } from 'react-router'
import Header from './components/header'
import OurTeam from './components/ourteam'
import Footer from './components/footer'
import Category from './components/category'
import Gallery from './components/gallery'
import NotFound from './components/404'
import { Wrapper, Title, Container, BigSearch, Main } from './ui/core/index.jsx'

export const history = createHistory()
const store = configStore


class Home extends Component {
      render() {
          return (
            <Container>
              <Title>Home page</Title>
              <BigSearch placeholder='Start search with freeGallery' />
            </Container>
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
                        <Main>
                          <Category />
                          <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/gallery" component={Gallery}/>
                            <Route path="/about" component={Aboute}/>
                            <Route path="/ourteam" component={OurTeam}/>
                            <Route path='*' component={NotFound} />
                          </Switch>
                          {/* <Footer /> */}
                        </Main>
                    </Wrapper>
                  </ConnectedRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
