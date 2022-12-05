import {EmptyState, Card, ResourceList, Filters, Button, Avatar, Subheading } from '@shopify/polaris';
import {useState, useCallback} from 'react';

export function StoreLists() {
  const [queryValue, setQueryValue] = useState(null);
  const appliedFilters = [];
  const filters = [ ];
  const items = [
    {
      id: 341,
      location: 'Decatur, USA',
    },
    {
      id: 256,
      location: 'Los Angeles, USA',
    },
  ];

  const handleQueryValueChange = useCallback(
    (value) => setQueryValue(value),
    [],
  );
  

  return (
    <div style={{height: '568px'}}>
      <Card>
        <ResourceList
          resourceName={{singular: 'store', plural: 'stores'}}
          filterControl={
            <Filters
              queryValue={queryValue}
              queryPlaceholder = "Enter Store Address"
              filters={filters}
              hideQueryField = {0}
              onQueryChange={handleQueryValueChange}
            >
              <div style={{paddingLeft: '8px'}}>
                <Button onClick={() => console.log('New filter saved')}>
                  Add New Store
                </Button>
              </div>
            </Filters>
          }
          items={items}
          renderItem={(item) => {
            const {id, name, location} = item;
            return (
              <ResourceList.Item
                id={id}
               
                accessibilityLabel={`View details for ${name}`}
                actions={[{content: 'Delete', destructive: true}, {content: 'Edit'}]}
              >
                <Subheading as="h3" variant="bodyMd" fontWeight="bold">
                  {name}
                </Subheading>
                <div>{location}</div>
              </ResourceList.Item>
            );
          }}
        />
      </Card>
    </div>
  );



}