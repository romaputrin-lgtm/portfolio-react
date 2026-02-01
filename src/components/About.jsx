import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          О себе
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Full-Stack Developer
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Увлечённый разработчик с опытом создания веб-приложений.
              Специализируюсь на React, Python и современных технологиях.
              Постоянно изучаю новые инструменты и подходы к разработке.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Мой подход — писать чистый, поддерживаемый код и создавать
              продукты, которые решают реальные проблемы пользователей.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="card">
                <div className="text-3xl font-bold text-primary">3+</div>
                <div className="text-gray-400">Года опыта</div>
              </div>
              <div className="card">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-gray-400">Проектов</div>
              </div>
              <div className="card">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-gray-400">Технологий</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
