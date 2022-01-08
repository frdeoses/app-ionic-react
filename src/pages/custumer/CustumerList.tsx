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
import Custumer from "./Custumer";
import { removeCustumer, saveCustumer, searchCustumers } from "./CustumerApp";

const CustumerList: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [clientes, setClientes] = useState<Custumer[]>([]);
  const history = useHistory();

  useEffect(() => {
    search();
  }, [history.location.pathname]);

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

              {clientes.map((cliente: Custumer) => (
                <IonRow>
                  <IonCol>
                    {cliente.firstName} {cliente.lastName}
                  </IonCol>
                  <IonCol>{cliente.email}</IonCol>
                  <IonCol>{cliente.telf}</IonCol>
                  <IonCol>{cliente.address}</IonCol>
                  <IonCol>
                    <IonButton
                      onClick={() => editCustumer(String(cliente.id))}
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

export default CustumerList;
