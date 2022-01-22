import Supplier from "./Supplier";

export async function searchSuppliers() {
  let url = process.env.REACT_APP_API + "suppliers";
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();

  // if (!localStorage["supplier"]) {
  //   localStorage["supplier"] = "[]";
  // }
  // let supplier = localStorage["supplier"];

  // supplier = JSON.parse(supplier);

  // return supplier;
}

export async function removeSupplier(id: string) {
  let url = process.env.REACT_APP_API + "supplier/" + id;
  await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  //Para  Local en cache con la web
  // let supplier = await searchSupplier();
  // let indice = supplier.findIndex((supplier: Supplier) => supplier.id == id);
  // supplier.splice(indice, 1);
  // localStorage["supplier"] = JSON.stringify(supplier);
}

export async function saveSupplier(supplier: Supplier) {
  let url = process.env.REACT_APP_API + "supplier";
  await fetch(url, {
    method: "POST",
    body: JSON.stringify(supplier),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //Para  Local en cache con la web
  // let supplier = await searchSupplier();

  // if (supplier.id) {
  //   //Editar
  //   let indice = supplier.findIndex((c: Supplier) => c.id == supplier.id);
  //   supplier[indice] = supplier;
  // } else {
  //   // Nuevo
  //   supplier.id = String(Math.round(Math.random() * 100000));
  //   supplier.push(supplier);
  // }

  // localStorage["supplier"] = JSON.stringify(supplier);
}

export async function searchSupplierById(id: string) {
  let url = process.env.REACT_APP_API + "supplier/" + id;
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await response.json();

  //Para  Local en cache con la web
  // let supplier = await searchSupplier();

  // return supplier.find((supplier: any) => {
  //   return supplier.id == id;
  // });
}
