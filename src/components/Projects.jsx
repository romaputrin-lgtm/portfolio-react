import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Currency Rates Bot',
    description: 'Telegram бот для получения актуальных курсов валют ЦБ РФ',
    tags: ['Python', 'aiogram', 'API'],
    github: 'https://github.com/romaputrin-lgtm/currency-rates-bot',
  },
  {
    title: 'Booking System',
    description: 'REST API для системы бронирования с JWT авторизацией',
    tags: ['FastAPI', 'SQLAlchemy', 'PostgreSQL'],
    github: 'https://github.com/romaputrin-lgtm/booking-fastapi',
  },
  {
    title: 'Finance Calculator',
    description: 'Десктопное приложение для финансовых расчётов',
    tags: ['Python', 'PyQt6', 'matplotlib'],
    github: 'https://github.com/romaputrin-lgtm/finance-calculator-pyqt',
  },
  {
    title: 'Creative Generator',
    description: 'CLI инструмент для генерации креативов с помощью AI',
    tags: ['Python', 'Gemini API', 'CLI'],
    github: 'https://github.com/romaputrin-lgtm/nanobanana-creative-generator',
  },
]

export default function Projects() {
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="card group hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-5xl">
                  {index === 0 && '💱'}
                  {index === 1 && '📅'}
                  {index === 2 && '📊'}
                  {index === 3 && '🎨'}
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-secondary transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
