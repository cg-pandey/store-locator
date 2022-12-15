import {
  IndexTable,
  Card,
  useIndexResourceState
} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import { useNavigate } from "@shopify/app-bridge-react";


export function StoreResourceList() {
  const navigate = useNavigate();


  const stores = [
    {
      id: '3417',
      url: 'stores/1',
      status:'Deactive',
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
    },
    {
      id: '2567',
      url: 'stores/1',
      status:'Active',
      createdAt: "2022-06-13",
      title:"Nike Store",
      description:"This is store descrition",
      phone:987654321,
      email:'test@getnada.com',
      website:'test.com',
      fax:'',
      address:'test address',
      country:'India',
      state:"Rajasthan",
      city:'Jaipur',
      zipcode:"202024",
      latitude:'5454545454545',
      longitude:'343343333444',
    },
  ];
  const resourceName = {
    singular: 'store',
    plural: 'stores',
  };

  const {selectedResources, allResourcesSelected, handleSelectionChange} =
    useIndexResourceState(stores);
  const [taggedWith, setTaggedWith] = useState('');
  const [queryValue, setQueryValue] = useState(null);
  const [sortValue, setSortValue] = useState('today');

  const handleTaggedWithChange = useCallback(
    (value) => setTaggedWith(value),
    [],
  );


  const bulkActions = [
    {
      content: 'Active',
      onAction: () => console.log('Todo: implement bulk add tags'),
    },
    {
      content: 'Deactive',
      onAction: () => console.log('Todo: implement bulk remove tags'),
    },
    {
      content: 'Delete stores',
      onAction: () => console.log('Todo: implement bulk delete'),
    },
  ];

 
  const rowMarkup = stores.map(
    ({id, title, address, phone, status, zipcode}, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
        onClick={() => {
          navigate(`/stores/${id}`);
        }}
      >
        <IndexTable.Cell>
          <p variant="bodyMd" fontWeight="bold" as="span">
            {title}
          </p>
        </IndexTable.Cell>
        <IndexTable.Cell>{status}</IndexTable.Cell>
        <IndexTable.Cell>{address}</IndexTable.Cell>
        <IndexTable.Cell>{phone}</IndexTable.Cell>
        <IndexTable.Cell>{zipcode}</IndexTable.Cell>
      </IndexTable.Row>
    ),
  );

  return (
    <Card>
      <IndexTable
        resourceName={resourceName}
        itemCount={stores.length}
        selectedItemsCount={
          allResourcesSelected ? 'All' : selectedResources.length
        }
        onSelectionChange={handleSelectionChange}
        hasMoreItems
        bulkActions={bulkActions}
        headings={[
          {title: 'Store Name'},
          {title: 'Status'},
          {title: 'Address'},
          {title: 'Phone'},
          {title: 'Zip Code'},
        ]}
      >
        {rowMarkup}
      </IndexTable>
    </Card>
  );

  function disambiguateLabel(key, value) {
    switch (key) {
      case 'taggedWith':
        return `Tagged with ${value}`;
      default:
        return value;
    }
  }

  function isEmpty(value) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else {
      return value === '' || value == null;
    }
  }
}