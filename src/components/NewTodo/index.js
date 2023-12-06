import React, { useState } from 'react';
import PropTypes from 'prop-types';

import "./styles.css";

function NewTodo({ onNewTodo }) {
  const ESCAPE_KEY = 27
  const ENTER_KEY = 13

  const [ value, setValue ] = useState('');

  const erase = () => {
    setValue('');
  };

  const submit = () => {
    if ( onNewTodo ) {
      onNewTodo(value);
      erase();
    }
  };

  const aoMudar = (e) => {
    setValue(e.target.value);
  };

  const aoEnviar = (e) => {
    if (e.which === ENTER_KEY) {
      submit();
    } else if (e.which === ESCAPE_KEY) {
      erase();
    }
  };

  return (
    <input
        className='new-todo'
        placeholder='o que precisa ser feito ?'
        value={value}
        onChange={aoMudar}
        onKeyDown={aoEnviar}
    />
  )
}

NewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
