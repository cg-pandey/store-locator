import {Page, Link, Card, Select} from '@shopify/polaris';
import React from 'react';
import {useState, useCallback} from 'react';

export function Instructions() {

  const [selected, setSelected] = useState();
  const handleSelectChange = useCallback((value) => setSelected(value), []);
  const options = [
    {label: 'Today', value: 'today'},
    {label: 'Yesterday', value: 'yesterday'},
    {label: 'Last 7 days', value: 'lastWeek'},
  ];

  return (
    <Page fullWidth>
      
          <Card title="Select Your Page" sectioned>
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