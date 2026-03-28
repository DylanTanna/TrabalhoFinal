---

# Requisitos do Sistema

---

## Requisitos Funcionais (RF)

### 1. Gestão de Pacientes

RF01 - O sistema deve permitir o cadastro de pacientes.
RF02 - O sistema deve permitir a visualização, edição e exclusão de dados dos pacientes.
RF03 - O sistema deve permitir o registro de informações iniciais do paciente antes da consulta.
RF04 - O sistema deve disponibilizar formulário de pré-atendimento para preenchimento online.
RF05 - O sistema deve armazenar os dados do pré-atendimento para consulta posterior pelo profissional.

---

### 2. Agenda e Consultas

RF06 - O sistema deve permitir o agendamento de consultas.
RF07 - O sistema deve permitir o acesso à agenda dos profissionais conforme nível de permissão.
RF08 - O sistema deve permitir agendamentos 24 horas por dia, independentemente do horário de atendimento.
RF09 - O sistema deve permitir que profissionais configurem seus horários de atendimento.

---

### 3. Notificações e Comunicação

RF10 - O sistema deve enviar confirmações de consultas por e-mail.
RF11 - O sistema deve enviar lembretes automáticos de consultas.
RF12 - O sistema deve permitir confirmação automática de consultas.
RF13 - O sistema deve permitir comunicação entre paciente e profissional.
RF14 - O sistema deve enviar notificações em tempo real sobre mensagens e alterações de agendamento.

---

### 4. Prontuário e Dados Clínicos

RF15 - O sistema deve permitir a criação, edição e consulta de prontuários eletrônicos.
RF16 - O sistema deve armazenar o histórico clínico do paciente.
RF17 - O sistema deve associar questionários e respostas ao prontuário do paciente.
RF18 - O sistema deve permitir que o profissional visualize informações antes da consulta.

---

### 5. Questionários e Avaliação

RF19 - O sistema deve permitir a criação de questionários personalizados.
RF20 - O sistema deve permitir que pacientes respondam questionários antes da consulta.

---

### 6. Documentos

RF21 - O sistema deve permitir envio e armazenamento de documentos digitais.
RF22 - O sistema deve permitir upload e download de documentos com registro de metadados.
RF23 - O sistema deve validar formatos e tamanhos de arquivos.

---

### 7. Atendimentos Online

RF24 - O sistema deve permitir atendimentos remotos por vídeo, áudio ou chat.
RF25 - O sistema deve permitir configuração de disponibilidade para atendimentos online.
RF26 - O sistema deve disponibilizar sala de espera virtual.
RF27 - O sistema deve registrar dados das consultas online (início, fim e duração).
RF28 - O sistema deve permitir troca de mensagens assíncronas com histórico.

---

### 8. Segurança e LGPD

RF29 - O sistema deve permitir exclusão, anonimização e portabilidade de dados pessoais.
RF30 - O sistema deve manter logs de acesso e ações para auditoria.

---

### 9. Financeiro

RF31 - O sistema deve registrar transações financeiras relacionadas a consultas.

---

### 10. Funcionalidades Inteligentes

RF32 - O sistema deve sugerir preenchimentos automáticos para auxiliar profissionais.
RF33 - O sistema deve permitir classificação inicial de risco com base em dados informados.

---

## Requisitos Não Funcionais (RNF)

### 1. Segurança

RNF01 - O sistema deve garantir a confidencialidade dos dados.
RNF02 - O sistema deve impedir acessos não autorizados.
RNF03 - O sistema deve armazenar dados sensíveis conforme a LGPD.
RNF04 - O sistema deve criptografar senhas.
RNF05 - O sistema deve utilizar criptografia em dados sensíveis.
RNF06 - O sistema deve utilizar HTTPS para comunicação.

---

### 2. Controle de Acesso

RNF07 - O sistema deve possuir autenticação por login e senha.
RNF08 - O sistema deve implementar níveis de permissão.
RNF09 - O sistema deve restringir acesso a prontuários.

---

### 3. Desempenho e Escalabilidade

RNF10 - O sistema deve estar disponível 24/7.
RNF11 - O sistema deve responder requisições em até 2 segundos.
RNF12 - O sistema deve suportar múltiplos usuários simultâneos.
RNF13 - O sistema deve suportar crescimento sem perda de desempenho.

---

### 4. Usabilidade

RNF14 - O sistema deve possuir interface simples e intuitiva.

---

### 5. Integração

RNF15 - O sistema deve permitir integração com serviços externos (ex: WhatsApp).

---
