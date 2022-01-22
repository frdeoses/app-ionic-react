import Employee from "./Employee";

export async function searchEmployees() {
  let url = process.env.REACT_APP_API + "employees";
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();

  // if (!localStorage["employees"]) {
  //   localStorage["employees"] = "[]";
  // }
  // let employees = localStorage["employees"];

  // employees = JSON.parse(employees);

  // return employees;
}

export async function removeEmployee(id: string) {
  let url = process.env.REACT_APP_API + "employee/" + id;
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  //Para  Local en cache con la web
  // let employees = await searchEmployees();
  // let indice = employees.findIndex((employee: Employee) => employee.id == id);
  // employees.splice(indice, 1);
  // localStorage["employees"] = JSON.stringify(employees);
}

export async function saveEmployee(employee: Employee) {
  let url = process.env.REACT_APP_API + "employee";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(employee),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //Para  Local en cache con la web
  // let employees = await searchEmployees();

  // if (employee.id) {
  //   //Editar
  //   let indice = employees.findIndex((c: Employee) => c.id == employee.id);
  //   employees[indice] = employee;
  // } else {
  //   // Nuevo
  //   employee.id = String(Math.round(Math.random() * 100000));
  //   employees.push(employee);
  // }

  // localStorage["employees"] = JSON.stringify(employees);
}

export async function searchEmployeeById(id: string) {
  let url = process.env.REACT_APP_API + "employee/" + id;
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();

  //Para  Local en cache con la web
  // let employees = await searchEmployees();

  // return employees.find((employee: any) => {
  //   return employee.id == id;
  // });
}
