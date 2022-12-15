import {Page, Button, Card, Tabs, SkeletonBodyText,  Layout} from '@shopify/polaris';
import {useState, useCallback, React} from 'react';
import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import { Support, StoreSettings, Instructions, StoreListItems, ImportExport } from "../components";


export default function HomePage() {
  
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const [menu, setMenu] = useState(1);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
  );


    // this function active deactive button on top bar
  const handleToggle = useCallback(() => setActive((active) => !active), []);
  const contentStatus = active ? 'Deactivate' : 'Activate';

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
    }
   
  ];


const tabsMarkup = tabs.length  ? (
      <Card>
        <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
          {/* <Card.Section> */}
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
                 else
                    return <StoreListItems />
            })()
          }       
          {/* </Card.Section> */}
        </Tabs>
      </Card>
    ) :  <Card sectioned><Loading /><SkeletonBodyText /></Card>;


  return (      
    <Page fullWidth>
      <TitleBar
        title="PW Store Locator"
        primaryAction={{
          content: "Create New Store",
          onAction: () => navigate("/stores/new"),
        }}
        secondaryActions={[
          {
            content: contentStatus,
            onAction: handleToggle,
            destructive: active ? true : false
          }
        ]}
      />
     < Layout>
      <Layout.Section>
          {tabsMarkup}
      </Layout.Section>
    </Layout>
       
    </Page>
    
  );
}
