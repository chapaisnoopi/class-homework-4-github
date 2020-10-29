define(function (require) {
  const Worker = require('./worker');

  const Company = function (activity) {
    this.activity = activity;
    this.workers = [];
    this.numWorkers = 0;
  };

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
  };

  return Company;
});
