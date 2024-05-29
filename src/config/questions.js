const questions = [
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Інженер-технолог", type: "R" },
      { answer: "Інженер-конструктор", type: "R" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "В'язальник", type: "C" },
      { answer: "Санітарний лікар", type: "S" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Кухар", type: "R" },
      { answer: "Наборщик", type: "C" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Фотограф", type: "A" },
      { answer: "Управляючий магазином", type: "E" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Чертежник", type: "R" },
      { answer: "Дизайнер", type: "A" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Філософ", type: "I" },
      { answer: "Психіатр", type: "S" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Вчений-хімік", type: "I" },
      { answer: "Бухгалтер", type: "C" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Редактор наукового журналу", type: "I" },
      { answer: "Адвокат", type: "E" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Лінгвіст", type: "I" },
      { answer: "Перекладач художньої літератури", type: "A" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Лікар-психіатр", type: "S" },
      { answer: "Статистик", type: "C" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Завуч", type: "S" },
      { answer: "Голова профспілкового комітету", type: "E" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Спортивний лікар", type: "S" },
      { answer: "Фельєтоніст", type: "A" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Нотаріус", type: "E" },
      { answer: "Постачальник", type: "C" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Перфораторщик", type: "R" },
      { answer: "Карикатурист", type: "A" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Політичний діяч", type: "E" },
      { answer: "Письменник", type: "A" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Садівник", type: "R" },
      { answer: "Метеоролог", type: "I" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Водій тролейбуса", type: "R" },
      { answer: "Медбрат", type: "S" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Інженер-електронщик", type: "R" },
      { answer: "Секретар", type: "C" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Маляр", type: "R" },
      { answer: "Художник по металу", type: "A" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Біолог", type: "I" },
      { answer: "Офтальмолог", type: "S" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Телеоператор", type: "A" },
      { answer: "Режисер", type: "A" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Гідролог", type: "I" },
      { answer: "Ревізор", type: "C" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Зоолог", type: "I" },
      { answer: "Головний зоотехнік", type: "R" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Математик", type: "I" },
      { answer: "Архітектор", type: "A" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Працівник інспекції у справах неповнолітніх", type: "S" },
      { answer: "Бухгалтер", type: "C" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Учитель", type: "S" },
      { answer: "Командир військової частини", type: "E" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Вихователь", type: "S" },
      { answer: "Художник по кераміці", type: "A" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Економіст", type: "C" },
      { answer: "Завідувач відділом", type: "E" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Коректор", type: "C" },
      { answer: "Критик", type: "A" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Завгосп", type: "C" },
      { answer: "Диригент", type: "A" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Радіооператор", type: "R" },
      { answer: "Спеціаліст з ядерної фізики", type: "I" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Налагоджувальник", type: "R" },
      { answer: "Монтажник", type: "R" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Агроном-насіннєвод", type: "R" },
      { answer: "Директор агрокомплексу", type: "E" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Закрійник-модельєр", type: "A" },
      { answer: "Декоратор", type: "A" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Археолог", type: "I" },
      { answer: "Експерт", type: "C" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Працівник музею", type: "S" },
      { answer: "Консультант", type: "E" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Учений", type: "I" },
      { answer: "Актор", type: "A" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Логопед", type: "S" },
      { answer: "Стенографіст", type: "C" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Лікар", type: "S" },
      { answer: "Дипломат", type: "E" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Головний бухгалтер", type: "C" },
      { answer: "Директор", type: "E" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Поет", type: "A" },
      { answer: "Психолог", type: "S" },
    ],
    multiSelect: false,
  },
  {
    question: "Оберіть бажану професію",
    options: [
      { answer: "Архіваріус", type: "C" },
      { answer: "Скульптор", type: "A" },
    ],
    multiSelect: false,
  },
];

module.exports = questions;
