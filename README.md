# Portfolio React

Современный сайт-визитка на React с анимациями и адаптивным дизайном.

## Демо

Живая демонстрация: [Скоро будет доступна]

## Возможности

- Адаптивный дизайн для всех устройств
- Плавные анимации с Framer Motion
- Секции: Hero, О себе, Навыки, Проекты, Контакты
- Анимированные прогресс-бары навыков
- Контактная форма
- Мобильное меню

## Технологии

- **React 18** - UI библиотека
- **Vite** - сборщик
- **Tailwind CSS 3** - стилизация
- **Framer Motion** - анимации
- **React Router** - маршрутизация

## Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/romaputrin-lgtm/portfolio-react.git
cd portfolio-react
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите dev сервер:
```bash
npm run dev
```

4. Откройте http://localhost:5173

## Сборка

```bash
npm run build
```

Готовые файлы будут в папке `dist/`.

## Структура проекта

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Header.jsx    # Навигация
│   │   ├── Hero.jsx      # Главный экран
│   │   ├── About.jsx     # О себе
│   │   ├── Skills.jsx    # Навыки
│   │   ├── Projects.jsx  # Проекты
│   │   ├── Contact.jsx   # Контакты
│   │   └── Footer.jsx    # Подвал
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Кастомизация

### Цвета

Измените цвета в `tailwind.config.js`:

```js
colors: {
  primary: '#6366f1',
  secondary: '#8b5cf6',
}
```

### Контент

- Информация о себе: `src/components/About.jsx`
- Навыки: `src/components/Skills.jsx`
- Проекты: `src/components/Projects.jsx`
- Контакты: `src/components/Contact.jsx`

## Лицензия

MIT License
