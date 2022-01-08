export function searchCustumers() {
  if (!localStorage["custumers"]) {
    localStorage["custumers"] = "[]";
  }
  let custumers = localStorage["custumers"];

  custumers = JSON.parse(custumers);

  return custumers;
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

export function removeCustumer(id: string) {
  let custumers = searchCustumers();

  let indice = custumers.findIndex((custumer: any) => custumer.id == id);

  custumers.splice(indice, 1);

  localStorage["custumers"] = JSON.stringify(custumers);
}

export function saveCustumer(custumer: any) {
  let custumers = searchCustumers();

  debugger;

  if (custumer.id) {
    //Editar
    let indice = custumers.findIndex((c: any) => c.id == custumer.id);
    custumers[indice] = custumer;
  } else {
    // Nuevo
    custumer.id = Math.round(Math.random() * 100000);
    custumers.push(custumer);
  }

  localStorage["custumers"] = JSON.stringify(custumers);
}
export function searchCustumerById(id: string) {
  let custumers = searchCustumers();

  return custumers.find((custumer: any) => {
    return custumer.id == id;
  });
}
