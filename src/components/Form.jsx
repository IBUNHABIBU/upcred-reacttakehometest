import React from 'react';

const Form = ({field, onSubmit, action}) => {return(
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
)};

export default Form;
