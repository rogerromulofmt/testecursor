# 📄 Certidão em Lote - PJe+R

## Funcionalidade

Esta funcionalidade permite adicionar certidões em lote a múltiplos processos do PJe de forma automatizada.

## Como Usar

### 1. Acessar a Interface
- Abra o arquivo `certidao-lote.html` em seu navegador
- Ou integre a interface na extensão PJe+R

### 2. Preencher os Dados
- **Números dos Processos**: Insira um número de processo por linha
- **Modelo de Certidão**: Digite o tipo/modelo da certidão (ex: "CERTIDÃO", "CERTIDÃO DE TRÂNSITO EM JULGADO")
- **Conteúdo**: Digite o conteúdo da certidão (HTML é permitido)

### 3. Executar
- Clique em "Adicionar Certidão em Lote"
- Confirme a ação
- Aguarde o processamento

## Exemplo de Uso

### Entrada de Processos:
```
0001234-12.2023.8.26.0100
0005678-34.2023.8.26.0100
0009012-56.2023.8.26.0100
```

### Modelo:
```
CERTIDÃO DE TRÂNSITO EM JULGADO
```

### Conteúdo:
```html
<p>Certifico que o processo encontra-se em trânsito em julgado.</p>
<p>Esta certidão foi gerada automaticamente pelo sistema PJe+R.</p>
```

## Características Técnicas

### ✅ Funcionalidades Implementadas
- ✅ Adição de certidão em lote
- ✅ Interface amigável
- ✅ Barra de progresso
- ✅ Log de resultados
- ✅ Tratamento de erros
- ✅ Confirmação antes da execução
- ✅ Intervalo entre requisições (1 segundo)

### ⚠️ Limitações
- ❌ Não assina automaticamente (apenas minuta)
- ❌ Requer que o usuário esteja logado no PJe
- ❌ Depende da disponibilidade da API do PJe

### 🔧 Configurações
- **Intervalo entre requisições**: 1 segundo (configurável)
- **Timeout de requisição**: Padrão do navegador
- **Tipo de documento**: 7 (Certidão)

## Estrutura do Código

### Arquivos Principais
- `pjecomm.js`: Handler de mensagens e função de adição de certidão
- `page-context.js`: Auxiliador de certidão
- `certidao-lote.html`: Interface do usuário

### Fluxo de Execução
1. Interface envia mensagem para o contexto da página
2. Auxiliador de certidão processa a mensagem
3. Handler de certidão executa as requisições
4. Resultados são retornados para a interface

### Mensagens do Sistema
```javascript
// Mensagem de entrada
{
  origem: 'PJEMaisR',
  tipo: 'certidao',
  mensagem: {
    acao: 'incluirEmLote',
    conteudo: {
      processos: ['0001234-12.2023.8.26.0100'],
      modeloCertidao: 'CERTIDÃO',
      conteudoCertidao: '<p>Conteúdo da certidão</p>',
      notificar: true
    }
  }
}

// Mensagem de resposta
{
  origem: 'PJEMaisR',
  tipo: 'certidoesResposta',
  mensagem: {
    acao: 'incluirEmLote',
    conteudo: {
      total: 1,
      sucessos: 1,
      falhas: 0,
      resultados: [
        { processo: '0001234-12.2023.8.26.0100', status: 'sucesso' }
      ]
    }
  }
}
```

## Troubleshooting

### Problemas Comuns

1. **Erro de CORS**
   - Verifique se está no domínio correto do PJe
   - Certifique-se de que a extensão está ativa

2. **Processo não encontrado**
   - Verifique se o número do processo está correto
   - Confirme se o processo existe no sistema

3. **Erro de permissão**
   - Verifique se o usuário tem permissão para adicionar certidões
   - Confirme se está logado no PJe

4. **Timeout de requisição**
   - Aumente o intervalo entre requisições
   - Verifique a conexão com a internet

### Logs de Debug
Os logs são exibidos no console do navegador com o prefixo `[PJE+R]`.

## Segurança

- ✅ Confirmação antes da execução
- ✅ Validação de entrada
- ✅ Tratamento de erros
- ✅ Log de operações
- ⚠️ Não valida permissões do usuário
- ⚠️ Não verifica se o processo existe

## Próximas Melhorias

- [ ] Validação de permissões
- [ ] Verificação de existência do processo
- [ ] Assinatura automática
- [ ] Modelos pré-definidos
- [ ] Exportação de resultados
- [ ] Retry automático em caso de falha
- [ ] Interface integrada na extensão

## Suporte

Para dúvidas ou problemas, consulte a documentação da extensão PJe+R ou entre em contato com a equipe de desenvolvimento.

