import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import * as maptilersdk from '@maptiler/sdk';
import { useDispatch, useSelector } from 'react-redux';
import { MarkerContent, MarkerDetails } from '.';
import { startLoading, stopLoading } from '../store/slices/loaderSlice';

const MapComponent = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [activePopup, setActivePopup] = useState(null);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  // Create a marker with a popup
  const createMarker = (point) => {
    const markerElement = document.createElement('div');
    markerElement.className = `marker-content ${darkMode ? 'dark' : ''}`;

    const popupElement = document.createElement('div');
    popupElement.className = `popup-content ${darkMode ? 'dark' : ''}`;

    const markerRoot = ReactDOM.createRoot(markerElement);
    const popupRoot = ReactDOM.createRoot(popupElement);

    markerRoot.render(<MarkerContent title={point.title} type={point.type} expanded={false} />);
    popupRoot.render(
      <MarkerDetails title={point.title} description={point.description} image={point.image} />
    );

    const marker = new maptilersdk.Marker({ element: markerElement })
      .setLngLat(point.coordinates)
      .addTo(map.current)
      .setPopup(new maptilersdk.Popup({ offset: 25 }).setDOMContent(popupElement));

    markerElement.addEventListener('click', () => {
      if (activePopup && activePopup !== marker) {
        activePopup.removePopup();
      }
      setActivePopup(marker);
    });

    return marker;
  };

  // Get the user's current location and set it as the map center
  const setUserLocation = () => {
    if (navigator.geolocation) {
      dispatch(startLoading());
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.current.setCenter([longitude, latitude]); 
          dispatch(stopLoading());
        },
        (error) => {
          console.error('Error getting current location:', error);
          dispatch(stopLoading());
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    if (map.current) return;

    maptilersdk.config.apiKey = '4JrXZ3lSPxI1fox8UN0N';

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [85.84295354783535, 20.266959640908762], 
      zoom: 18,
      pitch: 60,
      bearing: -30,
    });

    map.current.on('styleimagemissing', (e) => {
      console.warn(`Missing image: ${e.id}`);
    });

    map.current.on('load', () => {
      setUserLocation(); 

      const points =[
        {
          "coordinates": [85.84405727684498, 20.267414119900707],
          "title": "A/C waiting hall",
          "type": "waiting-hall",
          "description": "Ac waiting hall",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84266319870949, 20.26720999766692],
          "title": "Auto taxi stand",
          "type": "taxi-stand",
          "description": "Auto taxi stand",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84273260086775, 20.265459379008057],
          "title": "Cloak room",
          "type": "cloak-room",
          "description": "Cloak room",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.8437867090106, 20.26663977496542],
          "title": "Drinking water",
          "type": "drinking-water",
          "description": "Drinking water",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.8439302071929, 20.267234530091347],
          "title": "First class waiting hall",
          "type": "waiting-hall",
          "description": "Waiting hell premium",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84382995963097, 20.26717508613317],
          "title": "Food plaza",
          "type": "food-plaza",
          "description": "Food plaza",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84351178258657, 20.265498694232452],
          "title": "IRCTC food plaza",
          "type": "food-plaza",
          "description": "IRCTC food plaza",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84374144673347, 20.267106206597603],
          "title": "IRCTC Retaining room",
          "type": "retaining-room",
          "description": "IRCTC Retaining room",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84334716200829, 20.26674167923133],
          "title": "Medicine store",
          "type": "medicine-store",
          "description": "",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84377966821194, 20.26712444866936],
          "title": "Mio amior",
          "type": "store",
          "description": "",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84324825555086, 20.266655500936743],
          "title": "New ticket counter",
          "type": "ticket-counter",
          "description": "",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84356106817722, 20.26693259229011],
          "title": "Panjab national bank ATM",
          "type": "atm",
          "description": "Panjab national bank ATM",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84368277341127, 20.266170511247633],
          "title": "Platform 2 and 3",
          "type": "platform",
          "description": "Platform 2 and 3",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84284760057926, 20.265593365251952],
          "title": "Platform no 1",
          "type": "platform",
          "description": "Platform 1",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84370087832212, 20.266640404004306],
          "title": "Quick RO service",
          "type": "ro-service",
          "description": "Ro service",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84391813725233, 20.26698637500395],
          "title": "Railway ludge",
          "type": "lodge",
          "description": "Railway ludge official",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84242079406977, 20.265599026639983],
          "title": "Railway mail service post office",
          "type": "post-office",
          "description": "Railway mail service",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84438383579254, 20.267844065237295],
          "title": "Railway parcel office",
          "type": "parcel-office",
          "description": "Railway parcel office",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84313526749611, 20.26629285963254],
          "title": "Railway police station",
          "type": "police-station",
          "description": "Railway police station",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.8433485031128, 20.26648912007932],
          "title": "Railway retiring room",
          "type": "retiring-room",
          "description": "Railway retaining room",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84296595305204, 20.265340489708866],
          "title": "Railway station new fob",
          "type": "station",
          "description": "New fob",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84383230656385, 20.266692299703422],
          "title": "Railway station platform no 1",
          "type": "platform",
          "description": "Railway platform no 1",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84361739456654, 20.266605492342407],
          "title": "Railway station retiring room",
          "type": "retiring-room",
          "description": "Retiring room",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84279362112284, 20.2665189994525],
          "title": "Railway ticket counter 1(old)",
          "type": "ticket-counter",
          "description": "Ticket counter 1",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84345947951078, 20.26686968850757],
          "title": "State Bank of India ATM",
          "type": "atm",
          "description": "State Bank atm",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84355503320694, 20.265351183459074],
          "title": "Ticket counter 2 (new)",
          "type": "ticket-counter",
          "description": "New ticket counter 2",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84174018353224, 20.26671368701681],
          "title": "Town Bus terminal",
          "type": "bus-terminal",
          "description": "Town Bus terminal",
          "image": "https://example.com/path-to-image.jpg"
        },
        {
          "coordinates": [85.84295354783535, 20.266959640908762],
          "title": "Washroom",
          "type": "washroom",
          "description": "Washroom",
          "image": "https://example.com/path-to-image.jpg"
        }
      ]
      
      const createdMarkers = points.map((point) => createMarker(point));
      setMarkers(createdMarkers);
    });

    const updateMarkerSizes = () => {
      const zoomLevel = map.current.getZoom();
      const scale = zoomLevel > 14 ? 1.5 : 1;
      markers.forEach((marker) => {
        const element = marker.getElement();
        element.style.transform = `scale(${scale})`;
      });
    };

    map.current.on('zoom', updateMarkerSizes);
    map.current.on('moveend', updateMarkerSizes);

    return () => {
      map.current.off('zoom', updateMarkerSizes);
      map.current.off('moveend', updateMarkerSizes);
    };
  }, [darkMode]);

  return (
    <div ref={mapContainer} className={`w-full h-screen ${darkMode ? 'dark' : ''}`} />
  );
};

export default MapComponent;
