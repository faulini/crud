import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import	"./style.css";

const Grid = ({ users, setUsers, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };

const handleDelete = async (id) => {
  await axios
    .delete("http://localhost:3000/" + id)
    .then(({ data }) => {
      const newArray = users.filter((user) => user.id !== id);
      setUsers(newArray);
      toast.success(data);
    })
    .catch(({ data }) => toast.error(data));
    setOnEdit(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td class="item">
              <FaEdit onClick={() => handleEdit(item)} class="edit"/>
            </td>
            <td class="item">
              <FaTrash onClick={() => handleDelete(item.id)} class="edit"/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;