import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { add, close, pencil } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Vendor from "./Vendor";
import { removeVendor, searchVendors } from "./VendorApp";

const VendorList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [clientes, setClientes] = useState<Vendor[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const remove = (id: string) => {
    removeVendor(id);
    search();
  };

  const search = () => {
    let res = searchVendors();
    setClientes(res);
  };

  const addVendor = () => {
    history.push("/page/vendor/new");
  };
  const editVendor = (id: string) => {
    debugger;
    history.push("/page/vendor/" + id);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonCard>
            <IonTitle>Gestión de Proveedores</IonTitle>

            <IonItem>
              <IonButton
                onClick={addVendor}
                color="primary"
                fill="solid"
                slot="end"
                size="default"
              >
                <IonIcon icon={add} />
                Agregar Proveedor
              </IonButton>
            </IonItem>

            <IonGrid className="table">
              <IonRow>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Teléfono</IonCol>
                <IonCol>Dirección</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>

              {clientes.map((cliente: Vendor) => (
                <IonRow>
                  <IonCol>
                    {cliente.firstName} {cliente.lastName}
                  </IonCol>
                  <IonCol>{cliente.email}</IonCol>
                  <IonCol>{cliente.telf}</IonCol>
                  <IonCol>{cliente.address}</IonCol>
                  <IonCol>
                    <IonButton
                      onClick={() => editVendor(String(cliente.id))}
                      color="primary"
                      fill="clear"
                    >
                      <IonIcon icon={pencil} slot="icon-only"></IonIcon>
                    </IonButton>
                    <IonButton
                      onClick={() => remove(String(cliente.id))}
                      color="danger"
                      fill="clear"
                    >
                      <IonIcon icon={close} slot="icon-only"></IonIcon>
                    </IonButton>
                  </IonCol>
                </IonRow>
              ))}
            </IonGrid>
          </IonCard>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default VendorList;
