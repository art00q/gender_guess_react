function Input({ onChange }) {
  return (
    <input onChange={ (e) => {
      const inputValue = e.target.value;

      onChange(inputValue);
    } } type="text" className="form__submit" />
  )
}

export default Input;