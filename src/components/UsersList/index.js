import React, { Component } from 'react';
import styles               from './styles.module.css';
import Spinner              from '../Spinner';
import UserCard             from '../UserCard';

class UsersList extends Component {

  constructor (props) {
    super( props );
    this.state = {
      isFetching: true,
      users: [],
      error: null,
    };
  }

  componentDidMount () {

    fetch( '/users.json' )
      .then( response => response.json() )
      .then( data => {
        this.setState( {
                         users: data,
                         isFetching: false,
                       } );
      } )
      .catch( err => {
        this.setState( {
                         error: err,
                         isFetching: false,
                       } );
      } );
  }

  renderUsers = () => {
    const { users } = this.state;

    return users.map( user => (
      <li key={user.id}>
        <UserCard user={user}/>
      </li>
    ) );
  };
  renderSpinner = () => {
    const { isFetching } = this.state;
    if (isFetching) {
      return <Spinner/>;
    }
  };

  render () {

    return (
      <ol className={styles.container}>
        {
          this.renderUsers()
        }
        {
          this.renderSpinner()
        }
      </ol>
    );
  }

}

export default UsersList;
