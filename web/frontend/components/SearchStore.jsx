import {Form, FormLayout, Checkbox, TextField, Button} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import {Search} from './Search';

export function SearchStore() {
  const [value, setValue] = useState('');

  const handleSubmit = useCallback((_event) => {
    console.log(value);
    setValue('');
  }, [value]);

  const handleSearchChange = useCallback((value) => setValue(value), []);

//   const GOOGLE_MAPS_API = 'AIzaSyCSsralNzLi0EdDsuVo33gvF4uubLM6x4w';

//   const {ref}  = usePlacesWidget({
//     apiKey: GOOGLE_MAPS_API,
//     onPlaceSelected: (place) => {
//       console.log(place,'hii');
//     }
//   });

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout.Group>
        <Search />        
        <Button submit>Submit</Button>
      </FormLayout.Group>
    </Form>
  );
}