import {Page, Button, Card, Tabs, SkeletonBodyText,  Layout} from '@shopify/polaris';
import {useState, useCallback, React} from 'react';
import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import { AddStore, StoreLists, Support, StoreSettings, Instructions, StoreListItems, ImportExport } from "../components";


export default function HomePage() {

  const [selected, setSelected] = useState(0);
  const [menu, setMenu] = useState(1);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
  );


  const tabs = [
    {
      id: 'stores_tab',
      content: 'Stores',
      accessibilityLabel: 'Stores',
      panelID: 'stores_tab_panel',
    },
    {
      id: 'setting_tab',
      content: 'Settings',
      panelID: 'setting_tab_panel',
    },
    {
      id: 'instructions_tab',
      content: 'Instructoions',
      panelID: 'instructions_tab_panel',
    },
    {
      id: 'import_tab',
      content: 'Import/Export',
      panelID: 'import_tab_panel',
    },

    {
      id: 'support_tab',
      content: 'Support',
      panelID: 'support_tab_panel',
    },
    {
      id: 'addstore_tab',
      content: 'Add Store',
      panelID: 'addstore_tab_panel',
    }
   
  ];


const tabsMarkup = tabs.length  ? (
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          <Card.Section>
          {
            (() => {
                if (selected==0)
                    return <StoreListItems />
                if (selected==1)
                     return <StoreSettings/>
                if (selected==2)
                     return <Instructions />
                if (selected==3)
                     return <ImportExport/>
                if (selected==4)
                     return <Support />
                if (selected==5)
                     return <AddStore />
                else
                    return <StoreListItems />
            })()
          }       
          </Card.Section>
        </Tabs>
      </Card>
    ) :  <Card sectioned><Loading /><SkeletonBodyText /></Card>;


  return (      
    <Page fullWidth
      title="PW Store Locator"
      primaryAction={
        <Button
          primary
          connectedDisclosure={{
            accessibilityLabel: 'Other save actions',
            actions: [{content: 'Add New'}],
          }}
        >
          Actions
        </Button>
      }
    >
     < Layout>
      <Layout.Section>
          {tabsMarkup}
      </Layout.Section>
    </Layout>
       
    </Page>
    
  );
}
