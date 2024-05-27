import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM users";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q = "INSERT INTO users (`name`, `email`, `phone`) VALUES(?)";
  // errei no IN TO  e nas " para `
  const values = [
    req.body.name,
    req.body.email,
    req.body.phone,
  ];
  db.query(q, [values], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Cadastro realizado com sucesso.");
    // tempo do status errado 0 para 200
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE users SET `name` = ?, `email` = ?, `phone` = ? WHERE `id` = ?";
  const values = [
    req.body.name,
    req.body.email,
    req.body.phone,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);
    return res.status(200).json("Cadastro atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM users WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Cadastro deletado com sucesso.");
  });
};