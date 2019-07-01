import React, { Component } from 'react'
// 路由依赖
import { Switch, Route } from 'react-router-dom'
import './App.css'
// 异步组件
import AsyncComponent from './components/asyncComponent.js';
import { Provider } from 'mobx-react'
//从stores中引入
import abcStore from './stores'
// 初始化store实例
const stores = new abcStore()
const Login = AsyncComponent(() => import('./components/Login.js'));
const Home = AsyncComponent(() => import('./components/Home.js'));
const Detail = AsyncComponent(() => import('./components/Detail.js'));
const Hierarchy = AsyncComponent(() => import('./components/Hierarchy.js'));
const Dashboard = AsyncComponent(() => import('./components/Dashboard.js'));
const Errorpage = AsyncComponent(() => import('./components/Errorpage.js'));
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider {...stores}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route path="/detail/:id" component={Detail} />
            <Route path="/hierarchy" component={Hierarchy} />
            <Route path="/dashboard" component={Dashboard} />
            <Route  component={Errorpage} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;
