import {Page, Layout, Card} from '@shopify/polaris';
import React from 'react';
import { AddStoreOnSubmit } from './AddStoreForm';

export function AddStore() {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card title="Add Store" sectioned>
            <AddStoreOnSubmit />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}