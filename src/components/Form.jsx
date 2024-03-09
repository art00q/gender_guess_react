import { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Output from "./Output";
import getDataByName from "../network/network.js";

function Form() {
  const inputValue = useRef('');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');

  function onChange(currentName) {
    inputValue.current = currentName;
  }

  async function onSubmit(event) {
    event.preventDefault();

    const _gender = await getDataByName(inputValue.current);

    setName(inputValue.current);
    setGender(_gender);

    inputValue.current = '';
  }

  return (
    <form onSubmit={ onSubmit } action="" className="form">
      <Input onChange={ onChange } />
      <Button />
      <Output name={ name } gender={ gender } />
    </form>
  )
}

export default Form;