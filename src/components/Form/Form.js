import { nanoid } from 'nanoid';
import { Component } from 'react';
import { FormWraper, Title, Input } from './Form.styles';

export class Form extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  id = nanoid();

  handleChange = evt => {
    this.setState({ [evt.currentTarget.name]: evt.currentTarget.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <>
        <Title>Phonebook</Title>
        <FormWraper>
          <form onSubmit={this.handleSubmit}>
            <h2>Name</h2>
            <input
              id={this.id}
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              required
            />
            <h2>Number</h2>
            <Input>
              <input
                id={this.id}
                type="tel"
                name="number"
                onChange={this.handleChange}
                value={this.state.number}
                required
              />
              <button type="submit">Add contact</button>
            </Input>
          </form>
        </FormWraper>
      </>
    );
  }
}
