import React, { Component } from 'react';

import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class Register extends Component {
  state = {
    username: '',
    passdowd: '',
    department: '',
  };

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const url = 'http://localhost:3300/api/register';
    axios
      .post(url, this.state)
      .then(res => {
        this.props.history.push('/login');
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div className="registerPage">
        <h2>Register</h2>
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
          <FormGroup row>
            <Label for="password" sm={2}>
              Password
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                value={this.state.department}
                onChange={this.handleChange}
                name="department"
                id="department"
                placeholder="department"
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
            <Button type="submit">Register</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Register;
