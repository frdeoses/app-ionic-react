import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Page from "./pages/Page";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import CustumerList from "./pages/custumer/CustumerList";
import CustumerEdit from "./pages/custumer/CustumerEdit";
import EmployeeList from "./pages/employee/EmployeeList";
import EmployeeEdit from "./pages/employee/EmployeeEdit";
import VendorEdit from "./pages/vendor/VendorEdit";
import VendorList from "./pages/vendor/VendorList";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Inbox" />
            </Route>

            <Route path="/page/custumers" exact={true}>
              <CustumerList></CustumerList>
            </Route>

            <Route path="/page/custumer/:id" exact={true}>
              <CustumerEdit></CustumerEdit>
            </Route>

            <Route path="/page/employees" exact={true}>
              <EmployeeList></EmployeeList>
            </Route>

            <Route path="/page/employee/:id" exact={true}>
              <EmployeeEdit></EmployeeEdit>
            </Route>

            <Route path="/page/vendors" exact={true}>
              <VendorList></VendorList>
            </Route>

            <Route path="/page/vendor/:id" exact={true}>
              <VendorEdit></VendorEdit>
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
