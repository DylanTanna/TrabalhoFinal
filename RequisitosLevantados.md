# Requisitos Levantados

## Como atualizar o arquivo

Antes de sair editando, você precisa garantir que está com a versão mais atual do arquivo.
Se não fizer isso, pode sobrescrever o que outra pessoa já fez.

### Passo a passo com Git

1. Abra o terminal na pasta do projeto
2. Puxe as alterações mais recentes:

   git pull origin main
3. Faça suas alterações no arquivo `RequisitosLevantados.md`
4. Salve o arquivo
5. Envie suas alterações:

   git add .
   git commit -m "Adicionando requisitos - [nome da funcionalidade]"
   git push origin main

---

### Padrão obrigatório

* Começar com código (RF01, RF02...) para requisitos funcionais e código (RNF01, RNF02...) para requisitos não funcionais
* Sempre iniciar com: **"O sistema deve..."**
* Ser claro e direto

---

### Requisitos Funcionais

RF01 - O sistema deve permitir o agendamento de consultas.

RF02 - O sistema deve permitir o acesso à agenda dos profissionais, podendo ser restrito ou totalmente transparente conforme configuração.

RF03 - O sistema deve permitir o agendamento de consultas 24 horas por dia, independentemente do horário de atendimento.

RF04 - O sistema deve enviar confirmação de consultas por e-mail.

RF05 - O sistema deve permitir o registro de informações iniciais do paciente antes da consulta.

RF06 - O sistema deve disponibilizar formulário de pré-atendimento para preenchimento online.

RF07 - O sistema deve armazenar os dados do pré-atendimento para consulta posterior pelo psicólogo.

RF08 - O sistema deve permitir a criação de questionários personalizados pelo psicólogo.

RF09 - O sistema deve permitir que pacientes respondam questionários antes da consulta.

RF10 - O sistema deve associar as respostas dos questionários ao prontuário do paciente.

RF11 - O sistema deve permitir que o psicólogo visualize as respostas dos questionários antes do atendimento.

RF12 - O sistema deve fazer a leitura de documentos em formato digital.

RF13 - O sistema deve permitir o envio e o armazenamento de documentos digitais.

RF14 - O sistema deve realizar o backup automático de documentos e dados armazenados.

RF15 - O sistema deve permitir a recuperação de dados a partir de cópias de segurança em caso de perda ou falha.

RF16 - O sistema deve permitir a realização de atendimentos remotos (consultas online) por vídeo, áudio ou chat, com agendamento, confirmação ao paciente e registro da sessão no prontuário.

RF17 - O sistema deve possibilitar comunicação segura entre profissional e paciente, incluindo envio e armazenamento de documentos digitais, com criptografia e medidas de proteção em conformidade com a LGPD.

RF18 - O sistema deve permitir que cada profissional configure disponibilidade específica para atendimentos remotos, incluindo tipos de sessão (vídeo/áudio/chat) e horários de atendimento.

RF19 - O sistema deve oferecer sala de espera virtual e funcionalidades para gerenciamento de chamadas (entrada/saída, tempo de espera, priorização) durante atendimentos remotos.

RF20 - O sistema deve registrar início, término e duração de cada consulta online e disponibilizar esses registros ao profissional no prontuário.

RF21 - O sistema deve permitir gravação de sessões online mediante consentimento do paciente, armazenando as gravações de forma criptografada quando ativadas.

RF22 - O sistema deve permitir troca de mensagens assíncronas entre profissional e paciente com histórico persistente vinculado ao prontuário.

RF23 - O sistema deve enviar notificações em tempo real (push/e-mail/SMS) para novas mensagens, alterações de agendamento e comunicados importantes.

RF24 - O sistema deve permitir upload e download de documentos por pacientes e profissionais, associando metadados (tipo, data, autor) ao prontuário.

RF25 - O sistema deve validar formatos e tamanhos de arquivos aceitos e oferecer possibilidade de assinatura eletrônica simples para documentos quando aplicável.

RF26 - O sistema deve manter logs de acesso e de ações relevantes (upload, download, acesso a prontuário) para auditoria, com retenção configurável.

RF27 - O sistema deve suportar processos de exclusão, portabilidade e anonimização de dados pessoais conforme solicitações do titular, em conformidade com a LGPD.

RF28 -

RF29 -

RF30 -


### Requisitos Não Funcionais


RNF01 - O sistema deve garantir a confidencialidade dos dados dos usuários.

RNF02 - O sistema deve impedir o acesso não autorizado aos dados dos usuários.

RNF03 - O sistema deve armazenar dados sensíveis de forma segura, em conformidade com a LGPD.

RNF04 - O sistema deve criptografar as senhas dos usuários.

RNF05 - O sistema deve utilizar criptografia para armazenamento de dados sensíveis.

RNF06 - O sistema deve utilizar protocolo seguro (HTTPS) para comunicação de dados.

RNF07 - O sistema deve permitir autenticação de usuários por meio de login e senha.

RNF08 - O sistema deve implementar controle de acesso baseado em níveis de permissão (ex: administrador, psicólogo e paciente).

RNF09 - O sistema deve restringir o acesso a prontuários apenas a usuários autorizados.

RNF10 -

RNF11 -

RNF12 -

RNF13 -

RNF14 -

RNF15 -

RNF16 -

RNF17 -

RNF18 -

RNF19 -

RNF20 -

RNF21 -

RNF22 -

RNF23 -

RNF24 -

RNF25 -

RNF26 -

RNF27 -

RNF28 -

RNF29 -

RNF30 -

---
