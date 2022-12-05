import {Page, Link, Card} from '@shopify/polaris';
import React from 'react';

export function Instructions() {
  return (
    <Page fullWidth>
      
          <Card title="Select Your Page" sectioned>
            <p>
              Use to follow a normal section with a secondary section to create
              a 2/3 + 1/3 layout on detail pages (such as individual product or
              order pages). Can also be used on any page that needs to structure
              a lot of content. This layout stacks the columns on small screens.
            </p>
            <p>Add New Page <Link url="/admin/pages">fulfilling orders</Link> </p>
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