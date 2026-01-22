# TodoMVC Playwright Automation

## 📌 Project Description

Автоматизация CRUD‑функционала демо‑приложения **TodoMVC** с использованием **Playwright + TypeScript**.  
Проект построен по **Page Object Model** и интегрирован с линтингом, форматированием, Husky‑хуками и CI через GitHub Actions.

---

## 🛠 Tech Stack

- **Playwright** v1.57.0
- **TypeScript** v5+
- **ESLint** (Flat Config)
- **Prettier**
- **Husky** (pre‑push hook)
- **dotenv** (поддержка `.env`)
- **GitHub Actions CI**
- **Playwright HTML Reporter**

---

## 🚀 Setup

```bash
# Установка зависимостей
npm install

# Установка браузеров Playwright
npx playwright install

# Запуск всех тестов локально
npm run test

# Запуск с HTML-репортом (CI режим)
npm run test:ci

BASE_URL=https://demo.playwright.dev/todomvc/#/

baseURL: process.env.BASE_URL || 'https://demo.playwright.dev/todomvc/#/',

✅ Features
- Page Object Model (pages/TodoPage.ts)
- CRUD тест: создание, чтение, редактирование, удаление задачи (tests/test.spec.ts)
- HTML‑репорт
- Husky блокирует push при ошибках линтера
- CI с GitHub Actions (.github/workflows/playwright.yml)

📸 Example Results
- Screenshots: сохраняются при падении тестов
- Видео: сохраняется при падении тестов в test-results/
- HTML Report: доступен в playwright-report/


```
