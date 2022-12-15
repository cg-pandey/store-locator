import {Card, Layout} from '@shopify/polaris';
import React from 'react';
import {SearchStore} from './SearchStore'
import {StoreResourceList} from './StoreResourceList';

export function StoreListItems() {

  return (
    <Card>
            <Card.Section >
             <SearchStore />
            </Card.Section>
            <Card.Section>
              <StoreResourceList />
            </Card.Section>
    </Card>
  );
}