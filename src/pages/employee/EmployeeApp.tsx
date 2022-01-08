import Employee from "./Employee";

export function searchEmployees() {
  if (!localStorage["employees"]) {
    localStorage["employees"] = "[]";
  }
  let employees = localStorage["employees"];

  employees = JSON.parse(employees);

  return employees;
  //   const datosEjemplo = [
  //     {
  //       id: "1",
  //       firstName: "Fran",
  //       lastName: "boni",
  //       email: "fran@test.com",
  //       telf: "658741527",
  //       address: "C/ pastillas",
  //     },
  //     {
  //       id: "2",
  //       firstName: "Maria",
  //       lastName: "Castro",
  //       email: "maria@test.com",
  //       telf: "547851234",
  //       address: "C/ torre",
  //     },
  //   ];
}

export function removeEmployee(id: string) {
  let employees = searchEmployees();

  let indice = employees.findIndex((employee: Employee) => employee.id == id);

  employees.splice(indice, 1);

  localStorage["employees"] = JSON.stringify(employees);
}

export function saveEmployee(employee: Employee) {
  let employees = searchEmployees();

  if (employee.id) {
    //Editar
    let indice = employees.findIndex((c: Employee) => c.id == employee.id);
    employees[indice] = employee;
  } else {
    // Nuevo
    employee.id = String(Math.round(Math.random() * 100000));
    employees.push(employee);
  }

  localStorage["employees"] = JSON.stringify(employees);
}
export function searchEmployeeById(id: string) {
  let employees = searchEmployees();

  return employees.find((employee: any) => {
    return employee.id == id;
  });
}
