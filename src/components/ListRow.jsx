import React from "react";

const ListRow = ({ el, deleteTodo, checkTodo }) => {
  let { id, description, completed } = el;

  return (
    <tr>
      <td className={`${completed?"text-decoration-line-through":""}`}>{description}</td>
      <td>
        <input
          type="checkbox"
          name="estado"
          checked={completed}
          onChange={() => checkTodo(id)}
        />
      </td>
      <td>
        <button className="btn btn-danger" onClick={()=>{deleteTodo(id)}}>❌</button>
      </td>
    </tr>
  );
};

export default ListRow;
