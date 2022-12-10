import {Card, Layout} from '@shopify/polaris';
import React from 'react';
import {SearchStore} from './SearchStore'
import {StoreActions} from './StoreActions'
import {StoreResourceList} from './StoreResourceList';

export function StoreListItems() {

  return (

    <Layout>
            <Layout.Section sectioned>
             <SearchStore />
            </Layout.Section>
            <Layout.Section>
              <StoreActions />
            </Layout.Section>
      <Layout.Section sectioned>
          <Layout>
            <Layout.Section>
              <StoreResourceList />
            </Layout.Section>
        </Layout>

      </Layout.Section>
    </Layout>
  );
}