import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ThreatDetail from './pages/ThreatDetail';
import ThreatList from './pages/ThreatList';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <main>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/threats/:id" component={ThreatDetail} />
            <Route path="/threats" component={ThreatList} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;