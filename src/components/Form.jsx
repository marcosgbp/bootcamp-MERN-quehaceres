import React, { useState } from "react";

const initialForm = {
  id: null,
  description: "",
  completed: false,
};
const Form = ({ addTodo }) => {
  const [form, setForm] = useState(initialForm);
  const handlerChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!form.description) {
      alert("Debes de completar el input antes de enviar!!!");
      return;
    }
    addTodo(form);
    setForm(initialForm);
  };
  return (
    <div>
      <form onSubmit={handlerSubmit} >
        <div className="d-flex">
          <input
            type="text"
            name="description"
            className="form-control col-10"
            placeholder="Que vas a hacer?"
            autoComplete="off"
            onChange={handlerChange}
            value={form.description}
          />
          <input type="submit" value="Add" className="btn btn-success col" />
        </div>
      </form>
    </div>
  );
};

export default Form;
