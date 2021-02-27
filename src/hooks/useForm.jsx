import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({});

  const handleChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return { values, setValues, handleChange };
};

export default useForm;
