import {Button, Popover, ActionList} from '@shopify/polaris';
import {ImportMinor, ExportMinor, DeleteMinor} from '@shopify/polaris-icons';
import {useState, useCallback} from 'react';

export function StoreActions() {
  const [active, setActive] = useState(true);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const activator = (
    <Button onClick={toggleActive} disclosure>
      More actions
    </Button>
  );

  return (
    <div >
      <Popover
        active={active}
        activator={activator}
        autofocusTarget="first-node"
        onClose={toggleActive}
      >
        <ActionList
          actionRole="menuitem"
          sections={[
            {
              title: 'File options',
              items: [
                {
                  active: true,
                  content: 'Import file',
                  icon: ImportMinor,
                },
                {content: 'Export file', icon: ExportMinor},
                {
                  destructive: true,
                  content: 'Delete file',
                  icon: DeleteMinor,
                },
              ],
            },
          ]}
        />
      </Popover>
    </div>
  );
}