import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { contactsData } from '../../data/contactsData';
import { useState } from 'react';
import MAP_IMAGE from '../../assets/map.webp';

const API_KEY = process.env.REACT_APP_YMAPS_APIKEY;

interface YMapsProps {
  className?: string;
}

export const MapComponent = ({ className = '' }: YMapsProps) => {
  const [isMapLoaded, setMapIsLoaded] = useState(true);

  const MAP_DEFAULT_STATE = { 
    center: [contactsData.lat, contactsData.lon], 
    zoom: 9,
  };

  const PLACEMARK_OPTIONS = {
    iconLayout: 'default#image',
    iconImageHref: '/logo192.png',
    iconImageSize: [40, 40],
    iconImageOffset: [-20, -20],
    iconContentOffset: [10, 10],
  };

  const PLACEMARK_PROPERTIES = {
    hintContent: 'Мы здесь!',
    balloonContent: contactsData.address,
  };

  return (
    <>
    {isMapLoaded ?
      <YMaps query={{ apikey: API_KEY }}>
        <Map 
        defaultState={MAP_DEFAULT_STATE} 
        className={className} 
        options={{ autoFitToViewport: 'always' }}
        onError={() => setMapIsLoaded(false)}
        >
        <Placemark
        geometry={[contactsData.lat, contactsData.lon]}
        options={PLACEMARK_OPTIONS}
        properties={PLACEMARK_PROPERTIES}
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
        />
        </Map>
      </YMaps>
    : 
    <img width={200} src={MAP_IMAGE} alt="Карта" />
  }
  </>
  );
};
