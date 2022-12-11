import {Card, Layout} from '@shopify/polaris';
import React from 'react';
import {SearchStore} from './SearchStore'
import {StoreResourceList} from './StoreResourceList';

export function StoreListItems() {

  return (

    <Layout>
            <Layout.Section>
             <SearchStore />
            </Layout.Section>
            <Layout.Section>
              <StoreResourceList />
            </Layout.Section>
    </Layout>
  );
}