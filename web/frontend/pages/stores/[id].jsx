import { Card, Page, Layout, SkeletonBodyText } from "@shopify/polaris";
import { Loading, TitleBar } from "@shopify/app-bridge-react";
import { AddStoreOnSubmit } from "../../components";

export default function StoreEdit() {
  const breadcrumbs = [{ content: "QR codes", url: "/" }];

  /*
     These are mock values.
     Set isLoading to false to preview the page without loading markup.
  */
  const isLoading = false;
  const isRefetching = false;
  const StoreData = {
    createdAt: "2022-06-13",
    title:"Zara store",
    description:"This is store descrition",
    phone:987654321,
    email:'test@getnada.com',
    website:'test.com',
    fax:'',
    address:'test address',
    country:'India',
    state:"Rajasthan",
    city:'Jaipur',
    zipcode:"303030",
    latitude:'5454545454545',
    longitude:'343343333444',
  };

  /* Loading action and markup that uses App Bridge and Polaris components */
  if (isLoading || isRefetching) {
    return (
      <Page>
        <TitleBar
          title="Edit QR code"
          breadcrumbs={breadcrumbs}
          primaryAction={null}
        />
        <Loading />
        <Layout>
          <Layout.Section>
            <Card sectioned title="Title">
              <SkeletonBodyText />
            </Card>
            <Card title="Product">
              <Card.Section>
                <SkeletonBodyText lines={1} />
              </Card.Section>
              <Card.Section>
                <SkeletonBodyText lines={3} />
              </Card.Section>
            </Card>
            <Card sectioned title="Discount">
              <SkeletonBodyText lines={2} />
            </Card>
          </Layout.Section>
          <Layout.Section secondary>
            <Card sectioned title="QR code" />
          </Layout.Section>
        </Layout>
      </Page>
    );
  }

  return (
    <Page>
      <TitleBar
        title="Edit Store"
        breadcrumbs={breadcrumbs}
        primaryAction={null}
      />
      <AddStoreOnSubmit Store={StoreData} />
    </Page>
  );
}
