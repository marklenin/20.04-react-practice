import React, { useState } from "react";

function Employees() {
  let employees = [
    { name: "SALAMAT", surname: "BAIKE", days: 20, salaryPerDay: 80, key: 1 },
    { name: "Dastan", surname: "aaa", days: 15, salaryPerDay: 40, key: 2 },
    { name: "Emir", surname: "bbb", days: 22, salaryPerDay: 60, key: 3 },
    { name: "Sheraman", surname: "ccc", days: 15, salaryPerDay: 55, key: 4 },
    { name: "Albina", surname: "kkk", days: 18, salaryPerDay: 44, key: 5 },
    { name: "Azret", surname: "hhh", days: 10, salaryPerDay: 22, key: 6 },
    { name: "Mirdin", surname: "Agai", days: 20, salaryPerDay: 70, key: 7 },
    { name: "Bayish", surname: "zzz", days: 16, salaryPerDay: 33, key: 8 },
    {
      name: "Adilet",
      surname: "Gazybekov",
      days: 11,
      salaryPerDay: 16,
      key: 9,
    },
    { name: "Aidana", surname: "pppp", days: 5, salaryPerDay: 28, key: 10 },
    { name: "Ilim", surname: "ttt", days: 12, salaryPerDay: 72, key: 11 },
  ];

  const [workers, setWorkers] = useState(employees);

  const [total, setTotal] = useState(0);

  let sum = [];

  function SumAll(a, b) {
    let c = a * b;
    sum.push(c);
    return c;
  }

  function setNewDay(value, key, index) {
    // console.log(value, index);
    let a = workers.filter((elem) => elem.key === key);
    console.log(a);
    a[0].days = +value;
    // console.log(a);
    setWorkers(workers);
    SumAll();
    SumAll();
    console.log(workers);
  }
  // console.log(workers);
  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Work days</th>
            <th>Salary per day</th>
            <th>Total salary</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((elem, index) => (
            <tr>
              <td>{elem.name}</td>
              <td>{elem.surname}</td>
              <td>
                <input
                  type="text"
                  defaultValue={elem.days}
                  onChange={(e) => setNewDay(e.target.value, elem.key, index)}
                />
              </td>
              <td>
                <input
                  type="text"
                  defaultValue={elem.salaryPerDay}
                  // onChange={(e) => setNewDay(e.target.value, elem.key, index)}
                />
              </td>
              <td>{SumAll(elem.days, elem.salaryPerDay)}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>{sum.reduce((a, c) => a + c)}</h1>
    </div>
  );
}

export default Employees;
