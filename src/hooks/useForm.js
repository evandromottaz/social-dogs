import React from 'react';

const types = {
  email: {
    regex:
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    message: 'Preencha um email válido',
  },
};

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    if (type === false) return true; // se tiver vazio == false, não valide
    if (value.lenght === 0) {
      // se for 0, a pessoa clicou mas não digitou nada
      setError('Preencha um valor');
      return false;
    } else if (types[type] && types[type].regex.test(value)) {
      // types[type] == types.email
      setError(types[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value), // onBlur, quando user clica no formulário e sai
  };
};

export default useForm;
