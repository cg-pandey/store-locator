import { useState, useCallback } from "react";
import {
  Banner,
  Card,
  Form,
  FormLayout,
  TextField,
  Button,
  ChoiceList,
  Select,
  Thumbnail,
  Icon,
  Stack,
  TextStyle,
  Layout,
  EmptyState,
} from "@shopify/polaris";
import {
  ContextualSaveBar,
  useAppBridge,
  useNavigate,
} from "@shopify/app-bridge-react";
import { ImageMajor, AlertMinor } from "@shopify/polaris-icons";

/* Import the useAuthenticatedFetch hook included in the Node app template */
import { useAuthenticatedFetch, useAppQuery } from "../hooks";

/* Import custom hooks for forms */
import { useForm, useField, notEmptyString } from "@shopify/react-form";


export function AddStoreOnSubmit({ Store: InitialStore }) {
  const [store, setstore] = useState(InitialStore);
  const [selectedProduct, setSelectedProduct] = useState(store?.product);
  const navigate = useNavigate();
  const appBridge = useAppBridge();
  const fetch = useAuthenticatedFetch();
  const deletedProduct = store?.product?.title === "Deleted product";

  /*
    This is a placeholder function that is triggered when the user hits the "Save" button.

    It will be replaced by a different function when the frontend is connected to the backend.
  */
  const onSubmit = (body) => console.log("submit", body);

  /*
    Sets up the form state with the useForm hook.

    Accepts a "fields" object that sets up each individual field with a default value and validation rules.

    Returns a "fields" object that is destructured to access each of the fields individually, so they can be used in other parts of the component.

    Returns helpers to manage form state, as well as component state that is based on form state.
  */
  const {
    fields: {
      title,
      description,
      phone,
      email,
      website,
      fax,
      address,
      country,
      state,
      city,
      zipcode,
      latitude,
      longitude,
    },
    dirty,
    reset,
    submitting,
    submit,
    makeClean,
  } = useForm({
    fields: {
      title: useField({
        value: store?.title || "",
        validates: [notEmptyString("Please name your Store")],
      }),
      description: useField(store?.description || ""),
      phone: useField({
        value: store?.phone || "",
        validates: [notEmptyString("Please add your store Number")],
      }),
      email: useField({
        value: store?.email || "",
        validates: [notEmptyString("Please add your store email ")],
      }),
      website: useField(store?.website || ""),
      fax: useField(store?.fax || ""),
      address: useField({
        value: store?.address || "",
        validates: [notEmptyString("Please add your store address ")],
      }),
      country: useField({
        value: store?.country || "",
        validates: [notEmptyString("Please add your store country ")],
      }),
      state: useField({
        value: store?.state || "",
        validates: [notEmptyString("Please add your store state ")],
      }),
      city: useField({
        value: store?.city || "",
        validates: [notEmptyString("Please add your store city ")],
      }),
      zipcode: useField({
        value: store?.zipcode || "",
        validates: [notEmptyString("Please add your store zipcode ")],
      }),
      latitude: useField(store?.latitude || ""),
      longitude: useField(store?.longitude || "")
    },
    onSubmit,
  });


  const storeURL = store
    ? new URL(`/qrcodes/${store.id}/image`, location.toString()).toString()
    : null;


   /*
    This is a placeholder function that is triggered when the user hits the "Delete" button.

    It will be replaced by a different function when the frontend is connected to the backend.
  */
  const isDeleting = false;
  const deletestore = () => console.log("delete");


  /*
    These variables are used to display product images, and will be populated when image URLs can be retrieved from the Admin.
  */
  const imageSrc = selectedProduct?.images?.edges?.[0]?.node?.url;
  const originalImageSrc = selectedProduct?.images?.[0]?.originalSrc;
  const altText =
    selectedProduct?.images?.[0]?.altText || selectedProduct?.title;

  /* The form layout, created using Polaris and App Bridge components. */
  return (
    <Stack vertical>
      {deletedProduct && (
        <Banner
          title="The product for this QR code no longer exists."
          status="critical"
        >
          <p>
            Scans will be directed to a 404 page, or you can choose another
            product for this QR code.
          </p>
        </Banner>
      )}
      <Layout>
        <Layout.Section>
          <Form>
            <ContextualSaveBar
              saveAction={{
                label: "Save",
                onAction: submit,
                loading: submitting,
                disabled: submitting,
              }}
              discardAction={{
                label: "Discard",
                onAction: reset,
                loading: submitting,
                disabled: submitting,
              }}
              visible={dirty}
              fullWidth
            />
            <FormLayout>
              <Card sectioned title="About Store">
                <TextField
                  {...title}
                  label="Store Name*"
                />
                <TextField
                  {...description}
                  label="Description"
                />
              </Card>
              <Card title="Contact">
                <Card.Section>
                <TextField 
                  {...phone}
                  label="Phone"
                  type="phone"
                />
                <TextField
                  {...email}
                  label="Email"
                  type="email"
                />
                  <TextField
                    {...website}
                    label="Website"
                  />
                <TextField
                  {...fax}
                  label="Fax"
                />
                </Card.Section>
              </Card>
              <Card title="Location">
              <Card.Section>
                <TextField
                  {...address}
                  label="Address"
                />
                <TextField
                  {...country}
                  label="Country"
                />
                <TextField
                  {...state}
                  label="State"
                />
                <TextField
                    {...city}
                    label="City"
                  />
                <TextField
                  {...zipcode}
                  label="Zip Code"
                />
                <TextField
                    {...latitude}
                    label="Latitude"
                  />
                <TextField
                  {...longitude}
                  label="Longitude"
                />
                </Card.Section>
              </Card>
            </FormLayout>
          </Form>
        </Layout.Section>
        <Layout.Section secondary>
          <Card sectioned title="Store">
            <Stack vertical>
              <Button
                fullWidth
                primary
                url={storeURL}
                disabled={!store || isDeleting}
              >
                Save Store
              </Button>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          {store?.id && (
            <Button
              outline
              destructive
              onClick={deletestore}
              loading={isDeleting}
            >
              Delete Store
            </Button>
          )}
        </Layout.Section>
      </Layout>
    </Stack>
  );
}
