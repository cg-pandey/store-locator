import { Page } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { AddStoreOnSubmit } from "../../components";

export default function ManageCode() {
  const breadcrumbs = [{ content: "PW Store Locator", url: "/" }];

  return (
    <Page>
      <TitleBar
        title="Create new store"
        breadcrumbs={breadcrumbs}
        primaryAction={null}
      />
      <AddStoreOnSubmit />
    </Page>
  );
}
