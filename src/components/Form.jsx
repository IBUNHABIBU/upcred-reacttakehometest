import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({
  field, onSubmit, action, message, errors,
}) => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };
  return (
    <div className="form">
      { message && <h6 className="msg">{message}</h6> }
      {errors.length ? (
        <div className="error">
          {(!Array.isArray(errors)) ? [(<h4 key={errors}>{errors}</h4>)]

            : [
              (
                <>
                  <h4>Oops! your form could not be saved</h4>
                  <p>Please correct the following errors:</p>

                  <ul>
                    {errors.map((error) => (
                      <li key={error}>{error}</li>
                    ))}
                  </ul>
                </>
              ),

            ]}
        </div>
      ) : null }
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
  field: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      defaultValue: PropTypes.string,
      required: PropTypes.bool,
    }),
  ).isRequired,
  onSubmit: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired,
};

export default Form;
