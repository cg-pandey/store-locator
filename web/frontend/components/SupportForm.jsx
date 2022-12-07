import {Form, FormLayout, TextField, Button} from '@shopify/polaris';
import {useState, useCallback} from 'react';

export function SupoortOnSubmit() {
const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback((_event) => {
    console.log(_event, name,email,message);
    setName('');
    setEmail('');
    setMessage('');
  }, [name,email,message]);


const handleNameChange = useCallback((value) => setName(value));
const handleEmailChange = useCallback((value) => setEmail(value));
const handleMessageChange = useCallback((value) => setMessage(value));

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
      <TextField
      label="Name"
      value={name}
      autoComplete="off"
      onChange={handleNameChange}
    />
        <TextField
          value={email}
          label="Email"
          type="email"
          autoComplete="email"          
      onChange={handleEmailChange}
          helpText={
            <span>
              We’ll use this email address to inform you on future changes to
              Polaris.
            </span>
          }
        />

        <TextField
        label="Message"
        value={message}
        multiline={4}
        autoComplete="off"
        onChange={handleMessageChange}
        />

        <Button submit>Submit</Button>
      </FormLayout>
    </Form>
  );
}