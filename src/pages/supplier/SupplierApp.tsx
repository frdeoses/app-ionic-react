import Supplier from "./Supplier";

export function searchSuppliers() {
  if (!localStorage["suppliers"]) {
    localStorage["suppliers"] = "[]";
  }
  let suppliers = localStorage["suppliers"];

  suppliers = JSON.parse(suppliers);

  return suppliers;
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

export function removeSupplier(id: string) {
  let suppliers = searchSuppliers();

  let indice = suppliers.findIndex((supplier: Supplier) => supplier.id == id);

  suppliers.splice(indice, 1);

  localStorage["suppliers"] = JSON.stringify(suppliers);
}

export function saveSupplier(supplier: Supplier) {
  let suppliers = searchSuppliers();

  if (supplier.id) {
    //Editar
    let indice = suppliers.findIndex((c: Supplier) => c.id == supplier.id);
    suppliers[indice] = supplier;
  } else {
    // Nuevo
    supplier.id = String(Math.round(Math.random() * 100000));
    suppliers.push(supplier);
  }

  localStorage["suppliers"] = JSON.stringify(suppliers);
}
export function searchSupplierById(id: string) {
  let suppliers = searchSuppliers();

  return suppliers.find((supplier: any) => {
    return supplier.id == id;
  });
}
