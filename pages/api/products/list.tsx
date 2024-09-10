// api/products.js
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../../utils/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = 1, pageSize = 9 } = req.query;
  const offset = (page - 1) * pageSize;

  try {
    // Obtenha os produtos da página atual
    const result = await pool.query(
      'SELECT * FROM products ORDER BY id OFFSET $1 LIMIT $2',
      [offset, pageSize]
    );

    const products = result.rows;

    // Inclua informações de paginação na resposta
    res.status(200).json({
      products,
      currentPage: parseInt(page, 10),
    });
  } catch (error) {
    console.error('Erro ao obter produtos:', error);
    res.status(500).json({ error: 'Erro interno do servidor', details: error.message });
  }
}
