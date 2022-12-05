import { Card, Page, Layout, FormLayout, TextField, Form, Button, ColorPicker } from "@shopify/polaris";
import {useState, useCallback} from 'react';
import { DropZoneUpload } from '../components';
import img1 from '../assets/pw_map1.png';
import img2 from '../assets/pw_map2.png';
import img3 from '../assets/pw_map3.png';
import img4 from '../assets/pw_map4.png';
import img5 from '../assets/pw_map5.png';
import img6 from '../assets/pw_map6.png';
import img7 from '../assets/pw_map7.png';
import img8 from '../assets/pw_map8.png';
import img9 from '../assets/pw_map9.png';
import img10 from '../assets/pw_map10.png';


export function StoreSettings() {
  const [apikey, setApiKey] = useState('');
  const handleSubmit = useCallback((_event) => {
    setApiKey('');
  }, []);

  const [textcolor, setTextColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
    alpha: 0.7,
  });

  const [backcolor, setBackColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
    alpha: 0.7,
  });

  return (
      <Page fullWidth>
      <Layout>
        <Layout.Section onehalf>
          <Card title="Display Settings" actions={[{content: 'How to find google maps API key'}]}>
            <Card.Section>
              <Form onSubmit={handleSubmit}>
                <FormLayout>
                    <TextField
                      type="text"
                      value={apikey}
                      label="API Keys"
                      onChange={() => {}}
                    />
                     <Layout>
                        <Layout.Section oneHalf>
                          <label>Text Color</label>
                          <ColorPicker label="API Keys" onChange={setTextColor} color={textcolor} allowAlpha  />
                        </Layout.Section>
                      
                        <Layout.Section oneThird>
                          <label style={{fontsize:'10px'}}>Background Color</label>
                          <ColorPicker label="API Keys" onChange={setBackColor} color={backcolor} allowAlpha />
                        </Layout.Section>
                      </Layout>
                     <Button primary submit>Submit</Button>
                </FormLayout>
              </Form>
            </Card.Section>
          </Card>
        </Layout.Section>
        
        <Layout.Section oneThird>
          <Card title="Map Icon">
            <Card.Section>
              <img src={img1} style={{padding:"20px"}}/>
              <img src={img2} style={{padding:"20px"}}/>
              <img src={img3} style={{padding:"20px"}}/>
              <img src={img4} style={{padding:"20px"}}/>
              <img src={img5} style={{padding:"20px"}}/>
              <img src={img6} style={{padding:"20px"}}/>
              <img src={img7} style={{padding:"20px"}}/>
              <img src={img8} style={{padding:"20px"}}/>
              <img src={img9} style={{padding:"20px"}}/>
              <img src={img10} style={{padding:"20px"}}/>
              <DropZoneUpload/>
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>

      </Page>
  );
 
}