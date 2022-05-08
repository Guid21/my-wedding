import { motion } from 'framer-motion';

import './App.css';

import tim1 from './img/tim1.jpg';
import tim2 from './img/tim2.jpg';
import tim3 from './img/tim3.jpg';
import anna from './img/anna.png';

const leftAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const rightAnimation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const appearanceAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const annaAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

function App() {
  return (
    <motion.div className="app" initial="hidden" whileInView="visible">
      <header>
        <div className="logo">
          <motion.span className="laura" variants={leftAnimation}>
            T
          </motion.span>
          <motion.span className="ampersand">&</motion.span>
          <motion.span className="javery" variants={rightAnimation}>
            A
          </motion.span>
          <motion.div id="date" variants={appearanceAnimation}>
            21.05.2022
          </motion.div>
        </div>
      </header>
      <main>
        <motion.div className="card card-compact w-96 bg-base-100 shadow-xl p-10">
          Все пропало! <br /> У нее получилось! <br />
          Она меня охомутала! S.O.S!
          <br />
          Спасательная операция пройдет <b>21 мая 2022 года в 2 часа дня</b> по
          адресу КАЛИНИНГРАД. Захватчик будет в белом, жертва в черном.
          <br />
          Поплясать на костях моей загубленной холостяцкой жизни можно по адресу
          <b>Пролетарская ул., 98, Калининград, 22 мая 2022 года</b> в 6 часов
          вечера.
          <br />
          Выбрать что поесть нужно{' '}
          <b>
            <mark>
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_HdBtLhuey4K8KMtvYYlzSIAqmp4T6QuIUE8Y6yV8qwlq8g/viewform?usp=sf_link">
                ЗДЕСЬ
              </a>
            </mark>
          </b>
          <br />
          Приходите! Погибать так с музыкой Бросай свой бизнес и приваливай
          тусить. Обещаем: шузы сотрутся от танцев! Твои самые клевые френды:
        </motion.div>
      </main>

      <div className="anna">
        <motion.div
          transition={{ duration: 10, ease: 'easeOut' }}
          animate={{
            y: [300, 100, 500, 400, 200, 100, 0, 30, 400, 1000],
            scale: [1, 0.6, 1.1, 1.5, 1.1, 1, 1.5, 1.1, 0.8, 1],
          }}
        >
          <img src={anna} alt="Burger" />
        </motion.div>
      </div>

      <section>
        <div className="carousel rounded-box">
          <div className="carousel-item">
            <img src={tim1} alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src={tim2} alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src={tim3} alt="Burger" />
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default App;
