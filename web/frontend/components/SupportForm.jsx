import {Form, FormLayout, TextField, Button,} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import { Toast } from "@shopify/app-bridge-react";
import { useForm, useField, notEmptyString } from "@shopify/react-form";
import { useSupportForm } from '../hooks/useServerQuery';
import { useAppQuery} from "../hooks";


export function SupoortOnSubmit() {
  // const emptyToastProps = { content: null };
  // const [toastProps, setToastProps] = useState(emptyToastProps);
  const { mutate, data, isLoading, isError, isSuccess, isFetching } = useSupportForm()

  const onSubmit = (body) => {
    body = JSON.stringify(body);
    console.log(body, 'body')

    mutate({
      url: "https://prpwebs.com/wp-json/store_locator/v1/support",
      formData : body
    })

    reset();

  };



const {
  fields: {
    name,
    email,
    message,
  },
  submit,
  reset,
} = useForm({
  fields: {
    name: useField({
      value: "",
      validates: [notEmptyString("Please name your name")],
    }),
    email: useField({
      value: "",
      validates: [notEmptyString("Please add your store email ")],
    }),
    message: useField(""),
  },
  onSubmit,
});


// if(isLoading){
//   console.log('Loading...');
//   return <div>Loading....</div>
// }

let toastMarkup = isSuccess ? (
  <Toast content={data.msg} onDismiss={() => false} />
) : null;

console.log(isSuccess, {...isLoading});

  return (
    <>
    <Form onSubmit={submit}>
      <FormLayout>
      <TextField
      label="Name"
      {...name}
      autoComplete="off"
    />
        <TextField
          {...email}
          label="Email"
          type="email"
          autoComplete="email"
          helpText={
            <span>
              We’ll use this email address to respond.
            </span>
          }
        />

        <TextField
        label="Message"
        {...message}
        multiline={4}
        autoComplete="off"
        />
        {isLoading ? <Button loading>Submit</Button> : <Button submit>Submit</Button> }
        
      </FormLayout>
    </Form>
        {toastMarkup}
    </>
  );
}