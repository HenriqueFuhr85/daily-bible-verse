# Daily Bible Verse

A small project to share a Bible verse every day.

Um site simples que mostra um versículo bíblico diferente a cada dia. Feito só com HTML, CSS e JavaScript — sem instalação, sem dependências.

## Como funciona

- Cada dia do calendário corresponde a um versículo da lista em [verses.js](verses.js). Todas as pessoas veem o mesmo versículo no mesmo dia, e ele muda à meia-noite.
- As setas ← → navegam pelos dias anteriores e seguintes.
- O botão **Compartilhar** abre o menu de compartilhamento do celular ou copia o versículo para a área de transferência no computador.
- Tem tema claro e escuro automático, de acordo com o sistema.

## Rodando localmente

Basta abrir o arquivo `index.html` no navegador (dois cliques nele).

## Publicando no GitHub Pages

1. Envie o projeto para o GitHub (`git push`).
2. No repositório, vá em **Settings → Pages**.
3. Em **Source**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e clique em **Save**.
4. Em alguns minutos o site estará em `https://SEU-USUARIO.github.io/daily-bible-verse/`.

## Adicionando versículos

Abra [verses.js](verses.js) e acrescente uma linha no final da lista:

```js
{ text: "Texto do versículo.", ref: "Livro 1:1" },
```

Os textos são baseados na tradução de João Ferreira de Almeida; vale conferir com a sua Bíblia de preferência.

## Status

Primeira versão funcionando — este é meu primeiro projeto no GitHub.
