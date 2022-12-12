<<<<<<< HEAD
import {Page, Link, Card} from '@shopify/polaris';
import {PagesCard} from './pagesFetch';

=======
import {Page, Link, Card, Select} from '@shopify/polaris';
>>>>>>> fb50e69aeb97ec0f394d2084e8a1460364278eac
import React from 'react';
import {useState, useCallback} from 'react';
import { PagesFetch } from './pagesFetch';
// import {Provider, ResourcePicker} from '@shopify/app-bridge-react';

export function Instructions() {
<<<<<<< HEAD
=======

  const options = [
    {label: 'Today', value: 'today'},
    {label: 'Yesterday', value: 'yesterday'},
    {label: 'Last 7 days', value: 'lastWeek'},
  ];


>>>>>>> fb50e69aeb97ec0f394d2084e8a1460364278eac
  return (
    <Page fullWidth>
      
          <Card title="Select Your Page" sectioned>
<<<<<<< HEAD
            <p>
            <PagesCard />
            </p>
=======
            {/* <Provider config={appBridgeConfig}>
            <ResourcePicker resourceType="Product" open />
            </Provider> */}
            <PagesFetch />
>>>>>>> fb50e69aeb97ec0f394d2084e8a1460364278eac
            <p>Add New Page <Link url="/admin/pages">Click Here</Link> </p>
          </Card>
        
          <Card title="Via Element ID" sectioned>
            <p>Add pw-storelocator ID of your element on your page.</p>
          </Card>
        
          <Card title="Via Code" sectioned>
            <p>Copy & Paste Below Code:</p>
            <p></p>
          </Card>
     
    </Page>
  );
}