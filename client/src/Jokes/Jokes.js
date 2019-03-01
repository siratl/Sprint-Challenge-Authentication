import React from 'react';
import axios from 'axios';

class Jokes extends React.Component {
  state = {
    jokes: [],
  };

  componentDidMount = () => {
    const url = 'http://localhost:3300/api/jokes';
    const token = localStorage.getItem('jwt');
    const reqOptions = {
      headers: {
        authorization: token,
      },
    };
    axios
      .get(url, reqOptions)
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="jokeList ">
        <h2>List of Jokes</h2>
        {localStorage.getItem('jwt') ? (
          <ul>
            {this.state.jokes.map(joke => {
              return <li key={joke.id}>{joke.joke}</li>;
            })}
          </ul>
        ) : (
          <p style={{ color: 'red' }}>You must be logged in to view List...</p>
        )}
      </div>
    );
  }
}

export default Jokes;
