import { MercadoPagoConfig, Preference } from 'mercadopago';
import express from 'express';
import cors from 'cors';

const app = express();

// Habilita CORS para permitir que o frontend (porta 5173) se comunique com este servidor
app.use(cors());
app.use(express.json());

// Configure seu Access Token aqui
const client = new MercadoPagoConfig({ accessToken: 'SEU_ACCESS_TOKEN_AQUI' });

app.post('/create-preference', async (req, res) => {
  try {
    const { title, price } = req.body; // Recebe "Aluno IF" e 40.00, por exemplo

    const preference = new Preference(client);
    
    const result = await preference.create({
      body: {
        items: [
          {
            title: title,
            quantity: 1,
            unit_price: Number(price),
            currency_id: 'BRL',
          },
        ],
        // URLs para onde o usuário volta após pagar ou cancelar
        back_urls: {
          success: 'http://localhost:5173/sucesso',
          failure: 'http://localhost:5173/falha',
          pending: 'http://localhost:5173/pendente',
        },
        auto_return: 'approved',
      },
    });

    // Retorna o link de pagamento gerado pelo Mercado Pago
    res.json({ init_point: result.init_point });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar preferência de pagamento' });
  }
});

app.listen(3001, () => console.log('Servidor rodando na porta 3001'));
