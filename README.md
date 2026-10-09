# API de Eventos com GraphQL

Este projeto é uma API em Node.js usando Express e GraphQL para consultar eventos, palestrantes e locais de realização.

## Tecnologias

- Node.js
- Express
- GraphQL
- Express GraphQL

## Estrutura do projeto

- `server.js` — inicia o servidor Express e configura a rota GraphQL
- `schema.js` — define a schema e os tipos GraphQL
- `data.js` — contém os dados mockados da aplicação
- `package.json` — configurações do projeto e dependências

## Funcionalidades

A API permite consultar:

- todos os eventos
- um evento específico por ID
- os palestrantes relacionados a cada evento
- o local de realização de cada evento

## Como executar

1. Instale as dependências:

```bash
npm ci
```

2. Inicie o servidor:

```bash
node server.js
```

## Testes automatizados

Execute os testes localmente com:

```bash
npm test
```

O GitHub Actions executa os testes automaticamente em pushes para `main`,
`develop`, `feature/*`, `release/*` e `hotfix/*`, e em pull requests destinados
a `main` ou `develop`. A configuração está em
`.github/workflows/tests.yml`.

3. A API ficará disponível em:

```text
http://localhost:4000/graphql
```

A interface GraphiQL também estará habilitada para testar as queries no navegador.

## Exemplos de consultas

### Listar todos os eventos

```graphql
query {
  events {
    id
    name
    date
    speakers {
      id
      name
      expertise
    }
    location {
      id
      name
      city
    }
  }
}
```

### Buscar um evento por ID

```graphql
query {
  event(id: "1") {
    id
    name
    date
    speakers {
      name
      expertise
    }
    location {
      name
      city
    }
  }
}
```

## Observações

- Os dados são estáticos e estão em `data.js`.
- Este projeto foi criado como exemplo de uso de GraphQL em Node.js.
- A aplicação usa o valor `graphiql: true`, permitindo testar as consultas diretamente via interface web.

## Licença

ISC
