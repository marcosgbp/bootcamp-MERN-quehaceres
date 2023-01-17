import React from "react";
import ListRow from "./ListRow";

const List = ({ data, deleteTodo, checkTodo }) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr className="text-center">
              <td colSpan="3">Sin Datos</td>
            </tr>
          ) : (
            data.map((el) => (
              <ListRow
                key={el.id}
                el={el}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
