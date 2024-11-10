import { YMaps, Map } from '@pbe/react-yandex-maps';
import { contactsData } from '../../data/contactsData';

const API_KEY=process.env.REACT_APP_YMAPS_APIKEY;

const COORDINATES = [contactsData.lat, contactsData.lon];
const defaultState = { center: COORDINATES, zoom: 9 }

export const YmapsComponent = () => (
  <YMaps query={{ apikey: API_KEY }}>
    <div>
      My awesome application with maps!
      <Map defaultState={defaultState} />
    </div>
  </YMaps>
);
