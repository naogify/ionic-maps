import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { GeoloniaMap } from '@geolonia/embed-react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <GeoloniaMap
          apiKey="YOUR-API-KEY"
          style={{height: "100%", width: "100%"}}
          lat="35.681236"
          lng="139.767125"
          zoom="16"
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
