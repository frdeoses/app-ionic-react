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
import { removeCustumer, saveCustumer, searchCustumers } from "./CustumerApp";

const CustumerList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [clientes, setClientes] = useState<any>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

  const pruebaLocalStrorage = () => {
    const datosEjemplo = {
      id: "1",
      firstName: "Fran",
      lastName: "boni",
      email: "fran@test.com",
      telf: "658741527",
      address: "C/ pastillas",
    };
    saveCustumer(datosEjemplo);
  };

  const remove = (id: string) => {
    removeCustumer(id);
    search();
  };

  const search = () => {
    let res = searchCustumers();
    setClientes(res);
  };

  const addCustumer = () => {
    history.push("/page/custumer/new");
  };
  const editCustumer = (id: string) => {
    debugger;
    history.push("/page/custumer/" + id);
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
            <IonTitle>Gestión de Clientes</IonTitle>

            <IonItem>
              <IonButton
                onClick={addCustumer}
                color="primary"
                fill="solid"
                slot="end"
                size="default"
              >
                <IonIcon icon={add} />
                Agregar Cliente
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

              {clientes.map((cliente: any) => (
                <IonRow>
                  <IonCol>
                    {cliente.firstName} {cliente.lastName}
                  </IonCol>
                  <IonCol>{cliente.email}</IonCol>
                  <IonCol>{cliente.telf}</IonCol>
                  <IonCol>{cliente.address}</IonCol>
                  <IonCol>
                    <IonButton
                      onClick={() => editCustumer(cliente.id)}
                      color="primary"
                      fill="clear"
                    >
                      <IonIcon icon={pencil} slot="icon-only"></IonIcon>
                    </IonButton>
                    <IonButton
                      onClick={() => remove(cliente.id)}
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

          <IonButton onClick={pruebaLocalStrorage} color="danger" fill="clear">
            Prubea Local Storage
          </IonButton>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CustumerList;
