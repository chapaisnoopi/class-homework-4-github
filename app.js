requirejs.config({
  baseUrl: 'require',
  paths: {
    app: '../app',
  },
});

('use strict');
let students = [];
let workersWithOutJob = [];

define(function (require) {
  const Student = require('app/student');
  const Worker = require('app/worker');
  const Company = require('app/company');

  students.push(
    new Student('Петро', 'Петренко', 'ВНЗ_01', 6.5),
    new Student('Андре', 'Андренко', 'ВНЗ_02', 9.5),
    new Student('Васел', 'Василець', 'ВНЗ_03', 8.5),
    new Student('Остап', 'Остапець', 'ВНЗ_01', 8.4),
    new Student('Ішван', 'Іваненко', 'ВНЗ_05', 7.2),
    new Student('Роман', 'Романець', 'ВНЗ_01', 6.3),
    new Student('Павло', 'Павленко', 'ВНЗ_02', 5.2),
    new Student('Сердж', 'Сергійко', 'ВНЗ_05', 5.1),
    new Student('Артем', 'Артимець', 'ВНЗ_02', 6.6),
    new Student('Йосип', 'Йосипець', 'ВНЗ_01', 6.9),
    new Student('Ксеня', 'Петренко', 'ВНЗ_02', 4.0),
    new Student('Марія', 'Андренко', 'ВНЗ_03', 7.5),
    new Student('Марта', 'Василець', 'ВНЗ_04', 8.6),
    new Student('Надія', 'Остапець', 'ВНЗ_03', 9.4),
    new Student('Настя', 'Іваненко', 'ВНЗ_05', 9.1),
    new Student('Ольга', 'Романець', 'ВНЗ_02', 6.2),
    new Student('Жанна', 'Павленко', 'ВНЗ_04', 7.6),
    new Student('Ірина', 'Сергійко', 'ВНЗ_03', 9.3),
    new Student('Стефа', 'Артимець', 'ВНЗ_01', 8.9),
    new Student('Уляна', 'Йосипець', 'ВНЗ_01', 7.5)
  );

  const company01 = new Company('Програмування');
  const company02 = new Company('Тестування');
  console.log(company01);
  console.log(company02);

  company01.hireNumStudentsCompany(5, 'Фронтенд');
  company02.hireNumStudentsCompany(5, 'Бекенд');
  console.log(company01);
  console.log(company02);

  company01.fire('Стефа', 'Артимець');
  company01.fire('Надія', 'Остапець');
  company02.hireWorker('Фронтенд');

  company01.close();

  console.log(students);
  console.log(workersWithOutJob);

  console.log(company01);
  console.log(company02);

  console.log(workersWithOutJob);

  workersWithOutJob.forEach((worker) => {
    worker.getWorkingInfo();
  });
  company02.workers.forEach((worker) => {
    worker.getWorkingInfo();
  });
});
