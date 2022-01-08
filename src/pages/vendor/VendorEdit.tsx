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
import Vendor from "./Vendor";
import { saveVendor, searchVendorById } from "./VendorApp";

const VendorEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();
  const [vendor, setVendor] = useState<Vendor>({});
  const history = useHistory();

  useEffect(() => {
    search();
  }, []);

  const search = () => {
    debugger;
    if (id !== "new") {
      let res = searchVendorById(id);
      setVendor(res);
    }
    // let res = searchVendors();
    // setClientes(res);
  };
  const save = () => {
    saveVendor(vendor);
    history.push("/page/vendors");
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
              {id === "new" ? "Agregar Proveedor" : "Editar Proveedor"}
            </IonTitle>

            <IonRow>
              <IonCol>
                <IonItem>
                  <IonLabel position="stacked">Nombre</IonLabel>
                  <IonInput
                    onIonChange={(e) => {
                      vendor.firstName = String(e.detail.value);
                    }}
                    value={vendor.firstName}
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
                      vendor.lastName = String(e.detail.value);
                    }}
                    value={vendor.lastName}
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
                      vendor.email = String(e.detail.value);
                    }}
                    value={vendor.email}
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
                      vendor.address = String(e.detail.value);
                    }}
                    value={vendor.address}
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
                      vendor.telf = String(e.detail.value);
                    }}
                    value={vendor.telf}
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

export default VendorEdit;
