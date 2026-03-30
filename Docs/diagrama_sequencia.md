# Diagramas de Sequência

---

## 1. Agendamento de Consulta

**Participantes:**
- `Paciente` — usuário que solicita a consulta
- `Sistema` — aplicação web/mobile
- `Banco de Dados` — persistência dos dados
- `Profissional` — médico/terapeuta responsável
- `Serviço de Notificação` — envio de e-mails e lembretes

```mermaid
sequenceDiagram
    actor Paciente
    participant Sistema
    participant BD as Banco de Dados
    participant Profissional
    participant Notificacao as Serviço de Notificação

    Paciente->>Sistema: Acessa a plataforma e faz login (RNF07)
    Sistema->>BD: Valida credenciais do paciente
    BD-->>Sistema: Autenticação confirmada
    Sistema-->>Paciente: Acesso concedido

    Paciente->>Sistema: Solicita visualização da agenda do profissional (RF06, RF07)
    Sistema->>BD: Consulta horários disponíveis do profissional
    BD-->>Sistema: Retorna slots disponíveis
    Sistema-->>Paciente: Exibe agenda com horários livres

    Paciente->>Sistema: Seleciona data e horário desejados (RF08)
    Sistema->>BD: Verifica disponibilidade do horário selecionado
    BD-->>Sistema: Horário disponível confirmado

    Paciente->>Sistema: Preenche formulário de pré-atendimento (RF03, RF04)
    Sistema->>BD: Armazena dados do pré-atendimento (RF05)
    BD-->>Sistema: Dados salvos com sucesso

    Sistema->>BD: Registra o agendamento da consulta
    BD-->>Sistema: Agendamento persistido

    Sistema->>Notificacao: Solicita envio de confirmação ao paciente (RF10)
    Notificacao-->>Paciente: Envia e-mail de confirmação da consulta

    Sistema->>Notificacao: Agenda lembrete automático (RF11)

    Sistema-->>Paciente: Exibe confirmação na tela (RF12)

    Note over Sistema, Profissional: O profissional pode consultar<br/>a agenda e os dados do pré-atendimento
    Profissional->>Sistema: Acessa agenda e dados do pré-atendimento (RF07, RF18)
    Sistema->>BD: Busca consultas agendadas e formulário de pré-atendimento
    BD-->>Sistema: Retorna dados do paciente e da consulta
    Sistema-->>Profissional: Exibe informações antes da consulta

    Note over Notificacao, Paciente: Próximo ao horário da consulta
    Notificacao-->>Paciente: Envia lembrete automático da consulta (RF11)
```

---

## 2. Atendimento Online

**Participantes:**
- `Paciente` — usuário que participa da teleconsulta
- `Sistema` — aplicação web/mobile
- `Sala Virtual` — módulo de videochamada/chat
- `Banco de Dados` — persistência dos dados
- `Profissional` — médico/terapeuta que conduz o atendimento

```mermaid
sequenceDiagram
    actor Paciente
    actor Profissional
    participant Sistema
    participant SalaVirtual as Sala Virtual
    participant BD as Banco de Dados

    Note over Profissional, Sistema: Pré-atendimento: configuração de disponibilidade
    Profissional->>Sistema: Configura disponibilidade para atendimento online (RF25)
    Sistema->>BD: Salva configurações de disponibilidade
    BD-->>Sistema: Configuração salva
    Sistema-->>Profissional: Confirmação de disponibilidade atualizada

    Note over Paciente, Sistema: No horário agendado
    Paciente->>Sistema: Faz login e acessa consulta agendada (RNF07)
    Sistema->>BD: Valida sessão e recupera dados da consulta
    BD-->>Sistema: Dados da consulta retornados
    Sistema-->>Paciente: Redireciona para sala de espera virtual (RF26)

    Paciente->>SalaVirtual: Entra na sala de espera virtual
    SalaVirtual-->>Paciente: Aguarda entrada do profissional

    Profissional->>Sistema: Acessa a consulta agendada
    Sistema->>BD: Busca prontuário e dados do pré-atendimento (RF16, RF18)
    BD-->>Sistema: Retorna histórico clínico e formulário preenchido
    Sistema-->>Profissional: Exibe informações do paciente antes de iniciar

    Profissional->>SalaVirtual: Entra na sala e inicia o atendimento
    SalaVirtual->>BD: Registra horário de início da consulta (RF27)
    SalaVirtual-->>Paciente: Notifica início da consulta (RF14)

    Note over Paciente, SalaVirtual: Durante o atendimento
    Paciente->>SalaVirtual: Comunicação por vídeo, áudio ou chat (RF24)
    SalaVirtual-->>Profissional: Transmite vídeo/áudio/mensagens em tempo real
    Profissional-->>SalaVirtual: Responde via vídeo, áudio ou chat
    SalaVirtual-->>Paciente: Entrega resposta do profissional

    Paciente->>SalaVirtual: Envia mensagem assíncrona via chat (RF28)
    SalaVirtual->>BD: Armazena mensagem com histórico
    BD-->>SalaVirtual: Mensagem persistida
    SalaVirtual-->>Profissional: Entrega mensagem com notificação (RF14)

    Paciente->>Sistema: Realiza upload de documento durante consulta (RF21, RF22)
    Sistema->>BD: Valida formato e tamanho do arquivo (RF23)
    BD-->>Sistema: Arquivo válido
    Sistema->>BD: Armazena documento com metadados
    BD-->>Sistema: Upload concluído
    Sistema-->>Profissional: Notifica novo documento disponível (RF14)

    Note over Profissional, SalaVirtual: Encerramento da consulta
    Profissional->>SalaVirtual: Encerra o atendimento
    SalaVirtual->>BD: Registra horário de fim e duração da consulta (RF27)
    BD-->>SalaVirtual: Dados registrados

    Profissional->>Sistema: Atualiza prontuário eletrônico com anotações (RF15, RF16)
    Sistema->>BD: Salva prontuário atualizado
    BD-->>Sistema: Prontuário salvo com sucesso

    Sistema->>BD: Registra transação financeira da consulta (RF31)
    BD-->>Sistema: Transação registrada

    Sistema-->>Paciente: Exibe resumo e confirmação do atendimento realizado
```

*Referências aos Requisitos utilizados nos diagramas:*

| Código | Descrição resumida |
|--------|--------------------|
| RF03, RF04, RF05 | Pré-atendimento e formulário online |
| RF06, RF07, RF08 | Agendamento e acesso à agenda |
| RF10, RF11, RF12 | Confirmações e lembretes automáticos |
| RF14 | Notificações em tempo real |
| RF15, RF16 | Prontuário eletrônico e histórico clínico |
| RF18 | Consulta de dados do pré-atendimento e prontuário |
| RF21, RF22, RF23 | Upload, download e validação de documentos |
| RF24, RF25, RF26 | Atendimento online, disponibilidade e sala virtual |
| RF27, RF28 | Registro de dados e mensagens assíncronas |
| RF31 | Registro financeiro |
| RNF07 | Autenticação por login e senha |
