const currentUser = {
  name: "Dylan Ximenes",
  roles: ["gestor_administrativo"]
};

const roleLabels = {
  psicologo: "Psicólogo",
  assistente: "Assistente",
  gestor_administrativo: "Gestor Administrativo",
  gestor_financeiro: "Gestor Financeiro",
  assistente_financeiro: "Assistente Financeiro"
};

const menuItems = [
  { label: "Dashboard", href: "index.html", roles: ["psicologo", "gestor_administrativo"] },
  {
    label: "Pacientes",
    roles: ["psicologo", "assistente", "gestor_administrativo"],
    children: [{ label: "Cadastro", href: "pacientes.html" }]
  },
  {
    label: "Agenda",
    roles: ["psicologo", "assistente", "gestor_administrativo"],
    children: [{ label: "Consultas", href: "agenda.html" }]
  },
  {
    label: "Solicitações",
    roles: ["psicologo"],
    children: [{ label: "Reagendamentos", href: "solicitacoes.html" }]
  },
  {
    label: "Financeiro",
    roles: ["gestor_financeiro", "assistente_financeiro", "gestor_administrativo"],
    children: [{ label: "Relatório Geral", href: "financeiro.html" }]
  },
  {
    label: "Colaboradores",
    roles: ["gestor_administrativo"],
    children: [
      { label: "Permissões", href: "colaboradores.html" },
      { label: "Vínculos", href: "vinculos.html" }
    ]
  },
  {
    label: "Institucional",
    roles: ["gestor_administrativo"],
    children: [{ label: "Cadastro da clínica", href: "clinica.html" }]
  },
  {
    label: "Auditoria",
    roles: ["gestor_administrativo"],
    children: [
      { label: "Logs", href: "#audit-log" },
      { label: "Alterações", href: "#audit-log" }
    ]
  }
];

const auditEntries = [];

function userCanSee(item) {
  return !item.roles || item.roles.some((role) => currentUser.roles.includes(role));
}

function currentPage() {
  return window.location.pathname.split("/").pop() || "index.html";
}

function nowParts() {
  const now = new Date();
  return {
    date: now.toLocaleDateString("pt-BR"),
    time: now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })
  };
}

function renderLayout() {
  const app = document.querySelector("[data-app-shell]");
  if (!app) return;

  app.insertAdjacentHTML(
    "afterbegin",
    `<aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">PW</div>
        <div>
          <strong>PsicoWeb</strong>
          <span>Gestão clínica</span>
        </div>
      </div>
      <nav class="menu" data-menu></nav>
    </aside>`
  );

  const main = app.querySelector(".main");
  main.insertAdjacentHTML(
    "afterbegin",
    `<header class="topbar">
      <input class="search" type="search" placeholder="Buscar pacientes, consultas ou pagamentos">
      <div class="user-chip">
        <div class="avatar">${currentUser.name
          .split(" ")
          .map((part) => part[0])
          .slice(0, 2)
          .join("")}</div>
        <div>
          <strong>${currentUser.name}</strong><br>
          <span>${currentUser.roles.map((role) => roleLabels[role] || role).join(", ")}</span>
        </div>
      </div>
    </header>`
  );

  document.body.insertAdjacentHTML(
    "beforeend",
    `<div class="toast-stack" data-toast-stack></div>
    <div class="modal-backdrop" data-modal>
      <div class="modal-card">
        <button class="modal-close" type="button" data-close-modal>×</button>
        <div data-modal-content></div>
      </div>
    </div>
    <aside class="audit-drawer" data-audit-drawer>
      <div class="panel-header">
        <h2>Auditoria - Alterações</h2>
        <button class="btn small" type="button" data-close-audit>Fechar</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Usuário</th><th>Ação</th><th>Data</th><th>Hora</th></tr></thead>
          <tbody data-audit-body><tr><td colspan="4" class="muted">Nenhuma alteração registrada nesta sessão.</td></tr></tbody>
        </table>
      </div>
    </aside>`
  );

  renderMenu();
}

function renderMenu() {
  const menu = document.querySelector("[data-menu]");
  const page = currentPage();
  if (!menu) return;

  menuItems.filter(userCanSee).forEach((item) => {
    if (!item.children) {
      const link = document.createElement("a");
      link.className = `menu-link ${item.href === page ? "active" : ""}`;
      link.href = item.href;
      link.dataset.nav = "true";
      link.textContent = item.label;
      menu.appendChild(link);
      return;
    }

    const isOpen = item.children.some((child) => child.href.split("#")[0] === page);
    const group = document.createElement("div");
    group.className = `menu-group ${isOpen ? "open" : ""}`;
    group.innerHTML = `<button class="submenu-toggle" type="button" data-submenu-toggle>
      <span>${item.label}</span>
      <span class="chevron">›</span>
    </button>
    <div class="submenu"></div>`;

    const submenu = group.querySelector(".submenu");
    item.children.forEach((child) => {
      const link = document.createElement("a");
      const childPage = child.href.split("#")[0];
      link.href = child.href;
      link.dataset.nav = "true";
      link.textContent = child.label;
      link.className = childPage === page ? "active" : "";
      submenu.appendChild(link);
    });
    menu.appendChild(group);
  });
}

function toast(message, type = "success") {
  const stack = document.querySelector("[data-toast-stack]");
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.textContent = message;
  stack.appendChild(el);
  window.setTimeout(() => el.remove(), 3200);
}

function addAudit(action) {
  const { date, time } = nowParts();
  auditEntries.unshift({ user: currentUser.name, action, date, time });
  const body = document.querySelector("[data-audit-body]");
  if (!body) return;
  body.innerHTML = auditEntries
    .map((entry) => `<tr><td>${entry.user}</td><td>${entry.action}</td><td>${entry.date}</td><td>${entry.time}</td></tr>`)
    .join("");
}

function openAudit() {
  document.querySelector("[data-audit-drawer]").classList.add("open");
}

function openModal(html) {
  document.querySelector("[data-modal-content]").innerHTML = html;
  document.querySelector("[data-modal]").classList.add("open");
}

function closeModal() {
  document.querySelector("[data-modal]").classList.remove("open");
}

function consentModal() {
  const { date } = nowParts();
  openModal(`<h2>Termo de Consentimento LGPD</h2>
    <div class="form-grid">
      <div class="field"><label>Nome do paciente</label><input type="text" value="Camila Martins"></div>
      <div class="field"><label>CPF</label><input type="text" value="123.456.789-10"></div>
      <div class="field"><label>Data de envio</label><input type="text" value="${date}"></div>
      <div class="field"><label>Canal de envio</label><select><option>WhatsApp</option><option>Email</option><option>Link manual</option></select></div>
    </div>
    <div class="button-row modal-actions">
      <button class="btn" type="button" data-consent-action="Copiar link">Copiar link</button>
      <button class="btn primary" type="button" data-consent-action="Enviar por WhatsApp">Enviar por WhatsApp</button>
      <button class="btn" type="button" data-consent-action="Enviar por Email">Enviar por Email</button>
    </div>`);
}

function documentModal() {
  openModal(`<h2>Novo documento</h2>
    <div class="form-grid">
      <div class="field full"><label>Tipo</label><select data-document-type><option>Declaração</option><option>Relatório clínico</option><option>Recibo</option><option>Encaminhamento</option></select></div>
      <div class="field full"><label>Observações</label><textarea>Documento emitido durante prototipação do fluxo.</textarea></div>
    </div>
    <div class="button-row modal-actions"><button class="btn primary" type="button" data-emit-document>Emitir</button></div>`);
}

function appointmentModal() {
  openModal(`<h2>Novo agendamento</h2>
    <div class="form-grid">
      <div class="field"><label>Paciente</label><input data-appt-patient type="text" value="Camila Martins"></div>
      <div class="field"><label>Psicólogo</label><select data-appt-psychologist><option>Dra. Ana Ribeiro</option><option>Dr. Lucas Nery</option><option>Dra. Clara Monteiro</option></select></div>
      <div class="field"><label>Data</label><input type="date" value="2026-05-18"></div>
      <div class="field"><label>Hora</label><input data-appt-hour type="time" value="18:00"></div>
      <div class="field full"><label>Tipo</label><select><option>Presencial</option><option>Online</option><option>Retorno</option></select></div>
    </div>
    <div class="button-row modal-actions"><button class="btn primary" type="button" data-confirm-appointment>Confirmar</button></div>`);
}

function updateConsentStatus(action) {
  const badge = document.querySelector("[data-consent-status]");
  const history = document.querySelector("[data-consent-history]");
  if (!badge || !history) return;
  const { date, time } = nowParts();
  badge.className = "badge warning";
  badge.textContent = "Consentimento pendente";
  history.insertAdjacentHTML("afterbegin", `<tr><td>${date}</td><td>${time}</td><td>${currentUser.name}</td><td>${action}</td></tr>`);
  toast("Consentimento pendente");
  addAudit(`CDU 01 - ${action} de consentimento LGPD`);
  closeModal();
}

function emitDocument() {
  const type = document.querySelector("[data-document-type]").value;
  const body = document.querySelector("[data-documents-body]");
  const { date } = nowParts();
  body.insertAdjacentHTML("afterbegin", `<tr><td>${type} mockado</td><td>${type}</td><td>${date}</td><td>${currentUser.name}</td><td><div class="button-row"><button class="btn small" type="button" data-simple-action="Documento visualizado">Visualizar</button><button class="btn small" type="button" data-simple-action="Download de documento">Download</button></div></td></tr>`);
  toast("Documento emitido");
  addAudit(`CDU 07 - Documento emitido: ${type}`);
  closeModal();
}

function enhanceFinanceRow(row) {
  if (row.querySelector(".finance-timeline")) return;
  row.querySelector("td").insertAdjacentHTML("beforeend", `<div class="finance-timeline">
    <h3>Histórico financeiro</h3>
    <div class="timeline compact">
      <div class="timeline-item completed"><time>02/05</time><strong>Pagamento realizado</strong><span>R$ 100,00</span></div>
      <div class="timeline-item current"><time>07/05</time><strong>Desconto aplicado</strong><span>R$ 30,00</span></div>
      <div class="timeline-item upcoming"><time>14/05</time><strong>Cobrança pendente</strong><span>R$ 120,00</span></div>
    </div>
  </div>`);
}

function bindInteractions() {
  document.addEventListener("click", (event) => {
    const requestAction = event.target.closest(".requests-dropdown .btn");
    if (requestAction) {
      event.stopPropagation();
      toast(`Solicitação marcada: ${requestAction.textContent}`);
      addAudit(`Solicitação do dashboard: ${requestAction.textContent}`);
      return;
    }

    const requestsToggle = event.target.closest("[data-requests-toggle]");
    if (requestsToggle) requestsToggle.classList.toggle("open");

    const simpleAction = event.target.closest("[data-simple-action]");
    if (simpleAction) {
      const row = simpleAction.closest("tr");
      if (row && simpleAction.dataset.simpleAction.includes("aprovado")) {
        const badge = row.querySelector(".badge");
        badge.textContent = "Aprovado";
        badge.className = "badge success";
      } else if (row && simpleAction.dataset.simpleAction.includes("negado")) {
        const badge = row.querySelector(".badge");
        badge.textContent = "Negado";
        badge.className = "badge danger";
      } else if (row) {
        row.classList.add("highlight-row");
      }
      toast(simpleAction.dataset.simpleAction);
      addAudit(simpleAction.dataset.simpleAction);
      return;
    }

    const menuLink = event.target.closest("[data-nav]");
    if (menuLink) {
      const href = menuLink.getAttribute("href");
      if (href === "#audit-log") {
        event.preventDefault();
        openAudit();
        return;
      }
      event.preventDefault();
      window.location.href = href;
    }

    const submenuButton = event.target.closest("[data-submenu-toggle]");
    if (submenuButton) submenuButton.closest(".menu-group").classList.toggle("open");

    if (event.target.closest("[data-close-modal]")) closeModal();
    if (event.target.closest("[data-close-audit]")) document.querySelector("[data-audit-drawer]").classList.remove("open");
    if (event.target.closest("[data-open-consent]")) consentModal();
    if (event.target.closest("[data-open-document-modal]")) documentModal();
    if (event.target.closest("[data-open-appointment]")) appointmentModal();

    const consentAction = event.target.closest("[data-consent-action]");
    if (consentAction) updateConsentStatus(consentAction.dataset.consentAction);

    if (event.target.closest("[data-emit-document]")) emitDocument();

    const filterToggle = event.target.closest("[data-filter-toggle]");
    if (filterToggle) filterToggle.closest(".filters-card").classList.toggle("open");

    const detailButton = event.target.closest("[data-expand-row]");
    if (detailButton) {
      const key = detailButton.getAttribute("data-expand-row");
      const row = document.querySelector(`[data-details-row="${key}"]`);
      row.classList.toggle("open");
      enhanceFinanceRow(row);
      detailButton.textContent = row.classList.contains("open") ? "Ocultar detalhes" : "Mais detalhes";
      addAudit("CDU 05 - Consulta financeira detalhada");
    }

    if (event.target.closest("[data-save-patient]")) {
      const stamp = document.querySelector("[data-last-update]");
      const { date, time } = nowParts();
      if (stamp) stamp.textContent = `Última atualização: ${date} às ${time} por ${currentUser.name}`;
      toast("Dados atualizados");
      addAudit("CDU 11 - Dados do paciente atualizados");
    }

    if (event.target.closest("[data-clinic-save]")) {
      toast("Clínica cadastrada com sucesso");
      addAudit("CDU 02 - Clínica cadastrada");
    }

    if (event.target.closest("[data-link-assistant]")) {
      const status = document.querySelector("[data-link-status]");
      status.textContent = "Vínculo ativo";
      status.className = "badge success";
      toast("Vínculo ativo");
      addAudit("CDU 03 - Assistente vinculado ao psicólogo");
    }

    const collabButton = event.target.closest("[data-collab-action]");
    if (collabButton) {
      const row = collabButton.closest("tr");
      const badge = row.querySelector("[data-collab-status]");
      if (collabButton.dataset.collabAction === "Editar") {
        row.classList.add("highlight-row");
        toast("Colaborador em edição");
      } else {
        badge.textContent = collabButton.dataset.collabAction === "Ativar" ? "Ativo" : "Inativo";
        badge.className = collabButton.dataset.collabAction === "Ativar" ? "badge success" : "badge neutral";
        toast(`Colaborador ${badge.textContent.toLowerCase()}`);
      }
      addAudit(`CDU 10 - ${collabButton.dataset.collabAction} colaborador`);
    }

    if (event.target.closest("[data-block-mode]")) {
      document.body.classList.toggle("blocking-mode");
      toast("Selecione um horário no calendário");
    }

    const calendarCell = event.target.closest(".calendar-cell");
    if (calendarCell && document.body.classList.contains("blocking-mode") && !calendarCell.classList.contains("calendar-head") && !calendarCell.classList.contains("calendar-time")) {
      calendarCell.innerHTML = `<div class="slot blocked">Bloqueado<small>Bloqueio manual</small></div>`;
      document.body.classList.remove("blocking-mode");
      const history = document.querySelector("[data-agenda-history]");
      const { date, time } = nowParts();
      history.insertAdjacentHTML("afterbegin", `<tr><td>${date}</td><td>${time}</td><td>${currentUser.name}</td><td>Horário bloqueado</td></tr>`);
      toast("Horário bloqueado");
      addAudit("CDU 08 - Horário bloqueado na agenda");
      return;
    }

    const slot = event.target.closest(".slot.booked, .slot.active");
    if (slot && !document.body.classList.contains("blocking-mode")) {
      window.location.href = "atendimento.html";
    }

    if (event.target.closest("[data-confirm-appointment]")) {
      const patient = document.querySelector("[data-appt-patient]").value;
      const psychologist = document.querySelector("[data-appt-psychologist]").value.replace("Dra. ", "Dra. ").replace("Dr. ", "Dr. ");
      const target = Array.from(document.querySelectorAll(".calendar-cell")).find((cell) => !cell.classList.contains("calendar-head") && !cell.classList.contains("calendar-time") && !cell.querySelector(".slot"));
      if (target) target.innerHTML = `<div class="slot booked">${patient}<small>${psychologist}</small></div>`;
      toast("Agendamento confirmado");
      addAudit("CDU 09 - Agendamento de consulta confirmado");
      closeModal();
    }

    if (event.target.closest("[data-session-start]")) {
      document.querySelector("[data-session-card]").className = "card panel attendance-card active-session";
      document.querySelector("[data-session-status]").textContent = "Sessão em atendimento";
      toast("Sessão iniciada");
      addAudit("CDU 12 - Atendimento clínico iniciado");
    }

    if (event.target.closest("[data-session-finish]")) {
      document.querySelector("[data-session-card]").className = "card panel attendance-card completed-session";
      document.querySelector("[data-session-status]").textContent = "Sessão concluída";
      toast("Sessão finalizada");
      addAudit("CDU 12 - Atendimento clínico finalizado");
    }

    if (event.target.closest("[data-next-session]")) {
      toast("Próxima consulta gerada");
      addAudit("CDU 12 - Próxima consulta gerada");
    }

    if (event.target.closest("[data-attendance-document]")) {
      toast("Documento emitido a partir do atendimento");
      addAudit("CDU 12 - Documento emitido no atendimento");
    }
  });

  document.addEventListener("click", (event) => {
    const tabButton = event.target.closest("[data-tab]");
    if (!tabButton) return;
    document.querySelectorAll("[data-tab]").forEach((button) => button.classList.remove("active"));
    document.querySelectorAll("[data-tab-panel]").forEach((panel) => panel.classList.remove("active"));
    tabButton.classList.add("active");
    document.querySelector(`[data-tab-panel="${tabButton.dataset.tab}"]`).classList.add("active");
    addAudit(`CDU 06 - Aba consultada: ${tabButton.textContent}`);
  });
}

renderLayout();
bindInteractions();
