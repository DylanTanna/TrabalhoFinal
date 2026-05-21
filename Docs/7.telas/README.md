# PsicoWeb - Protótipo de Telas

Este diretório contém um protótipo navegável de alta fidelidade do PsicoWeb, criado exclusivamente com HTML, CSS e JavaScript puro.

O objetivo é apoiar validação visual, documentação acadêmica, navegação entre telas e contextualização dos casos de uso oficiais do sistema de gestão para clínicas de psicologia.

## Telas existentes

- `index.html`: dashboard operacional do psicólogo, com cards, dropdown de solicitações pendentes e timeline do dia.
- `financeiro.html`: gestão financeira com filtros expansíveis, detalhes por paciente e timeline financeira mockada.
- `agenda.html`: calendário semanal com bloqueio de horário, novo agendamento e acesso ao atendimento clínico.
- `pacientes.html`: cadastro/listagem de pacientes.
- `paciente-documentos.html`: histórico clínico, prontuário, documentos, consentimento LGPD e emissão de documentos.
- `paciente-editar.html`: formulário mockado de edição cadastral com feedback de atualização.
- `solicitacoes.html`: visão completa das solicitações de reagendamento.
- `clinica.html`: cadastro institucional da clínica.
- `vinculos.html`: vínculo entre assistente e psicólogo.
- `colaboradores.html`: gerenciamento visual de colaboradores.
- `atendimento.html`: atendimento clínico com estados de sessão.

## Casos de uso representados

O protótipo cobre visualmente os CDUs 01, 02, 03, 05, 06, 07, 08, 09, 10, 11 e 12 com dados mockados, modais, badges, toasts, dropdowns e alterações temporárias no DOM.

## Auditoria

As ações mockadas registram alterações em runtime no drawer `Auditoria > Alterações`. Não há persistência entre páginas ou recarregamentos.

## Como abrir localmente

Abra o arquivo `index.html` em um navegador moderno. A navegação entre telas utiliza links relativos e não exige servidor local, backend, banco de dados ou dependências externas.

## Dados mockados

Todos os dados exibidos são simulados para fins de prototipação. O usuário atual também é mockado em `assets/app.js`, sem autenticação, sessão ou persistência.

O menu é renderizado com base nos papéis definidos em `currentUser.roles`. O módulo `Solicitações > Reagendamentos` só aparece quando o usuário possuir o papel `psicologo`.
