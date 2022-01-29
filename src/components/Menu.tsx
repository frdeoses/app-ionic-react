import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";
import {
  bookmarkOutline,
  carSharp,
  peopleCircle,
  peopleCircleOutline,
  personCircle,
} from "ionicons/icons";
import { useLocation } from "react-router-dom";
import LogoImg from "../images/logo.png";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Clientes",
    url: "/page/custumers",
    iosIcon: peopleCircleOutline,
    mdIcon: peopleCircle,
  },
  {
    title: "Empleados",
    url: "/page/employees",
    iosIcon: personCircle,
    mdIcon: personCircle,
  },
  {
    title: "Proveedores",
    url: "/page/suppliers",
    iosIcon: carSharp,
    mdIcon: carSharp,
  },
];

const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
            <IonImg src={LogoImg} />
          </IonListHeader>

          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
