const icons = {
  briefcase: '<path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"/><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 12h18"/><path d="M9 12v2h6v-2"/>',
  telegram: '<path d="M21 4 3 11.5l6.5 2.1L17 7.5l-5.5 7.7V20l3.2-3.1 4.7 3.5L21 4Z"/>',
  home: '<path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10.5V20h13v-9.5"/><path d="M9.5 20v-6h5v6"/>',
  calendar: '<rect x="4" y="5" width="16" height="16" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/>',
  wallet: '<path d="M4 7h15a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h13"/><path d="M17 13h.01"/>',
  file: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5M10 13h5M10 17h5"/>',
  beach: '<path d="M3 21c3-4 6-6 9-6s6 2 9 6"/><path d="M12 15 8 5c4-1 7 0 10 3"/><path d="M8 5c-3 2-4 5-4 8"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-5 4-8 8-8s7 3 8 8"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  alert: '<path d="M12 9v4M12 17h.01"/><path d="M10.3 4.3 2.6 18a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.2 19.2 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 2.6a2 2 0 0 1-.6 1.9L7.8 9.4a16 16 0 0 0 6.8 6.8l1.2-1.2a2 2 0 0 1 1.9-.6l2.6.5a2 2 0 0 1 1.7 2Z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>'
};

const employee = {
  name: "Анна Коваль",
  role: "Оператор производства",
  agency: "Johnny Staff Agency",
  workplace: "Novares Cerhovice",
  status: "Активный сотрудник"
};

const shifts = [
  ["24 июня", "08:00-16:00", "дневная смена", "next"],
  ["25 июня", "08:00-16:00", "дневная смена", "work"],
  ["26 июня", "выходной", "", "off"],
  ["27 июня", "16:00-00:00", "вечерняя смена", "work"],
  ["28 июня", "16:00-00:00", "вечерняя смена", "work"],
  ["29 июня", "выходной", "", "off"],
  ["30 июня", "08:00-16:00", "дневная смена", "work"]
];

const documents = [
  ["Трудовой договор", "подписан"],
  ["Дополнительное соглашение", "ожидает подписи"],
  ["Медицинская справка", "действует до 15 сентября 2026"],
  ["Инструкция по технике безопасности", "пройдена"]
];

const requests = [
  ["Отпуск", "5-12 июля 2026", "на рассмотрении"],
  ["Один день выходного", "18 июня 2026", "одобрено"]
];

const tabs = [
  ["home", "Главная", "home"],
  ["shifts", "Смены", "calendar"],
  ["salary", "Зарплата", "wallet"],
  ["docs", "Документы", "file"],
  ["vacation", "Отпуск", "beach"],
  ["contacts", "Контакты", "user"]
];

let isLoggedIn = false;
let activeTab = "home";
let formOpen = false;
let toastTimer;

function icon(name) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || ""}</svg>`;
}

function showToast(message) {
  clearTimeout(toastTimer);
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 240);
  }, 2200);
}

function showModal(title, text) {
  const layer = document.createElement("div");
  layer.className = "modal-layer";
  layer.innerHTML = `
    <section class="modal" role="dialog" aria-modal="true">
      <h2>${title}</h2>
      <p>${text}</p>
      <div class="modal-actions">
        <button class="primary-button" data-close>Готово</button>
      </div>
    </section>
  `;
  layer.addEventListener("click", (event) => {
    if (event.target === layer || event.target.closest("[data-close]")) layer.remove();
  });
  document.body.appendChild(layer);
}

function loginScreen() {
  return `
    <section class="login">
      <div>
        <div class="brand-mark">${icon("briefcase")}</div>
        <h1>Личный кабинет сотрудника</h1>
        <p>Вся информация о работе в одном месте</p>
        <div class="login-card">
          <div><i>${icon("calendar")}</i><span>График смен и ближайшая рабочая дата</span></div>
          <div><i>${icon("wallet")}</i><span>Зарплата, аванс и сумма к выплате</span></div>
          <div><i>${icon("file")}</i><span>Документы и заявки сотрудника</span></div>
        </div>
      </div>
      <button class="primary-button" data-login>${icon("telegram")} Войти через Telegram</button>
    </section>
  `;
}

function topbar(title, subtitle = "Анна, добро пожаловать!") {
  return `
    <header class="topbar">
      <div>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      <div class="avatar">АК</div>
    </header>
  `;
}

function homeScreen() {
  return `
    ${topbar("Главная")}
    <section class="card employee-card">
      <div class="employee-head">
        <div>
          <h2>${employee.name}</h2>
          <p>${employee.role}</p>
        </div>
        <span class="badge">${employee.status}</span>
      </div>
      <div class="employee-grid">
        <div class="kv"><span>Компания</span><strong>${employee.agency}</strong></div>
        <div class="kv"><span>Место работы</span><strong>${employee.workplace}</strong></div>
      </div>
    </section>
    <div class="summary-grid">
      <section class="card summary-tile"><i>${icon("clock")}</i><div><span>Ближайшая смена</span><strong>24 июня, 08:00-16:00</strong></div></section>
      <section class="card summary-tile"><i>${icon("wallet")}</i><div><span>Зарплата за июнь</span><strong>38 450 Kč</strong></div></section>
      <section class="card summary-tile"><i>${icon("beach")}</i><div><span>Осталось дней отпуска</span><strong>12 дней</strong></div></section>
    </div>
    <div class="notice">${icon("alert")} <span>Напоминание: не забудьте подписать дополнительное соглашение до 28 июня.</span></div>
  `;
}

function shiftsScreen() {
  return `
    ${topbar("График смен", "Неделя с 24 по 30 июня")}
    <div class="shift-list">
      ${shifts.map(([date, time, type, status]) => `
        <section class="card shift ${status === "off" ? "off" : ""} ${status === "next" ? "next" : ""}">
          <i class="shift-marker"></i>
          <div>
            <h3>${date}</h3>
            <p>${type ? `${time} · ${type}` : time}</p>
          </div>
          <span class="chip">${status === "next" ? "ближайшая" : status === "off" ? "выходной" : "смена"}</span>
        </section>
      `).join("")}
    </div>
  `;
}

function salaryScreen() {
  return `
    ${topbar("Зарплата", "Июнь 2026")}
    <section class="card pay-hero">
      <small>К выплате за текущий месяц</small>
      <h2>28 640 Kč</h2>
    </section>
    <section class="card pay-list">
      <div class="pay-row"><span>Отработано часов</span><strong>168</strong></div>
      <div class="pay-row"><span>Ставка</span><strong>230 Kč/час</strong></div>
      <div class="pay-row"><span>Начислено</span><strong>38 640 Kč</strong></div>
      <div class="pay-row"><span>Аванс</span><strong>10 000 Kč</strong></div>
      <div class="pay-row total"><span>К выплате</span><strong>28 640 Kč</strong></div>
    </section>
    <section class="card payout">
      <div><span>Ближайшая выплата</span><strong>30 июня 2026</strong></div>
      ${icon("calendar")}
    </section>
    <div class="request-actions">
      <button class="secondary-button compact-button" data-advance>${icon("wallet")} Заказать аванс</button>
    </div>
  `;
}

function docsScreen() {
  return `
    ${topbar("Документы", "Личные документы сотрудника")}
    <div class="doc-list">
      ${documents.map(([title, status]) => `
        <section class="card doc">
          <i class="doc-icon">${icon("file")}</i>
          <div class="doc-info"><h3>${title}</h3><p>Статус: ${status}</p></div>
          <button class="small-button" data-open-doc="${title}">Открыть</button>
        </section>
      `).join("")}
    </div>
  `;
}

function vacationScreen() {
  return `
    ${topbar("Заявки на отпуск", "12 дней отпуска доступно")}
    <div class="request-list">
      ${requests.map(([title, date, status]) => `
        <section class="card request">
          <i class="request-icon">${icon(title === "Отпуск" ? "beach" : "calendar")}</i>
          <div class="request-info"><h3>${title}</h3><p>Дата: ${date}<br>Статус: ${status}</p></div>
        </section>
      `).join("")}
    </div>
    <div class="request-actions">
      <button class="secondary-button compact-button quiet-button" data-toggle-form>${icon("plus")} Создать заявку</button>
    </div>
    ${formOpen ? `
      <form class="card form-card" data-vacation-form>
        <div class="field"><label>Тип заявки</label><select required><option>Отпуск</option><option>Один день выходного</option><option>Больничный</option></select></div>
        <div class="field"><label>Дата начала</label><input type="date" value="2026-07-05" required></div>
        <div class="field"><label>Дата окончания</label><input type="date" value="2026-07-12" required></div>
        <div class="field"><label>Комментарий</label><textarea placeholder="Например: плановый отпуск по семейным обстоятельствам"></textarea></div>
        <button class="primary-button" type="submit">Отправить заявку</button>
      </form>
    ` : ""}
  `;
}

function contactsScreen() {
  return `
    ${topbar("Контакты менеджера", "Ваш HR-менеджер")}
    <section class="card manager-card">
      <i class="manager-icon">${icon("user")}</i>
      <h2>Екатерина Новак</h2>
      <p>HR-менеджер</p>
      <div class="contact-list">
        <div><span>Телефон</span><a href="tel:+420777245890">+420 777 245 890</a></div>
        <div><span>Email</span><a href="mailto:hr@johnnystaff.cz">hr@johnnystaff.cz</a></div>
        <div><span>Telegram</span><strong>@johnny_hr</strong></div>
      </div>
      <div class="contact-buttons">
        <a class="primary-button" href="https://t.me/johnny_hr">${icon("telegram")} Написать в Telegram</a>
        <a class="secondary-button" href="tel:+420777245890">${icon("phone")} Позвонить</a>
        <a class="link-button" href="mailto:hr@johnnystaff.cz">${icon("mail")} Написать на email</a>
      </div>
    </section>
  `;
}

function currentScreen() {
  if (activeTab === "home") return homeScreen();
  if (activeTab === "shifts") return shiftsScreen();
  if (activeTab === "salary") return salaryScreen();
  if (activeTab === "docs") return docsScreen();
  if (activeTab === "vacation") return vacationScreen();
  return contactsScreen();
}

function nav() {
  return `
    <nav class="bottom-nav">
      ${tabs.map(([id, label, iconName]) => `
        <button class="${activeTab === id ? "active" : ""}" data-tab="${id}">
          ${icon(iconName)}
          <span>${label}</span>
        </button>
      `).join("")}
    </nav>
  `;
}

function appScreen() {
  return `<section class="workspace"><div class="screen">${currentScreen()}</div>${nav()}</section>`;
}

function render() {
  document.querySelector("#app").innerHTML = isLoggedIn ? appScreen() : loginScreen();
}

document.addEventListener("click", (event) => {
  const login = event.target.closest("[data-login]");
  if (login) {
    isLoggedIn = true;
    render();
    return;
  }

  const tab = event.target.closest("[data-tab]");
  if (tab) {
    activeTab = tab.dataset.tab;
    formOpen = false;
    render();
    return;
  }

  const doc = event.target.closest("[data-open-doc]");
  if (doc) {
    showModal(doc.dataset.openDoc, "Демо-версия: документ открыт");
    return;
  }

  if (event.target.closest("[data-toggle-form]")) {
    formOpen = !formOpen;
    render();
    return;
  }

  if (event.target.closest("[data-advance]")) {
    showToast("Заявка на аванс отправлена менеджеру");
  }
});

document.addEventListener("submit", (event) => {
  if (!event.target.matches("[data-vacation-form]")) return;
  event.preventDefault();
  formOpen = false;
  render();
  showToast("Заявка успешно отправлена менеджеру");
});

render();
