import React, { Component } from 'react';

import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const url = 'http://localhost:3300/api/login';
    axios
      .post(url, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);

        this.props.history.push('/jokes');
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div className="loginPage">
        <h2>Login</h2>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="username" sm={2}>
              Username
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                name="username"
                id="username"
                placeholder="username"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                id="Password"
                placeholder="password"
              />
            </Col>
          </FormGroup>
          <FormGroup
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
            check
            row
          >
            <Button type="submit">Submit</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Login;
