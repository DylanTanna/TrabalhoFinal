
# Matriz de Rastreabilidade de Requisitos

## Objetivo

Este documento apresenta a matriz de rastreabilidade dos requisitos do sistema, relacionando os requisitos funcionais e não funcionais às suas respectivas origens durante o processo de levantamento e análise.

A rastreabilidade auxilia na validação dos requisitos, no entendimento das regras de negócio e na manutenção da coerência entre os documentos produzidos ao longo do projeto.

---

# Legenda das Origens

| Sigla            | Descrição                                 |
| ---------------- | ------------------------------------------- |
| ENT              | Entrevistas realizadas                      |
| QUE              | Questionários aplicados                    |
| SA               | Sistema análogo utilizado como referência |
| UC               | Casos de Uso Essencial                      |
| LGPD             | Lei Geral de Proteção de Dados            |
| ISO/IEC 25010    | Modelo de qualidade de software             |
| RBAC             | Controle de acesso baseado em papéis       |
| Documento Visão | Documento de visão organizacional          |

---

# Requisitos Funcionais

| ID    | Requisito                                                                         | Origem           |
| ----- | --------------------------------------------------------------------------------- | ---------------- |
| RF001 | O sistema deve permitir o cadastro de pacientes.                                  | QUE, SA          |
| RF002 | O sistema deve permitir gerenciamento do status do paciente.                      | QUE, ENT         |
| RF003 | O sistema deve permitir configuração de agenda do profissional.                 | SA               |
| RF004 | O sistema deve permitir agendamento de consultas.                                 | QUE, ENT, SA     |
| RF005 | O sistema deve registrar faltas e cancelamentos de consultas.                     | QUE, ENT         |
| RF006 | O sistema deve permitir criação e gerenciamento de prontuários eletrônicos.   | QUE, SA          |
| RF007 | O sistema deve restringir acesso ao prontuário conforme permissões definidas.   | QUE, RBAC        |
| RF008 | O sistema deve permitir gerenciamento de documentos clínicos.                    | QUE, ENT         |
| RF009 | O sistema deve enviar confirmação de consultas.                                 | QUE, SA          |
| RF010 | O sistema deve registrar obrigações financeiras relacionadas aos atendimentos.  | SA               |
| RF011 | O sistema deve gerar termo de consentimento.                                      | LGPD             |
| RF012 | O sistema deve registrar consentimento informado do paciente.                     | LGPD             |
| RF013 | O sistema deve permitir cadastro institucional da clínica.                       | Documento Visão |
| RF014 | O sistema deve validar informações institucionais da clínica.                  | RF013            |
| RF015 | O sistema deve permitir configuração de vínculo entre psicólogo e assistente. | UC               |
| RF016 | O sistema deve permitir consulta ao histórico financeiro.                        | SA               |
| RF017 | O sistema deve permitir consulta consolidada das informações do paciente.       | ISO/IEC 25010    |
| RF018 | O sistema deve permitir cadastro de colaboradores.                                | UC               |
| RF019 | O sistema deve permitir ativação e desativação de colaboradores.              | SA               |
| RF020 | O sistema deve permitir gerenciamento de permissões organizacionais.             | RBAC             |
| RF021 | O sistema deve permitir inicialização do atendimento clínico.                  | UC               |
| RF022 | O sistema deve atualizar automaticamente o status da consulta.                    | SA               |
| RF023 | O sistema deve permitir emissão documental durante atendimento.                  | UC               |
| RF024 | O sistema deve permitir anexação de documentos ao prontuário.                  | ENT, SA          |

---

# Requisitos Não Funcionais

| ID     | Requisito                                                                     | Origem              |
| ------ | ----------------------------------------------------------------------------- | ------------------- |
| RNF001 | O sistema deve garantir segurança e confidencialidade dos dados armazenados. | LGPD, ENT           |
| RNF002 | O sistema deve estar em conformidade com a LGPD.                              | LGPD                |
| RNF003 | O sistema deve possuir autenticação e controle de acesso.                   | RBAC, LGPD          |
| RNF004 | O sistema deve possuir desempenho adequado durante utilização.              | ISO/IEC 25010       |
| RNF005 | O sistema deve possuir alta disponibilidade.                                  | SA                  |
| RNF006 | O sistema deve possuir interface simples e intuitiva.                         | ENT, QUE            |
| RNF007 | O sistema deve garantir integridade dos dados armazenados.                    | ISO/IEC 25010       |
| RNF008 | O sistema deve manter auditoria e rastreabilidade das ações realizadas.     | LGPD, ISO/IEC 25010 |
| RNF009 | O sistema deve suportar crescimento sem perda significativa de desempenho.    | ISO/IEC 25010       |
| RNF010 | O sistema deve utilizar comunicação segura entre os usuários e o sistema.  | LGPD                |
| RNF011 | O sistema deve possuir persistência e backup de dados.                       | ISO/IEC 25010       |
| RNF012 | O sistema deve restringir notificações fora dos horários configurados.     | ENT                 |

---

# Considerações Finais

Os requisitos apresentados neste documento foram identificados a partir de entrevistas, questionários, análise de sistemas semelhantes, estudos das regras de negócio, documentação organizacional e elaboração dos casos de uso essenciais.

A matriz de rastreabilidade tem como objetivo manter a relação entre os requisitos e suas respectivas fontes de origem, auxiliando na validação, evolução e manutenção do sistema durante o desenvolvimento do projeto.
