import React, { useEffect, useRef, useState } from "react";
import { REACT_APP_GOOGLE_MAPS_KEY } from "../utils/Google_map_key";
import { MdLocationPin } from "react-icons/md";
// Async function to load the Google Maps script
const loadScript = async (url) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.async = false;

    script.onload = () => resolve();
    script.onerror = (error) => reject(error);

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  });
};

const SearchLocationInput = ({ setSelectedLocation = () => {} }) => {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  useEffect(() => {
    const initAutocomplete = async () => {
      try {
        // Wait for the Google Maps script to load
        await loadScript(`https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLE_MAPS_KEY}&libraries=places`);

        // Define autoComplete within this scope
        const autoComplete = new window.google.maps.places.Autocomplete(
          autoCompleteRef.current,
          { componentRestrictions: { country: "PK" } }
        );

        autoComplete.addListener("place_changed", () => {
          const addressObject = autoComplete.getPlace();
          const query = addressObject.formatted_address;
          setQuery(query); // Directly set the query state
          console.log({ query });

          const latLng = {
            lat: addressObject?.geometry?.location?.lat(),
            lng: addressObject?.geometry?.location?.lng(),
          };
          setSelectedLocation(latLng);
          console.log({ latLng });
        });
      } catch (error) {
        console.error("Error loading Google Maps script", error);
      }
    };

    initAutocomplete();
  }, []);

  return (
    <div className="search-location-input relative">
      <label className="block text-sm font-medium text-textColor">Vehicle Location</label>
      <input
        ref={autoCompleteRef}
        className="outline-none bg-lightGray border w-full p-2 bg-[#FEFBFB] text-textColor placeholder:text-gray-500 rounded-md"
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Location"
        value={query}
      />
      <div className="absolute right-3 top-8">
        <MdLocationPin className="text-textColor" size={20} />
      </div>
    </div>
  );
};

export default SearchLocationInput;
