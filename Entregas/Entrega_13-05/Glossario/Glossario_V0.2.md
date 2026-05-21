

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

# Glossário de termos

# Gestão de Clínica Psicológica \- PsicoWeb

     
Versão: 0.2  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Equipe do projeto:

- Dylan Ximenes de Abreu Tanna  
- Myllena Rodrigues Oliveira  
- Antonio Calixto  
- Guilherme  
- Eduardo  
- Matheus Silva Pains

## Histórico de Revisões e Alterações

| Data | Versão | Descrição | Autor |
| ----- | :---: | :---: | :---: |
| 01/05/2026 | 0.1 | Definição de: Cobrança para o fluxo de dados financeiros  | Dylan Ximenes |
| 04/05/2026 | 0.2 | Reestruturação do glossário e adição de termos utilizados até o momento | Dylan Ximenes |
|  |  |  |  |
|  |  |  |  |


1. ### Cobrança  \- 

* **Descrição**: Obrigação financeira gerada a partir da realização de uma consulta ou contratação/renovação de plano.   
* **Formato**: \- Boleto, Link de pagamento ou PIX.  
* **Regras de Validação**: Deve estar vinculada a um paciente ativo   
*  **Sinônimos**: Débito, obrigação financeira 

2. ### Plano \- 

* **Descrição**: Modalidade de cobrança antecipada baseada em créditos de consultas previamente faturadas.   
* **Formato**: Boleto, Link de pagamento ou PIX.  
* **Regras de Validação**: Quantidade mínima de 1 crédito.  
* **Sinônimos**: Pacote 

3. ### Consulta \- 

* **Descrição**: Sessão clínica agendada entre paciente e profissional.   
* **Formato**: UUID.   
* **Regras de Validação**: Deve possuir paciente e psicólogo válidos.   
* **Sinônimos**: Sessão.

4. ### CRP \- 

* **Descrição**: Registro profissional do psicólogo emitido pelo conselho regional.   
* **Formato**: Sequência de caracteres (char)  
* **Regras de Validação**: Obrigatório e único.   
  * Validação manual: [https://cadastro.cfp.org.br](https://cadastro.cfp.org.br)  
* **Sinônimos**: Registro profissional.

5. ### Paciente  \- 

* **Descrição**: Pessoa física que recebe atendimento clínico e possui vínculo terapêutico com um psicólogo cadastrado no sistema.   
* **Formato**: UUID \+ dados cadastrais.  
* **Regras de Validação**: Deve possuir nome e ao menos um meio de contato.  
* **Sinônimos**: Pessoa atendida pelo Psicólogo.

6. ### Psicólogo  \- 

* **Descrição**: Profissional responsável pela condução clínica dos pacientes e pela geração de registros clínicos.   
* **Formato**:  UUID \+ CRP.  
* **Regras de Validação**: CRP obrigatório e único.  
* **Sinônimos**: Terapeuta.

7. ### Assistente Administrativo \- 

* **Descrição**: Usuário interno responsável por apoiar processos operacionais mediante permissões definidas.   
* **Formato**: UUID.  
* **Regras de Validação**: Deve estar vinculado a pelo menos um profissional ou clínica.  
* **Sinônimos**: Auxiliar, secretário.

8. ### Clínica \- 

* **Descrição**: Entidade organizacional que pode agrupar múltiplos psicólogos e assistentes sob um mesmo cadastro administrativo.   
* **Formato**:  UUID \+ CNPJ.   
* **Regras de Validação**: CNPJ obrigatório e único.   
* **Sinônimos**: Consultório.

9. ###  Agenda  \- 

* **Descrição**: Estrutura temporal configurada pelo psicólogo contendo horários disponíveis, ocupados ou bloqueados.   
* **Formato**: Relatório Timestamp.  
* **Regras de Validação**: Não pode conter horários sobrepostos.   
* **Sinônimos**: Calendário.

10. ### Prontuário \- 

* **Descrição**: Registro clínico estruturado contendo informações terapêuticas associadas ao histórico do paciente.   
* **Formato**: Documento de texto.  
* **Regras de Validação**: Acesso restrito por permissão.   
* **Sinônimos**: N/A.

11. ### Documento Clínico  \- 

* **Descrição**: Arquivo emitido e armazenado pelo profissional, como laudos, declarações ou relatórios.   
* **Formato**: PDF ou arquivo digital.  
* **Regras de Validação**: Deve possuir autoria e data de emissão, assim como nível de acesso permitido para visualização.  
* **Sinônimos**: laudos, declarações ou relatórios.

12. ### Diário Terapêutico  \- 

* **Descrição**: Espaço onde o paciente pode registrar informações pessoais entre sessões.   
* **Formato**: Texto.  
* **Regras de Validação**: Visibilidade controlada pelo paciente.  
* **Sinônimos**: Arquivo de anotações.

13. ###  Crédito de Consulta \- 

* **Descrição**: Unidade de contagem consumível vinculada a um plano pré-pago.   
* **Formato**: Número Inteiro.  
* **Regras de Validação**: Não pode assumir valor negativo.  
* **Sinônimos**: N/A.

14. ###  Extrato Financeiro  \- 

* **Descrição**: Consolidação cronológica das obrigações financeiras vinculadas a um profissional ou clínica.   
* **Formato**:  Relatório digital.  
* **Regras de Validação**: Deve respeitar filtros aplicados.   
* **Sinônimos**: N/A.

15. ###  Modo Clínica  \- 

* **Descrição**: Configuração do sistema que permite múltiplos psicólogos em um mesmo cadastro.   
* **Formato**: Enum.  
* **Regras de Validação**: Exige pelo menos dois profissionais ativos.   
* **Sinônimos**: N/A.

16. ### Modo Atendimento \- 

* **Descrição**: Configuração do sistema destinada ao uso individual por um único psicólogo.   
* **Formato**: Enum.  
* **Regras de Validação**: Permite apenas um profissional ativo.   
* **Sinônimos**:  N/A.

17. ### Status da Consulta  \- 

* **Descrição**: Estado operacional de uma consulta no ciclo de atendimento.   
* **Formato**:  Enum.  
* **Regras de Validação**: Valores válidos: Agendado, Confirmado, Realizado, Cancelado, Não Compareceu.  
* **Sinônimos**: Estado.


18. ### Status da Cobrança  \- 

* **Descrição**: Estado financeiro de uma obrigação registrada no sistema.   
* **Formato**: Enum.  
* **Regras de Validação**: Valores válidos: Pendente, Pago, Inadimplente, Cancelado.  
* **Sinônimos**: Estado.

Modelos para extensão:

19. ### Termo \- 

* **Descrição**:  
* **Formato**:   
* **Regras de Validação**:  
* **Sinônimos**:

20. ### Termo  \- 

* **Descrição**:  
* **Formato**:   
* **Regras de Validação**:  
* **Sinônimos**:

21. ### Termo  \- 

* **Descrição**:  
* **Formato**:   
* **Regras de Validação**:  
* **Sinônimos**:

22. ### Termo \- 

* **Descrição**:  
* **Formato**:   
* **Regras de Validação**:  
* **Sinônimos**:

23. ### Termo  \- 

* **Descrição**:  
* **Formato**:   
* **Regras de Validação**:  
* **Sinônimos**:

