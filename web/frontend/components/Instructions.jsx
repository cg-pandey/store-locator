import {Page, Link, Card, Select} from '@shopify/polaris';
import React from 'react';
import {useState, useCallback} from 'react';
import { PagesFetch } from './pagesFetch';
// import {Provider, ResourcePicker} from '@shopify/app-bridge-react';

export function Instructions() {

  const options = [
    {label: 'Today', value: 'today'},
    {label: 'Yesterday', value: 'yesterday'},
    {label: 'Last 7 days', value: 'lastWeek'},
  ];


  return (
    <Page fullWidth>
      
          <Card title="Select Your Page" sectioned>
            {/* <Provider config={appBridgeConfig}>
            <ResourcePicker resourceType="Product" open />
            </Provider> */}
            <PagesFetch />
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