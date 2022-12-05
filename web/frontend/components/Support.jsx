import {Page, Layout, Card, Link} from '@shopify/polaris';
import React from 'react';
import {SupoortOnSubmit } from './SupportForm';

export function Support() {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card title="Contact Us" sectioned>
            <p><Link url="mailto:support@prpwebs.com">support@prpwebs.com</Link> (Customer Support)</p>
            <SupoortOnSubmit />
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}