import React from 'react';
import './App.css';
import 'react-block-ui/style.css';
import { Provider } from 'react-redux';
import configureStore from './Store';
import Users from './components/Users';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.store = configureStore.configure();
    this.store.subscribe(() => {
      console.log('New state', this.store.getState());
    });
  }

  loadUsers() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <Provider store={this.store}>
        <div>
          <Users/>
        </div>
      </Provider>
    );
  }
}

export default App;
