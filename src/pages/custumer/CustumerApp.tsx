import Custumer from "./Custumer";

export async function searchCustumers() {
  let url = process.env.REACT_APP_API + "custumers";
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();

  // if (!localStorage["custumers"]) {
  //   localStorage["custumers"] = "[]";
  // }
  // let custumers = localStorage["custumers"];

  // custumers = JSON.parse(custumers);

  // return custumers;
}

export async function removeCustumer(id: string) {
  let url = process.env.REACT_APP_API + "custumers/" + id;
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  //Para  Local en cache con la web
  // let custumers = await searchCustumers();
  // let indice = custumers.findIndex((custumer: Custumer) => custumer.id == id);
  // custumers.splice(indice, 1);
  // localStorage["custumers"] = JSON.stringify(custumers);
}

export async function saveCustumer(custumer: Custumer) {
  debugger;
  let url = process.env.REACT_APP_API + "custumers";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(custumer),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //Para  Local en cache con la web
  // let custumers = await searchCustumers();

  // if (custumer.id) {
  //   //Editar
  //   let indice = custumers.findIndex((c: Custumer) => c.id == custumer.id);
  //   custumers[indice] = custumer;
  // } else {
  //   // Nuevo
  //   custumer.id = String(Math.round(Math.random() * 100000));
  //   custumers.push(custumer);
  // }

  // localStorage["custumers"] = JSON.stringify(custumers);
}

export async function searchCustumerById(id: string) {
  let url = process.env.REACT_APP_API + "custumers/" + id;
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();

  //Para  Local en cache con la web
  // let custumers = await searchCustumers();

  // return custumers.find((custumer: any) => {
  //   return custumer.id == id;
  // });
}
