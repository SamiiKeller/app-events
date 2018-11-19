import React, { Component } from 'react';
import MenuComponent from './Menu.jsx';
import EventsComponent from './Events.jsx';
import ProfileComponent from './Profile.jsx';
import CreateEventComponent from './CreateEvent.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Popup, Icon, Menu, Input, Segment, Grid, Image, Sidebar, Header, VerticalSidebar } from 'semantic-ui-react';

/* ================================ CONFIGURATION ================================ */
type Props = {};
type State = {
  isVisible: boolean
};

class App extends Component<Props, State> {
  /* ================================ DECLARATIONS ================================ */
  state = {
    isVisible: false
  };

  /* ================================ RENDER ================================ */
  render() {
    const { isVisible } = this.state;
    return (
      <Router>
      <div style={appStyle}>
        <Sidebar.Pushable>
          <Sidebar 
            as={Menu}
            animation='push'
            direction='left'
            icon='labeled'
            inverted
            vertical
            onHide={this.changeVisibility}
            visible={isVisible}
            size='medium'
            width='thin'>
            <Menu.Item
              as={Link}
              to="/profile"
            >
              <Icon name='user circle' size='huge' />
              <h4 >Mi Perfil</h4>
            </Menu.Item>
            <Menu.Item>
              <Button
                primary
                style={{ padding: '10px' }}
                as={Link}
                to="/create-event"
              >
                Crear Evento
              </Button>
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/registered-events"
            >
              Eventos Registrados
            </Menu.Item>
            <Menu.Item
              as={Link}
              to="/my-events"
            >
              Mis Eventos
            </Menu.Item>

          </Sidebar>
          <Sidebar.Pusher dimmed={isVisible}>
            <MenuComponent
              handleSidebar={this.changeVisibility}
            />
            <Route path='/' exact component={EventsComponent} />
            <Route path='/events/' component={EventsComponent} />
            <Route path='/profile/' component={ProfileComponent} />
            <Route path='/create-event/' component={CreateEventComponent} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      </Router>
    );
  }

  /* ================================ LOGIC ================================ */
  changeVisibility = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  handleItemClick = (e, { name }) => {
    this.setState({ currentView: name });
  }

}

/* ================================ STYLES ================================ */
var appStyle = {
  textAlign: 'center',
  height: '100vh',
};

export default App;
