import React, { useState } from 'react';

const Form = ({ field, onSubmit, action }) => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>

        {field.map((input) => (
          <div key={input.name}>
            <label htmlFor={input.name}>{input.label}</label>
            <input
              type={input.type}
              name={input.name}
              id={input.name}
              defaultValue={input.defaultValue || ''}
              onChange={handleChange}
              required={input.required}
              accept="image/*"
            />
          </div>
        ))}
        <button type="submit" className="btn">{action}</button>
      </form>
    </div>
  );
};

Form.propTypes = {
    field: PropTypes.arrayOf(PropTypes.object).isRequired,
    onSubmit: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
};

export default Form;
