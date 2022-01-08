import {
  IonButton,
  IonButtons,
  IonCard,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { checkmark } from "ionicons/icons";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Custumer from "./Custumer";
import { saveCustumer, searchCustumerById } from "./CustumerApp";

const CustumerEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();
  const [custumer, setCustumer] = useState<Custumer>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, []);

  const search = () => {
    debugger;
    if (id !== "new") {
      let res = searchCustumerById(id);
      setCustumer(res);
    }
    // let res = searchCustumers();
    // setClientes(res);
  };
  const save = () => {
    saveCustumer(custumer);
    history.push("/page/custumers");
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
            <IonTitle>
              {" "}
              {id === "new" ? "Agregar Cliente" : "Editar Cliente"}
            </IonTitle>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Nombre</IonLabel>
                  <IonInput
                    onIonChange={(e) => {
                      custumer.firstName = String(e.detail.value);
                    }}
                    value={custumer.firstName}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Apellidos</IonLabel>
                  <IonInput
                    onIonChange={(e) => {
                      custumer.lastName = String(e.detail.value);
                    }}
                    value={custumer.lastName}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Email</IonLabel>
                  <IonInput
                    onIonChange={(e) => {
                      custumer.email = String(e.detail.value);
                    }}
                    value={custumer.email}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>

              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Addres</IonLabel>
                  <IonInput
                    onIonChange={(e) => {
                      custumer.address = String(e.detail.value);
                    }}
                    value={custumer.address}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Telf</IonLabel>
                  <IonInput
                    onIonChange={(e) => {
                      custumer.telf = String(e.detail.value);
                    }}
                    value={custumer.telf}
                  >
                    {" "}
                  </IonInput>
                </IonItem>
              </IonCol>

              <IonCol></IonCol>
            </IonRow>

            <IonItem>
              <IonButton
                onClick={save}
                color="success"
                fill="solid"
                slot="end"
                size="default"
              >
                <IonIcon icon={checkmark} />
                Guardar
              </IonButton>
            </IonItem>
          </IonCard>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CustumerEdit;
