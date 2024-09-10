import pool from '../../utils/db';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const client = await pool.connect();
      const result = await client.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
      );

      const user = result.rows[0];

      if (user) {
        // Verificar a senha hasheada usando bcrypt
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          res.status(200).json({ message: 'Login bem-sucedido', user });
        } else {
          res.status(401).json({ error: 'Credenciais inválidas' });
          alert('Email ou senha inválidos');
        }
      } else {
        alert('Email ou senha inválidos');
        res.status(401).json({ error: 'Credenciais inválidas' });
      }

      client.release();
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
      alert('Erro interno do servidor');

    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
