import {Page, Link, Card, Select} from '@shopify/polaris';

import React from 'react';
import {useState, useCallback} from 'react';
// import {Provider, ResourcePicker} from '@shopify/app-bridge-react';

export function Instructions() {

  const [selected, setSelected] = useState();
  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const options = [
    {label: 'Today', value: 'today'},
    {label: 'Yesterday', value: 'yesterday'},
    {label: 'Last 7 days', value: 'lastWeek'},
  ];
  const [appBridgeConfig] = useState(() => {
    const host =
      new URLSearchParams(location.search).get("host") ||
      window.__SHOPIFY_DEV_HOST;

    window.__SHOPIFY_DEV_HOST = host;

    return {
      host,
      apiKey: process.env.SHOPIFY_API_KEY,
      forceRedirect: true,
    };
  });

  return (
    <Page fullWidth>
      
          <Card title="Select Your Page" sectioned>
            {/* <Provider config={appBridgeConfig}>
            <ResourcePicker resourceType="Product" open />
            </Provider> */}
            <p>
            <Select
                label="Select Page"
                options={options}
                onChange={handleSelectChange}
                value={selected}
            />
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