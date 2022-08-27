import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:4000/produtos', (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        listaDeProdutos: [
          {
            id: 1,
            nome: 'Ração premium filhote',
            descricao: 'Descrição do produto',
            valor: '150',
            categoria: 'Alimentação',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1630012033940.jpg',
          },
          {
            id: 2,
            nome: 'Ração premium adulto',
            descricao: 'Descrição do produto',
            valor: '180',
            categoria: 'Alimentação',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1630012529775.jpg',
          },
          {
            id: 3,
            nome: 'Biscoito Golden Cookie para Cães Adultos de Raças Pequenas 350g',
            descricao: 'Descrição do produto',
            valor: '20',
            categoria: 'Alimentação',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1628787231397.jpg',
          },
          {
            id: 4,
            nome: 'Snack Dog Licious Dental Fresh - 65g',
            descricao: 'Descrição do produto',
            valor: '13',
            categoria: 'Alimentação',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1601392853535.jpg',
          },
          {
            id: 5,
            nome: 'Ração para gatos',
            descricao: 'Descrição do produto',
            valor: '25',
            categoria: 'Alimentação',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1621264740944.jpg',
          },
          {
            id: 6,
            nome: 'Ração Premier para Gatos Castrados de 6 meses a 6 anos Sabor Frango',
            descricao: 'Descrição do produto',
            valor: '35',
            categoria: 'Alimentação',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1646142863648.jpg',
          },
          {
            id: 7,
            nome: 'Petisco Whiskas Temptations Antibola de Pelo para Gatos Adultos',
            descricao: 'Descrição do produto',
            valor: '125',
            categoria: 'Alimentação',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1599136729044.jpg',
          },
          {
            id: 8,
            nome: 'Snack Purina Dentalife para Gatos Sabor Frango 40g',
            descricao: 'Descrição do produto',
            valor: '13',
            categoria: 'Alimentação',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1627399332418.jpg',
          },
          {
            id: 9,
            nome: 'Antipulgas Simparic 20 mg para cães 5,1 a 10 kg - Zoetis',
            descricao: 'Descrição do produto',
            valor: '105',
            categoria: 'Saúde',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1502308227115.jpg',
          },
          {
            id: 10,
            nome: 'Antipulgas e Carrapatos Bravecto MSD para Cães de 4,5 a 10 kg',
            descricao: 'Descrição do produto',
            valor: '213',
            categoria: 'Saúde',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1575296646776.jpg',
          },
          {
            id: 11,
            nome: 'Anti Pulgas Bravecto Plus para Gatos de Até 2,5kg',
            descricao: 'Descrição do produto',
            valor: '186',
            categoria: 'Saúde',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1625081555143.jpg',
          },
          {
            id: 12,
            nome: 'Vermífugo Milbemax para Gatos 16/40mg',
            descricao: 'Descrição do produto',
            valor: '50',
            categoria: 'Saúde',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1572360557501.jpg',
          },
          {
            id: 13,
            nome: 'Comedouro NF Pet Pesado em Alumínio',
            descricao: 'Descrição do produto',
            valor: '15',
            categoria: 'Acessórios',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1578691259266.jpg',
          },
          {
            id: 14,
            nome: 'Comedouro Chalesco cães e gatos Duplo Inox',
            descricao: 'Descrição do produto',
            valor: '53',
            categoria: 'Acessórios',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1457993730827.jpg',
          },
          {
            id: 15,
            nome: 'Comedouro Chalesco Automático Disco',
            descricao: 'Descrição do produto',
            valor: '399',
            categoria: 'Acessórios',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1600099694953.jpg',
          },
          {
            id: 16,
            nome: 'Porta Ração Furacão Pet para Cães e Gatos Preto 6kg',
            descricao: 'Descrição do produto',
            valor: '76',
            categoria: 'Acessórios',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1511355953282.jpg',
          },
          {
            id: 17,
            nome: 'Guia Retrátil Chalesco para Cães - Cores Sortidas',
            descricao: 'Descrição do produto',
            valor: '40',
            categoria: 'Acessórios',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1623179283813.jpg',
          },
          {
            id: 18,
            nome: 'Coleira Zee.Dog Gotham Preta para Cães',
            descricao: 'Descrição do produto',
            valor: '79',
            categoria: 'Acessórios',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1633711861682.jpg',
          },
          {
            id: 19,
            nome: 'Coleira Zee.Cat Gotham Preta para Gatos',
            descricao: 'Descrição do produto',
            valor: '60',
            categoria: 'Acessórios',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1633713673982.jpg',
          },
          {
            id: 20,
            nome: 'Coleira Zee.Cat Mahalo para Gatos',
            descricao: 'Descrição do produto',
            valor: '59',
            categoria: 'Acessórios',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1633713490592.jpg',
          },
          {
            id: 21,
            nome: 'Protetor Solar Docg Make Me Bluish para Cães e Gatos 30g',
            descricao: 'Descrição do produto',
            valor: '53',
            categoria: 'Saúde',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1595855770082.jpg',
          },
          {
            id: 22,
            nome: 'Protetor Solar Docg Make Me Pinky para Cães e Gatos 30g',
            descricao: 'Descrição do produto',
            valor: '53',
            categoria: 'Saúde',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1595855907658.jpg',
          },
          {
            id: 23,
            nome: 'Cama Zee.Dog Skull Zee.Bed Preta para Cães',
            descricao: 'Descrição do produto',
            valor: '500',
            categoria: 'Acessórios',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1632948750925.jpg',
          },
          {
            id: 24,
            nome: 'Cama Zee.Cat Terracota para Gatos',
            descricao: 'Descrição do produto',
            valor: '400',
            categoria: 'Acessórios',
            estoque: 20,
            imagem_produto:
              'https://static.petz.com.br/fotos/1637938528052.jpg',
          },
        ],
      }),
    )
  }),
]
