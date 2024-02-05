import React, { useEffect, useRef, useState } from "react";
import { REACT_APP_GOOGLE_MAPS_KEY } from "../utils/Google_map_key";
import { FaLocationDot } from "react-icons/fa6";

let autoComplete;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    script.onload = () => callback();
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
};

const SearchLocationInput = ({ setSelectedLocation = () => {} }) => {
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);

  const handleScriptLoad = (updateQuery, autoCompleteRef) => {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      {
        // types: ["(cities)"],
        componentRestrictions: { country: "PK" },
      }
    );

    autoComplete.addListener("place_changed", () => {
      handlePlaceSelect(updateQuery);
    });
  };

  const handlePlaceSelect = async (updateQuery) => {
    const addressObject = await autoComplete.getPlace();

    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log({ query });

    const latLng = {
      lat: addressObject?.geometry?.location?.lat(),
      lng: addressObject?.geometry?.location?.lng(),
    };


    setSelectedLocation(latLng);

    console.log({ latLng });
  
  };

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_GOOGLE_MAPS_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );
  }, []);

  return (
    <div className="search-location-input relative">
      <label className=" block  text-sm font-medium   text-textColor"> Vehicle Location</label>
      <input
        ref={autoCompleteRef}
        className={`  outline-none bg-lightGray    border w-full p-2  bg-[#FEFBFB] text-textColor placeholder:text-gray-500 rounded-md`}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Location"
        value={query}
      />
      <div className=" absolute right-3 top-8">
        <i><FaLocationDot className=" text-textColor"  size={20} /></i>
      </div>

    </div>
  );
};

export default SearchLocationInput;