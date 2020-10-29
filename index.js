'use strict';

let students = [];
let workersWithOutJob = [];

function Student(firstName, lastName, university, scoreAverage) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.university = university;
  this.scoreAverage = scoreAverage;
}

Student.prototype.getBaseInfo = function () {
  console.log(
    `${this.firstName} ${this.lastName} закінчив(ла) ${this.university}, середній бал: ${this.scoreAverage}`
  );
};

function Worker(firstName, lastName, university, scoreAverage, profession) {
  Student.apply(this, arguments);
  this.workingStatus = true;
  this.profession = profession;
  this.salary = 0;
  this.history = [];
}

Worker.prototype = Object.create(Student.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.getWorkingInfo = function () {
  const history = this.history.map((job, i) => {
    const start = job.startTime.toLocaleDateString();
    const finish = job.finishTime
      ? job.finishTime.toLocaleDateString()
      : 'ще працює';
    return `${i + 1}: ${
      job.profession
    }, Початок: ${start}, Закінчення: ${finish}`;
  });
  console.log(`---------------------------------------`);
  console.log(`${this.firstName} ${this.lastName}`);
  console.log(`Професія: ${this.profession}`);
  console.log(`Історія праці:\n ${history.join('\n ')}`);
};

function Company(activity) {
  this.activity = activity;
  this.workers = [];
  this.numWorkers = 0;
}

Company.prototype.setSalaryForWorker = function (
  firstName,
  lastName,
  salarySet
) {
  const workerIndex = this.workers.findIndex(
    (el) => el.firstName === firstName && el.lastName === lastName
  );
  if (workerIndex + 1) {
    const coef =
      +workers[worker].university.slice(-2) + workers[worker].scoreAverage;
    workers[workerIndex].salary = (salarySet * coef) / 100;
  }
};

Company.prototype.hire = function (instanceStudent, profession) {
  const worker = new Worker(...Object.values(instanceStudent), profession);
  const job = {
    startTime: new Date(),
    profession: profession,
    company: this.activity,
  };
  worker.history.push(job);
  this.workers.push(worker);
  this.numWorkers = this.workers.length;
};

Company.prototype.hireWorker = function (profession) {
  const worker = workersWithOutJob.pop();
  const job = {
    startTime: new Date(),
    profession: profession,
    company: this.activity,
  };
  worker.profession = profession;
  worker.history.push(job);
  this.workers.push(worker);
  this.numWorkers = this.workers.length;
};

Company.prototype.fire = function (firstName, lastName) {
  const workerIndex = this.workers.findIndex(
    (el) => el.firstName === firstName && el.lastName === lastName
  );
  if (workerIndex + 1) {
    this.workers[workerIndex].history.slice(-1)[0].finishTime = new Date();
    this.workers[workerIndex].profession = 'непрацюючий(ча)';
    this.workers[workerIndex].salary = 0;
    workersWithOutJob.push(this.workers[workerIndex]);
    this.workers.splice(workerIndex, 1);
    this.numWorkers = this.workers.length;
  }
};

Company.prototype.close = function () {
  this.workers.forEach((worker) => {
    worker.history.slice(-1)[0].finishTime = new Date();
    worker.profession = 'непрацюючий(ча)';
    worker.salary = 0;
  });
  workersWithOutJob.push(...this.workers);
  this.workers = [];
  this.close = new Date();
  this.numWorkers = this.workers.length;
};

Company.prototype.hireNumStudentsCompany = function (num, profession) {
  students.sort((a, b) => b.scoreAverage - a.scoreAverage);
  students.splice(0, num).forEach((student) => {
    this.hire(student, profession);
  });
}
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
