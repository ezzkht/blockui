import React from 'react';
import { fetchUsers } from '../actions/UserActions';
import { connect } from 'react-redux';
import BlockUi from 'react-block-ui';
import { Loader, Types } from 'react-loaders';
import 'react-block-ui/style.css';
import 'loaders.css/loaders.min.css';

class Users extends React.Component {
  loadUsers() {
    this.props.loadUsers();
  }

  render() {
    return (
      <div>
        <BlockUi 
        tag="div" 
        blocking={this.props.loading} 
        loader={<Loader active type="line-scale" color="#02a17c"/>}
        message="Please wait" 
        keepInView>
          <button onClick={() => this.loadUsers()}>Load Data...</button> <br/>
          {this.renderUsers()}
        </BlockUi>
      </div>
    );
  }

  renderUsers() {
    const { users, loading } = this.props;

    if (users) {
      return users.map(u => <div key={u.id}>{u.name}</div>)
    }

    if (loading)
      return <div>Loading...</div>;

    return <div>No data!</div>;
  }
}

const mapStateToProps = state => {
  return {
    users: state.user.data,
    loading: state.user.loading
  }
};

const mapDispatchToProps = dispatch => {
  return {
    loadUsers: () => dispatch(fetchUsers())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);