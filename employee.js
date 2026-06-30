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

const SHEETS_API_URL = "https://script.google.com/macros/s/AKfycbyHAUPmtKDo7eJO7OtLnrvrMWpfY-tjPpyHXOtbxkKknN5Zw9N6aez0B-SCihyIiagj/exec";

const managers = {
  "MGR-001": {
    name: "Екатерина Новак",
    role: "HR-менеджер",
    phone: "+420 777 245 890",
    email: "hr.ekaterina@johnnystaff.cz",
    telegram: "@johnny_hr_kat"
  },
  "MGR-002": {
    name: "Мартин Свобода",
    role: "Координатор объектов",
    phone: "+420 777 318 644",
    email: "martin.svoboda@johnnystaff.cz",
    telegram: "@johnny_hr_martin"
  },
  "MGR-003": {
    name: "Ольга Кравец",
    role: "HR-координатор",
    phone: "+420 777 905 213",
    email: "olga.kravec@johnnystaff.cz",
    telegram: "@johnny_hr_olga"
  }
};

const employeeDatabase = {
  "JS-10482": {
    activationPin: "5831",
    name: "Анна Коваль",
    role: "Оператор производства",
    agency: "Johnny Staff Agency",
    workplace: "Novares Cerhovice",
    status: "Активный сотрудник",
    managerId: "MGR-001",
    vacationDays: 12,
    reminder: "Не забудьте подписать дополнительное соглашение до 28 июня.",
    shifts: [
      ["29 июня", "08:00-16:00", "дневная смена", "next"],
      ["30 июня", "08:00-16:00", "дневная смена", "work"],
      ["1 июля", "выходной", "", "off"],
      ["2 июля", "16:00-00:00", "вечерняя смена", "work"],
      ["3 июля", "16:00-00:00", "вечерняя смена", "work"],
      ["4 июля", "выходной", "", "off"],
      ["5 июля", "08:00-16:00", "дневная смена", "work"]
    ],
    salary: { month: "Июнь 2026", hours: 168, rate: 230, bonus: 0, accrued: 38640, advance: 10000, payout: 28640, nextPayment: "30 июня 2026" },
    documents: [
      ["Трудовой договор", "подписан"],
      ["Дополнительное соглашение", "ожидает подписи до 28 июня 2026"],
      ["Медицинская справка", "действует до 15 сентября 2026"],
      ["Инструкция по технике безопасности", "пройдена"]
    ],
    requests: [
      ["Отпуск", "5-12 июля 2026", "на рассмотрении"],
      ["Один день выходного", "18 июня 2026", "одобрено"]
    ]
  },
  "JS-10817": {
    activationPin: "7419",
    name: "Максим Орлов",
    role: "Комплектовщик склада",
    agency: "Johnny Staff Agency",
    workplace: "Toyota Kolín",
    status: "Активный сотрудник",
    managerId: "MGR-002",
    vacationDays: 8,
    reminder: "На рассмотрении заявка на выходной 17 июля.",
    shifts: [
      ["29 июня", "06:00-14:00", "утренняя смена", "next"],
      ["30 июня", "06:00-14:00", "утренняя смена", "work"],
      ["1 июля", "06:00-14:00", "утренняя смена", "work"],
      ["2 июля", "выходной", "", "off"],
      ["3 июля", "выходной", "", "off"],
      ["4 июля", "14:00-22:00", "вечерняя смена", "work"],
      ["5 июля", "14:00-22:00", "вечерняя смена", "work"]
    ],
    salary: { month: "Июнь 2026", hours: 176, rate: 220, bonus: 2500, accrued: 41220, advance: 8000, payout: 33220, nextPayment: "30 июня 2026" },
    documents: [
      ["Трудовой договор", "подписан"],
      ["Соглашение о материальной ответственности", "подписано"],
      ["Медицинская справка", "действует до 2 ноября 2026"],
      ["Инструкция по работе на складе", "пройдена"]
    ],
    requests: [
      ["Отпуск", "3-9 августа 2026", "одобрено"],
      ["Один день выходного", "17 июля 2026", "на рассмотрении"]
    ]
  },
  "JS-11203": {
    activationPin: "2604",
    name: "Елена Петрова",
    role: "Контролёр качества",
    agency: "Johnny Staff Agency",
    workplace: "Koyo Plzeň",
    status: "Испытательный срок",
    managerId: "MGR-001",
    vacationDays: 15,
    reminder: "Подпишите приложение к договору до 3 июля.",
    shifts: [
      ["29 июня", "07:00-15:00", "дневная смена", "next"],
      ["30 июня", "07:00-15:00", "дневная смена", "work"],
      ["1 июля", "07:00-15:00", "дневная смена", "work"],
      ["2 июля", "07:00-15:00", "дневная смена", "work"],
      ["3 июля", "07:00-13:00", "сокращённая смена", "work"],
      ["4 июля", "выходной", "", "off"],
      ["5 июля", "выходной", "", "off"]
    ],
    salary: { month: "Июнь 2026", hours: 152, rate: 245, bonus: 1200, accrued: 38440, advance: 0, payout: 38440, nextPayment: "2 июля 2026" },
    documents: [
      ["Трудовой договор", "подписан"],
      ["Приложение к договору", "ожидает подписи до 3 июля 2026"],
      ["Медицинская справка", "действует до 18 января 2027"],
      ["Обучение по качеству", "пройдено"]
    ],
    requests: [
      ["Отпуск", "14-20 сентября 2026", "черновик"],
      ["Один день выходного", "12 июня 2026", "одобрено"]
    ]
  },
  "JS-11546": {
    activationPin: "9186",
    name: "Дмитрий Соколов",
    role: "Сварщик",
    agency: "Johnny Staff Agency",
    workplace: "Doosan Bobcat Dobříš",
    status: "Активный сотрудник",
    managerId: "MGR-003",
    vacationDays: 6,
    reminder: "Обновите медицинскую справку до 8 июля.",
    shifts: [
      ["29 июня", "18:00-02:00", "ночная смена", "next"],
      ["30 июня", "18:00-02:00", "ночная смена", "work"],
      ["1 июля", "выходной", "", "off"],
      ["2 июля", "18:00-02:00", "ночная смена", "work"],
      ["3 июля", "18:00-02:00", "ночная смена", "work"],
      ["4 июля", "18:00-02:00", "ночная смена", "work"],
      ["5 июля", "выходной", "", "off"]
    ],
    salary: { month: "Июнь 2026", hours: 184, rate: 285, bonus: 4800, accrued: 57240, advance: 15000, payout: 42240, nextPayment: "30 июня 2026" },
    documents: [
      ["Трудовой договор", "подписан"],
      ["Допуск к сварочным работам", "действует до 20 декабря 2026"],
      ["Медицинская справка", "требует обновления до 8 июля 2026"],
      ["Инструкция по технике безопасности", "пройдена"]
    ],
    requests: [
      ["Отпуск", "20-26 июля 2026", "отклонено"],
      ["Один день выходного", "7 августа 2026", "на рассмотрении"]
    ]
  },
  "JS-11928": {
    activationPin: "4357",
    name: "София Мельник",
    role: "Упаковщик",
    agency: "Johnny Staff Agency",
    workplace: "Faurecia Písek",
    status: "В отпуске",
    managerId: "MGR-002",
    vacationDays: 10,
    reminder: "Текущий отпуск заканчивается 12 июля.",
    shifts: [
      ["29 июня", "отпуск", "", "off"],
      ["30 июня", "отпуск", "", "off"],
      ["1 июля", "отпуск", "", "off"],
      ["2 июля", "отпуск", "", "off"],
      ["3 июля", "отпуск", "", "off"],
      ["4 июля", "отпуск", "", "off"],
      ["5 июля", "отпуск", "", "off"]
    ],
    salary: { month: "Июнь 2026", hours: 160, rate: 215, bonus: 0, accrued: 34400, advance: 7000, payout: 27400, nextPayment: "1 июля 2026" },
    documents: [
      ["Трудовой договор", "подписан"],
      ["Дополнительное соглашение", "подписано"],
      ["Медицинская справка", "действует до 11 октября 2026"],
      ["Инструкция по упаковке", "пройдена"]
    ],
    requests: [
      ["Отпуск", "29 июня-12 июля 2026", "одобрено"],
      ["Один день выходного", "22 мая 2026", "одобрено"]
    ]
  }
};

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
let currentEmployeeId = null;
let currentEmployee = null;
let loginError = "";
let isLoginLoading = false;

const telegramApp = window.Telegram?.WebApp;
telegramApp?.ready();
telegramApp?.expand();

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
        <h1>Вход в личный кабинет</h1>
        <p>Введите номер сотрудника и одноразовый код активации</p>
        <form class="login-form card" data-login-form>
          <div class="field">
            <label for="employee-id">Номер сотрудника</label>
            <input id="employee-id" name="employee_id" autocomplete="username" placeholder="Например, JS-10482" required>
          </div>
          <div class="field">
            <label for="activation-pin">Код активации</label>
            <input id="activation-pin" name="activation_pin" type="password" inputmode="numeric" autocomplete="one-time-code" maxlength="4" placeholder="4 цифры" required>
          </div>
          ${loginError ? `<div class="login-error">${icon("alert")}<span>${loginError}</span></div>` : ""}
          <button class="primary-button" type="submit" ${isLoginLoading ? "disabled" : ""}>
            ${icon("telegram")} ${isLoginLoading ? "Проверяем..." : "Войти"}
          </button>
          <small class="demo-access">Данные проверяются по Google Таблице</small>
        </form>
      </div>
      <p class="login-note">После первого входа аккаунт можно будет привязать к Telegram.</p>
    </section>
  `;
}

function getEmployee() {
  return currentEmployee || employeeDatabase[currentEmployeeId];
}

function getInitials(name) {
  return name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase();
}

function firstName(name) {
  return name.split(" ")[0];
}

function formatMoney(value) {
  if (typeof value === "string") {
    const cleaned = value.trim();
    if (cleaned.includes("Kč")) return cleaned;
    const number = Number(cleaned.replace(/[^\d.-]/g, ""));
    if (Number.isFinite(number)) return `${new Intl.NumberFormat("ru-RU").format(number)} Kč`;
    return cleaned;
  }
  return `${new Intl.NumberFormat("ru-RU").format(value || 0)} Kč`;
}

function prefer(apiValue, fallbackValue) {
  if (apiValue === undefined || apiValue === null || apiValue === "") return fallbackValue;
  if (Array.isArray(apiValue) && apiValue.length === 0) return fallbackValue;
  return apiValue;
}

function mergeSalary(apiSalary, fallbackSalary) {
  const merged = { ...(fallbackSalary || {}) };
  Object.entries(apiSalary || {}).forEach(([key, value]) => {
    merged[key] = prefer(value, merged[key]);
  });
  return merged;
}

function normalizeEmployee(payload, employeeId) {
  const employee = payload.employee || payload;
  const fallback = employeeDatabase[employeeId] || {};
  return {
    ...fallback,
    ...employee,
    name: prefer(employee.name, fallback.name),
    role: prefer(employee.role, fallback.role),
    agency: prefer(employee.agency, fallback.agency),
    workplace: prefer(employee.workplace, fallback.workplace),
    status: prefer(employee.status, fallback.status),
    reminder: prefer(employee.reminder, fallback.reminder),
    shifts: prefer(employee.shifts, fallback.shifts || []),
    documents: prefer(employee.documents, fallback.documents || []),
    requests: prefer(employee.requests || employee.vacations, fallback.requests || []),
    salary: mergeSalary(employee.salary, fallback.salary),
    manager: employee.manager || managers[employee.managerId] || managers[fallback.managerId] || managers["MGR-001"],
    vacationDays: Number(prefer(employee.vacationDays || employee.vacation_days, fallback.vacationDays || 0))
  };
}

async function fetchEmployeeFromSheets(employeeId, activationPin) {
  const url = new URL(SHEETS_API_URL);
  url.searchParams.set("employee_id", employeeId);
  url.searchParams.set("activation_pin", activationPin);
  url.searchParams.set("_", Date.now().toString());

  const response = await fetch(url.toString(), { method: "GET", cache: "no-store" });
  if (!response.ok) {
    throw new Error("API_REQUEST_FAILED");
  }

  const data = await response.json();
  if (!data.ok) {
    throw new Error(data.error || "AUTH_FAILED");
  }

  return normalizeEmployee(data.employee, employeeId);
}

function topbar(title, subtitle) {
  const employee = getEmployee();
  return `
    <header class="topbar">
      <div>
        <h1>${title}</h1>
        <p>${subtitle || `${firstName(employee.name)}, добро пожаловать!`}</p>
      </div>
      <button class="avatar" data-logout title="Выйти из кабинета">${getInitials(employee.name)}</button>
    </header>
  `;
}

function homeScreen() {
  const employee = getEmployee();
  const nextShift = employee.shifts.find((shift) => shift[3] === "next") || employee.shifts[0];
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
      <section class="card summary-tile"><i>${icon("clock")}</i><div><span>Ближайшая смена</span><strong>${nextShift[0]}, ${nextShift[1]}</strong></div></section>
      <section class="card summary-tile"><i>${icon("wallet")}</i><div><span>Начислено за июнь</span><strong>${formatMoney(employee.salary.accrued)}</strong></div></section>
      <section class="card summary-tile"><i>${icon("beach")}</i><div><span>Осталось дней отпуска</span><strong>${employee.vacationDays} дней</strong></div></section>
    </div>
    <div class="notice">${icon("alert")} <span>Напоминание: ${employee.reminder}</span></div>
  `;
}

function shiftsScreen() {
  const employee = getEmployee();
  return `
    ${topbar("График смен", "Неделя с 29 июня по 5 июля")}
    <div class="shift-list">
      ${employee.shifts.map(([date, time, type, status]) => `
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
  const salary = getEmployee().salary;
  return `
    ${topbar("Зарплата", salary.month)}
    <section class="card pay-hero">
      <small>К выплате за текущий месяц</small>
      <h2>${formatMoney(salary.payout)}</h2>
    </section>
    <section class="card pay-list">
      <div class="pay-row"><span>Отработано часов</span><strong>${salary.hours}</strong></div>
      <div class="pay-row"><span>Ставка</span><strong>${formatMoney(salary.rate)}/час</strong></div>
      ${salary.bonus ? `<div class="pay-row"><span>Премия и надбавки</span><strong>${formatMoney(salary.bonus)}</strong></div>` : ""}
      <div class="pay-row"><span>Начислено</span><strong>${formatMoney(salary.accrued)}</strong></div>
      <div class="pay-row"><span>Аванс</span><strong>${formatMoney(salary.advance)}</strong></div>
      <div class="pay-row total"><span>К выплате</span><strong>${formatMoney(salary.payout)}</strong></div>
    </section>
    <section class="card payout">
      <div><span>Ближайшая выплата</span><strong>${salary.nextPayment}</strong></div>
      ${icon("calendar")}
    </section>
    <div class="request-actions">
      <button class="secondary-button compact-button" data-advance>${icon("wallet")} Заказать аванс</button>
    </div>
  `;
}

function docsScreen() {
  const employee = getEmployee();
  return `
    ${topbar("Документы", "Личные документы сотрудника")}
    <div class="doc-list">
      ${employee.documents.map(([title, status]) => `
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
  const employee = getEmployee();
  return `
    ${topbar("Заявки на отпуск", `${employee.vacationDays} дней отпуска доступно`)}
    <div class="request-list">
      ${employee.requests.map(([title, date, status]) => `
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
        <div class="field"><label>Тип заявки</label><select name="request_type" required><option>Отпуск</option><option>Один день выходного</option><option>Больничный</option></select></div>
        <div class="field"><label>Дата начала</label><input name="start_date" type="date" value="2026-07-05" required></div>
        <div class="field"><label>Дата окончания</label><input name="end_date" type="date" value="2026-07-12" required></div>
        <div class="field"><label>Комментарий</label><textarea name="comment" placeholder="Например: плановый отпуск по семейным обстоятельствам"></textarea></div>
        <button class="primary-button" type="submit">Отправить заявку</button>
      </form>
    ` : ""}
  `;
}

function contactsScreen() {
  const manager = getEmployee().manager || managers[getEmployee().managerId] || managers["MGR-001"];
  const telegramHandle = manager.telegram.replace(/^@/, "");
  const phoneLink = manager.phone.replace(/[^\d+]/g, "");
  return `
    ${topbar("Контакты менеджера", "Ваш HR-менеджер")}
    <section class="card manager-card">
      <i class="manager-icon">${icon("user")}</i>
      <h2>${manager.name}</h2>
      <p>${manager.role}</p>
      <div class="contact-list">
        <div><span>Телефон</span><a href="tel:${phoneLink}">${manager.phone}</a></div>
        <div><span>Email</span><a href="mailto:${manager.email}">${manager.email}</a></div>
        <div><span>Telegram</span><strong>${manager.telegram}</strong></div>
      </div>
      <div class="contact-buttons">
        <a class="primary-button" href="https://t.me/${telegramHandle}">${icon("telegram")} Написать в Telegram</a>
        <a class="secondary-button" href="tel:${phoneLink}">${icon("phone")} Позвонить</a>
        <a class="link-button" href="mailto:${manager.email}">${icon("mail")} Написать на email</a>
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
  if (event.target.closest("[data-logout]")) {
    isLoggedIn = false;
    currentEmployeeId = null;
    currentEmployee = null;
    activeTab = "home";
    formOpen = false;
    loginError = "";
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

document.addEventListener("submit", async (event) => {
  if (event.target.matches("[data-login-form]")) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const employeeId = String(formData.get("employee_id") || "").trim().toUpperCase();
    const activationPin = String(formData.get("activation_pin") || "").trim();

    isLoginLoading = true;
    loginError = "";
    render();

    try {
      currentEmployee = await fetchEmployeeFromSheets(employeeId, activationPin);
      currentEmployeeId = employeeId;
      isLoggedIn = true;
      loginError = "";
      activeTab = "home";
      telegramApp?.HapticFeedback?.notificationOccurred("success");
      render();
    } catch (error) {
      if (error.message === "AUTH_FAILED" || error.message === "EMPLOYEE_NOT_FOUND" || error.message === "PIN_INVALID") {
        loginError = "Неверный номер сотрудника или код активации.";
      } else {
        loginError = "Не удалось получить данные из Google Таблицы. Проверьте публикацию Apps Script.";
      }
      isLoggedIn = false;
      currentEmployeeId = null;
      currentEmployee = null;
      telegramApp?.HapticFeedback?.notificationOccurred("error");
      render();
      document.querySelector("#employee-id")?.focus();
    } finally {
      isLoginLoading = false;
    }
    return;
  }

  if (event.target.matches("[data-vacation-form]")) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const type = String(formData.get("request_type") || "Отпуск");
    const startDate = String(formData.get("start_date") || "");
    const endDate = String(formData.get("end_date") || "");
    getEmployee().requests.unshift([type, `${startDate} - ${endDate}`, "отправлено"]);
    formOpen = false;
    render();
    showToast("Заявка успешно отправлена менеджеру");
  }
});

render();
