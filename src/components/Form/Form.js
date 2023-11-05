import { nanoid } from 'nanoid';
import { useState } from 'react';
import { FormWraper, Title, Input } from './Form.styles';

export const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const id = nanoid();

  const handleChange = evt => {
    if (evt.currentTarget.name === 'name') {
      setName(evt.currentTarget.value);
    }
    if (evt.currentTarget.name === 'number') {
      setNumber(evt.currentTarget.value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name: name, number: number });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <Title>Phonebook</Title>
      <FormWraper>
        <form onSubmit={handleSubmit}>
          <h2>Name</h2>
          <input
            id={id}
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            required
          />
          <h2>Number</h2>
          <Input>
            <input
              id={id}
              type="tel"
              name="number"
              onChange={handleChange}
              value={number}
              required
            />
            <button type="submit">Add contact</button>
          </Input>
        </form>
      </FormWraper>
    </>
  );
};
