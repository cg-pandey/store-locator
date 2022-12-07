import {Card, ResourceList, Avatar, ResourceItem} from '@shopify/polaris';
import React from 'react';
import {SearchStore} from './SearchStore'

export function StoreListItems() {
  return (
    <Card>
      <SearchStore />
      <ResourceList
        resourceName={{singular: 'customer', plural: 'customers'}}
        items={[
          {
            id: 100,
            url: 'customers/341',
            name: 'Mae Jemison',
            location: 'Decatur, USA',
          },
          {
            id: 200,
            url: 'customers/256',
            name: 'Ellen Ochoa',
            location: 'Los Angeles, USA',
          },
        ]}
        renderItem={(item) => {
          const {id, url, name, location} = item;
          const media = <Avatar customer size="medium" name={name} />;

          return (
            <ResourceItem
              id={id}
              url={url}
              media={media}
              accessibilityLabel={`View details for ${name}`}
            >
              <p >
                {name}
              </p>
              <div>{location}</div>
            </ResourceItem>
          );
        }}
      />
    </Card>
  );
}