import { usePlacesWidget } from "react-google-autocomplete";

export function Search(){

    const GOOGLE_MAPS_API = 'AIzaSyCSsralNzLi0EdDsuVo33gvF4uubLM6x4w';

  const { ref } = usePlacesWidget({
    apiKey:GOOGLE_MAPS_API,
    onPlaceSelected: (place) => {
      console.log(place);
    }
  });

  return <input className="Polaris-TextField__Input" ref={ref} />;
};