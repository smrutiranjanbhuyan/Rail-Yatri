import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client'; 
import "@maptiler/sdk/dist/maptiler-sdk.css";
import * as maptilersdk from '@maptiler/sdk';
import { useDispatch, useSelector } from 'react-redux'; 
import {MarkerContent, MarkerDetails} from '.';
import { startLoading, stopLoading } from '../store/slices/loaderSlice'; 
const MapComponent = () => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [markers, setMarkers] = useState([]);
    const [activePopup, setActivePopup] = useState(null);
    const darkMode = useSelector((state) => state.darkMode.darkMode); 
    const dispatch = useDispatch(); 
    const createMarker = (point) => {
        const markerElement = document.createElement('div');
        markerElement.className = `marker-content ${darkMode ? 'dark' : ''}`; 

        const popupElement = document.createElement('div');
        popupElement.className = `popup-content ${darkMode ? 'dark' : ''}`; 

        const markerRoot = ReactDOM.createRoot(markerElement);
        const popupRoot = ReactDOM.createRoot(popupElement);

        markerRoot.render(<MarkerContent title={point.title} type={point.type} expanded={false} />);
        popupRoot.render(
            <MarkerDetails 
                title={point.title}
                description={point.description}
                image={point.image}
            />
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

    useEffect(() => {
        if (map.current) return;

        maptilersdk.config.apiKey = '4JrXZ3lSPxI1fox8UN0N';

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [85.801652038434, 20.254346910123633],
            zoom: 18,
            pitch: 90, 
            bearing: -30,
        });

 
        if (darkMode) {
            mapContainer.current.classList.add('dark');
            map.current.setStyle(maptilersdk.MapStyle.DARK);
        } else {
            mapContainer.current.classList.remove('dark');
            map.current.setStyle(maptilersdk.MapStyle.STREETS);
        }

        map.current.on('styleimagemissing', (e) => {
            console.warn(`Missing image: ${e.id}`);
        });

        map.current.on('load', () => {
            const points = [
                {
                    coordinates: [85.80145891938753, 20.25451990941999],
                    title: 'Tea Stall 1',
                    type: 'tea-stall',
                    description: 'A popular tea stall known for its delicious masala chai and snacks.',
                    image: 'https://images.unsplash.com/photo-1548084458-5a0b59a6e9ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlYSUyMHN0YWxs&ixlib=rb-1.2.1&q=80&w=400'
                },
                {
                    coordinates: [85.80177843733026, 20.254570802391434],
                    title: 'Bookstore 1',
                    type: 'bookstore',
                    description: 'A charming bookstore with a wide selection of books and a cozy reading corner.',
                    image: 'https://images.unsplash.com/photo-1555685818-8c9c9b5e96a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJvb2tzdG9yZSUyMG9uZSUyMGFuZCBib29rcyUyMHR3byUyMHRlYSUyMGJvb2tzdG9yZSUyMGZvc3RlcnMlMjBhbmQlMjB0aGVpciUyMGV4cGxvcmF0aW9ucyUyQyUyMHdpdGglMjBhIHJhbmdlIG9mIGJvb2tzJTIwYW5kJTIwYm9va3Mu&ixlib=rb-1.2.1&q=80&w=400'
                },
                {
                    coordinates: [85.802038, 20.255012],
                    title: 'Shop 1',
                    type: 'shop',
                    description: 'A local shop offering a variety of household items and groceries.',
                    image: 'https://images.unsplash.com/photo-1565118462-df8b934fa21e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDk2fHxzaG9wJTIwYW5kJTIwd2FsbHMlMjBhbmQlMjBjb25jZXB0cyUyMGFuZCUyMG1vcm5pbmclMjBpdGVtcyUyMGF0JTIwYSUyMGxvY2FsJTIwc2hvcCUyMHdpdGglMjBhIGJvbmNvbnBvc3Qu&ixlib=rb-1.2.1&q=80&w=400'
                },
            ];
            

            const createdMarkers = points.map(point => createMarker(point));
            setMarkers(createdMarkers);
        });

        const updateMarkerSizes = () => {
            const zoomLevel = map.current.getZoom();
            const scale = zoomLevel > 14 ? 1.5 : 1;
            markers.forEach(marker => {
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
        <div 
            ref={mapContainer}
            className={`w-full h-screen ${darkMode ? 'dark' : ''}`} 
        />
    );
};

export default MapComponent;
