import {Form, FormLayout, TextField, Button} from '@shopify/polaris';
import {useState, useCallback} from 'react';


export function AddStoreOnSubmit() {
const [address, setAddress] = useState('');
const [addressext, setAddressext] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');

  const handleSubmit = useCallback((_event) => {

    setAddress('');
    setLocation('');
    setWebsite('');
  }, [address,location,website]);


const handleAddressChange = useCallback((value) => setAddress(value));
const handleAddressextChange = useCallback((value) => setAddressext(value));
const handleLocationChange = useCallback((value) => setLocation(value));
const handleWebsiteChange = useCallback((value) => setWebsite(value));

  return (
    <Form onSubmit={handleSubmit}>
        <FormLayout>
      <FormLayout.Group>
      <TextField
      label="Address"
      value={address}
      autoComplete="off"
      onChange={handleAddressChange}
    />
        <TextField
          value={location}
          label="Location"
          type="text"
          autoComplete="off"          
      onChange={handleLocationChange}
          
        />
        </FormLayout.Group>
      <FormLayout.Group>
      <TextField
      label="Addressext"
      value={addressext}
      autoComplete="off"
      onChange={handleAddressextChange}
    />
        <TextField
          value={website}
          label="Website"
          type="text"
          autoComplete="off"          
      onChange={handleWebsiteChange}
          
        />
        </FormLayout.Group>
      <FormLayout.Group>
      <TextField
      label="Address"
      value={address}
      autoComplete="off"
      onChange={handleAddressChange}
    />
        <TextField
          value={location}
          label="Location"
          type="text"
          autoComplete="off"          
      onChange={handleLocationChange}
          
        />
        </FormLayout.Group>
      <FormLayout.Group>
      <TextField
      label="Address"
      value={address}
      autoComplete="off"
      onChange={handleAddressChange}
    />
        <TextField
          value={location}
          label="Location"
          type="text"
          autoComplete="off"          
      onChange={handleLocationChange}
          
        />
        </FormLayout.Group>
      <FormLayout.Group>
      <TextField
      label="Address"
      value={address}
      autoComplete="off"
      onChange={handleAddressChange}
    />
        <TextField
          value={location}
          label="Location"
          type="text"
          autoComplete="off"          
      onChange={handleLocationChange}
          
        />
        </FormLayout.Group>

        <Button submit>Submit</Button>
        </FormLayout>
    </Form>
  );
}