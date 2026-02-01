import { motion } from 'framer-motion'
import { useState } from 'react'
import ImageModal from './ImageModal'
import DocumentViewer from './DocumentViewer'

const projects = [
  // GitHub projects
  {
    type: 'github',
    title: 'Currency Rates Bot',
    description: 'Telegram бот для получения актуальных курсов валют ЦБ РФ',
    tags: ['Python', 'aiogram', 'API'],
    github: 'https://github.com/romaputrin-lgtm/currency-rates-bot',
    icon: '💱',
    category: 'code',
  },
  {
    type: 'github',
    title: 'Booking System',
    description: 'REST API для системы бронирования с JWT авторизацией',
    tags: ['FastAPI', 'SQLAlchemy', 'PostgreSQL'],
    github: 'https://github.com/romaputrin-lgtm/booking-fastapi',
    icon: '📅',
    category: 'code',
  },
  {
    type: 'github',
    title: 'Finance Calculator',
    description: 'Десктопное приложение для финансовых расчётов',
    tags: ['Python', 'PyQt6', 'matplotlib'],
    github: 'https://github.com/romaputrin-lgtm/finance-calculator-pyqt',
    icon: '📊',
    category: 'code',
  },
  {
    type: 'github',
    title: 'Creative Generator',
    description: 'CLI инструмент для генерации креативов с помощью AI',
    tags: ['Python', 'Gemini API', 'CLI'],
    github: 'https://github.com/romaputrin-lgtm/nanobanana-creative-generator',
    icon: '🎨',
    category: 'code',
  },

  // Excel files
  {
    type: 'excel',
    title: 'Дашборд интернет-магазина',
    description: 'Аналитический дашборд с ключевыми метриками продаж',
    tags: ['Excel', 'Аналитика', 'Визуализация'],
    filePath: '/portfolio/excel/dashboard-shop.xlsx',
    icon: '📈',
    category: 'analytics',
  },
  {
    type: 'excel',
    title: 'Разработка маркетплейса',
    description: 'Планирование и анализ разработки маркетплейса',
    tags: ['Excel', 'Планирование', 'PM'],
    filePath: '/portfolio/excel/mp-development.xlsx',
    icon: '🛒',
    category: 'analytics',
  },
  {
    type: 'excel',
    title: 'Анализ студентов',
    description: 'Статистический анализ успеваемости студентов',
    tags: ['Excel', 'Статистика', 'Анализ данных'],
    filePath: '/portfolio/excel/students.xlsx',
    icon: '🎓',
    category: 'analytics',
  },

  // Diagrams
  {
    type: 'diagram',
    title: 'Архитектура маркетплейса',
    description: 'Схема архитектуры системы маркетплейса',
    tags: ['Архитектура', 'UML', 'Системный дизайн'],
    filePath: '/portfolio/diagrams/mp-architecture.jpg',
    category: 'design',
  },
  {
    type: 'diagram',
    title: 'Нервная система человека',
    description: 'Учебная диаграмма нервной системы',
    tags: ['Биология', 'Инфографика', 'Образование'],
    filePath: '/portfolio/diagrams/nervous-system.jpg',
    category: 'design',
  },
  {
    type: 'diagram',
    title: 'Система аутентификации',
    description: 'Схема процесса аутентификации пользователей',
    tags: ['Безопасность', 'Flowchart', 'Системный дизайн'],
    filePath: '/portfolio/diagrams/auth-system.jpg',
    category: 'design',
  },

  // Presentations
  {
    type: 'presentation',
    title: 'Аддитивные технологии',
    description: 'Презентация о 3D-печати и аддитивном производстве',
    tags: ['PowerPoint', '3D-печать', 'Технологии'],
    filePath: '/portfolio/presentations/additive-tech.pptx',
    icon: '🖨️',
    category: 'presentations',
  },
  {
    type: 'presentation',
    title: 'Криптовалюты и будущее',
    description: 'Обзор криптовалют и перспектив развития',
    tags: ['PowerPoint', 'Crypto', 'Финансы'],
    filePath: '/portfolio/presentations/crypto-future.pptx',
    icon: '₿',
    category: 'presentations',
  },
  {
    type: 'presentation',
    title: 'Мониторинг здоровья',
    description: 'Технологии мониторинга показателей здоровья',
    tags: ['PowerPoint', 'IoT', 'HealthTech'],
    filePath: '/portfolio/presentations/health-monitoring.pptx',
    icon: '❤️',
    category: 'presentations',
  },
  {
    type: 'presentation',
    title: 'Портфолио',
    description: 'Основная презентация портфолио работ',
    tags: ['PowerPoint', 'Портфолио', 'Резюме'],
    filePath: '/portfolio/presentations/portfolio-main.pptx',
    icon: '📁',
    category: 'presentations',
  },
  {
    type: 'presentation',
    title: 'Сравнение маркетплейсов',
    description: 'Аналитическое сравнение популярных маркетплейсов',
    tags: ['PowerPoint', 'Аналитика', 'E-commerce'],
    filePath: '/portfolio/presentations/marketplaces-compare.pptx',
    icon: '⚖️',
    category: 'presentations',
  },
]

const categories = [
  { id: 'all', label: 'Все', icon: '🗂️' },
  { id: 'code', label: 'Код', icon: '💻' },
  { id: 'analytics', label: 'Аналитика', icon: '📊' },
  { id: 'design', label: 'Дизайн', icon: '🎨' },
  { id: 'presentations', label: 'Презентации', icon: '📽️' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedDocument, setSelectedDocument] = useState(null)

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  const handleProjectClick = (project) => {
    if (project.type === 'github') {
      window.open(project.github, '_blank', 'noopener,noreferrer')
    } else if (project.type === 'diagram') {
      setSelectedImage({ src: project.filePath, title: project.title })
    } else if (project.type === 'excel' || project.type === 'presentation') {
      setSelectedDocument({ path: project.filePath, title: project.title })
    }
  }

  const getProjectPreview = (project) => {
    if (project.type === 'diagram') {
      return (
        <img
          src={project.filePath}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      )
    }

    return (
      <span className="text-5xl">
        {project.icon}
      </span>
    )
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'github':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        )
      case 'excel':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zM9.5 13.5l1.5 3 1.5-3h1.5l-2.25 4 2.25 4h-1.5l-1.5-3-1.5 3H8l2.25-4-2.25-4h1.5z" />
          </svg>
        )
      case 'diagram':
        return (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      case 'presentation':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Проекты
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="card group hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleProjectClick(project)}
            >
              <div className={`h-40 rounded-lg mb-4 flex items-center justify-center overflow-hidden ${
                project.type === 'diagram' ? '' : 'bg-gradient-to-br from-primary/20 to-secondary/20'
              }`}>
                {getProjectPreview(project)}
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-primary">
                  {getTypeIcon(project.type)}
                </span>
                <h3 className="text-lg font-semibold">{project.title}</h3>
              </div>

              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src}
        title={selectedImage?.title}
      />

      <DocumentViewer
        isOpen={!!selectedDocument}
        onClose={() => setSelectedDocument(null)}
        filePath={selectedDocument?.path}
        title={selectedDocument?.title}
      />
    </section>
  )
}
