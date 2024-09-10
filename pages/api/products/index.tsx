import pool from '../../../utils/db';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, price } = req.body;
    let photo = req.file;
    if (photo == null || photo == undefined){
      photo = "sem foto"
    }

    try {
      const client = await pool.connect();
      const result = await client.query(
        'INSERT INTO products (name, price, photo) VALUES ($1, $2, $3) RETURNING *',
        [name, price, photo]
      );

      const newProduct = result.rows[0];

      console.log(newProduct);

      client.release();

      res.status(201).json({ product: newProduct });
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
