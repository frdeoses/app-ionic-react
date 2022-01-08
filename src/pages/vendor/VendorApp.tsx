import Vendor from "./Vendor";

export function searchVendors() {
  if (!localStorage["vendors"]) {
    localStorage["vendors"] = "[]";
  }
  let vendors = localStorage["vendors"];

  vendors = JSON.parse(vendors);

  return vendors;
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

export function removeVendor(id: string) {
  let vendors = searchVendors();

  let indice = vendors.findIndex((vendor: Vendor) => vendor.id == id);

  vendors.splice(indice, 1);

  localStorage["vendors"] = JSON.stringify(vendors);
}

export function saveVendor(vendor: Vendor) {
  let vendors = searchVendors();

  if (vendor.id) {
    //Editar
    let indice = vendors.findIndex((c: Vendor) => c.id == vendor.id);
    vendors[indice] = vendor;
  } else {
    // Nuevo
    vendor.id = String(Math.round(Math.random() * 100000));
    vendors.push(vendor);
  }

  localStorage["vendors"] = JSON.stringify(vendors);
}
export function searchVendorById(id: string) {
  let vendors = searchVendors();

  return vendors.find((vendor: any) => {
    return vendor.id == id;
  });
}
