import {Page, Layout, Card, Link, DropZone, Stack, Thumbnail,Button} from '@shopify/polaris';
import React from 'react';
import {NoteMinor} from '@shopify/polaris-icons';
import {useState, useCallback} from 'react';

export function ImportExport() {
    const [files, setFiles] = useState([]);

    const handleDropZoneDrop = useCallback(
      (_dropFiles, acceptedFiles, _rejectedFiles) =>
        setFiles((files) => [...files, ...acceptedFiles]),
      [],
    );
  
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
  
    const fileUpload = !files.length && (
      <DropZone.FileUpload actionHint="Accepts .gif, .jpg, and .png" />
    );
  
    const uploadedFiles = files.length > 0 && (
      <Stack vertical>
        {files.map((file, index) => (
          <Stack alignment="center" key={index}>
            <Thumbnail
              size="small"
              alt={file.name}
              source={
                validImageTypes.includes(file.type)
                  ? window.URL.createObjectURL(file)
                  : NoteMinor
              }
            />
            <div>
              {file.name}{' '}
              <Text variant="bodySm" as="p">
                {file.size} bytes
              </Text>
            </div>
          </Stack>
        ))}
      </Stack>
    );

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section oneHalf>
          <Card title="Bulk Import/Export" sectioned>
            <p>
            <strong>Import Stores</strong>
            <DropZone onDrop={handleDropZoneDrop} variableHeight>
                {uploadedFiles}
                {fileUpload}
            </DropZone>
                Download Sample file <Link url="https://prpwebs.com/apps/sample_csv_stores.csv" external> Click Here</Link>
            </p>
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf>
          <Card title="Export Stores" sectioned>
             <Button primary >Export CSV</Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}