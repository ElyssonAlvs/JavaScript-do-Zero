**Variáveis, Constantes e Tipos Primitivos em JavaScript**

---

### Variáveis

As variáveis em JavaScript são contêineres que armazenam dados. Elas são declaradas usando as palavras-chave `var`, `let`, ou `const`. O uso de `let` e `const` é mais comum atualmente, pois proporcionam escopo mais controlado.

Exemplo de declaração:

```javascript
let nome = "João";
```

- **let**: Permite reatribuição de valores.
- **const**: Mantém o valor constante após atribuição.

### Constantes

Constantes são similares a variáveis, mas uma vez que um valor é atribuído a uma constante usando a palavra-chave `const`, esse valor não pode ser alterado.

Exemplo:

```javascript
const PI = 3.14;
```

- **const**: Usada para declarar constantes.

### Tipos Primitivos

JavaScript possui cinco tipos primitivos:

1. **String**: Sequência de caracteres. Exemplo: `"Olá, Mundo!"`.
2. **Number**: Números inteiros ou de ponto flutuante. Exemplo: `42` ou `3.14`.
3. **Boolean**: Representa verdadeiro ou falso. Exemplo: `true` ou `false`.
4. **Undefined**: Indica que uma variável foi declarada, mas não possui valor atribuído.
5. **Null**: Indica a ausência de valor intencional.

Exemplos:

```javascript
let texto = "Olá, Mundo!";
let numero = 42;
let condicao = true;
let indefinido = undefined;
let nulo = null;
```

- **typeof**: Operador para verificar o tipo de uma variável.
