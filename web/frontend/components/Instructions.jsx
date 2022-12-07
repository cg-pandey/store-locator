import {Page, Link, Card} from '@shopify/polaris';
import {PagesCard} from './pagesFetch';

import React from 'react';
import {useState, useCallback} from 'react';
// import {Provider, ResourcePicker} from '@shopify/app-bridge-react';

export function Instructions() {
  return (
    <Page fullWidth>
      
          <Card title="Select Your Page" sectioned>
            <p>
            <PagesCard />
            </p>
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