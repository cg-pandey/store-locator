import {TextField, Select, Button, Card} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import { usePlacesWidget } from "react-google-autocomplete";


export function SearchStore() {
  const [textFieldValue, setTextFieldValue] = useState('');

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    [],
  );

  const GOOGLE_MAPS_API = 'AIzaSyCSsralNzLi0EdDsuVo33gvF4uubLM6x4w';

  const { ref } = usePlacesWidget({
    apiKey:GOOGLE_MAPS_API,
    onPlaceSelected: (place) => {
      console.log(place);
    }
  });

  console.log(ref,'reff');

  return (
    <TextField
    label="Search Store Address"
      type="input"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      ref={ref}
      connectedRight={<Button>Submit</Button>}
    />
  );
}