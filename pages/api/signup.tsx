import pool from '../../utils/db';
import bcrypt from 'bcrypt';

const saltRounds = 10; // Número de salt rounds para o bcrypt

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, email, password } = req.body;

    try {
      // Verificar se o email já existe na tabela
      const emailExistsResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

      if (emailExistsResult.rows.length > 0) {
        // Se o email já existe, retornar um erro
        alert('Já existe um usuário com este email.');
        return res.status(400).json({ error: 'Já existe um usuário com este email.' });
      }

      // Hash da senha usando bcrypt
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const client = await pool.connect();
      const result = await client.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
        [nome, email, hashedPassword]
      );

      const newUser = result.rows[0];

      console.log(newUser);

      client.release();

      res.status(201).json({ user: newUser });
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
