import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import * as maptilersdk from "@maptiler/sdk";
import { useDispatch, useSelector } from "react-redux";
import { MarkerContent, MarkerDetails } from ".";
import { startLoading, stopLoading } from "../store/slices/loaderSlice";
import { points } from "../constants";

const MapComponent = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [activePopup, setActivePopup] = useState(null);
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  const createMarker = (point) => {
    const markerElement = document.createElement("div");
    markerElement.className = `marker-content ${darkMode ? "dark" : ""}`;

    const popupElement = document.createElement("div");
    popupElement.className = `popup-content ${darkMode ? "dark" : ""}`;

    const markerRoot = ReactDOM.createRoot(markerElement);
    const popupRoot = ReactDOM.createRoot(popupElement);

    markerRoot.render(
      <MarkerContent title={point.title} type={point.type} expanded={false} />
    );
   
    popupRoot.render(
      <MarkerDetails
        title={point.title}
        description={point.description}
        latitude={point.coordinates[1]}
        longitude={point.coordinates[0]}
      />
    );

    const marker = new maptilersdk.Marker({ element: markerElement })
      .setLngLat(point.coordinates)
      .addTo(map.current)
      .setPopup(
        new maptilersdk.Popup({ offset: 25 }).setDOMContent(popupElement)
      );

    markerElement.addEventListener("click", () => {
      if (activePopup && activePopup !== marker) {
        activePopup.removePopup();
      }
      setActivePopup(marker);
    });

    return marker;
  };

  const setUserLocation = () => {
    if (navigator.geolocation) {
      dispatch(startLoading());
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.current.setCenter([longitude, latitude]);

          const userMarker = new maptilersdk.Marker({ color: "blue" })
            .setLngLat([longitude, latitude])
            .addTo(map.current)
            .setPopup(
              new maptilersdk.Popup({ offset: 25 }).setHTML("<p>You are here</p>")
            );

          userMarker.getElement().click();
          dispatch(stopLoading());
        },
        (error) => {
          console.error("Error getting current location:", error);
          dispatch(stopLoading());
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (map.current) return;

    maptilersdk.config.apiKey = "4JrXZ3lSPxI1fox8UN0N";
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [85.84295354783535, 20.266959640908762],
      zoom: 18,
      pitch: 60,
      bearing: -30,
    });

    map.current.on("styleimagemissing", (e) => {
      console.warn(`Missing image: ${e.id}`);
    });

    map.current.on("load", () => {
      setUserLocation();

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

    map.current.on("zoom", updateMarkerSizes);
    map.current.on("moveend", updateMarkerSizes);

    return () => {
      map.current.off("zoom", updateMarkerSizes);
      map.current.off("moveend", updateMarkerSizes);
    };
  }, [darkMode]);

  return (
    <div ref={mapContainer} className={`w-full h-screen ${darkMode ? "dark" : ""}`} />
  );
};

export default MapComponent;
