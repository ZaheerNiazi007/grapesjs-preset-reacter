import * as React from 'react';
import {
  BlocksProvider,
  LayersProvider,
  PagesProvider,
  SelectorsProvider,
  StylesProvider,
  TraitsProvider,
} from '@grapesjs/react';
import {
  mdiBrush,
  mdiLayers,
  mdiViewGridPlus,
  mdiTextBoxMultiple,
  mdiCog,
} from '@mdi/js';
import Icon from '@mdi/react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import CustomBlockManager from './CustomBlockManager';
import { MAIN_BORDER_COLOR, cx } from './common';
import CustomPageManager from './CustomPageManager';
import CustomLayerManager from './CustomLayerManager';
import CustomSelectorManager from './CustomSelectorManager';
import CustomStyleManager from './CustomStyleManager';
import CustomTraitManager from './CustomTraitManager';

const defaultTabProps = {
  className: '!min-w-0',
};

export default function LeftSidebar({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={cx('gjs-left-sidebar flex flex-col', className)}>
      <Tabs
        value={selectedTab}
        onChange={(_, v) => setSelectedTab(v)}
        variant="fullWidth"
      >
        <Tab
          {...defaultTabProps}
          label={cx('Blocks')}
        />
        <Tab
          {...defaultTabProps}
          label={cx('Pages')}
        />
      </Tabs>
      <div
        className={cx('overflow-y-auto flex-grow border-t', MAIN_BORDER_COLOR)}
      >
        {selectedTab === 0 && (
          <BlocksProvider>
            {(props) => <CustomBlockManager {...props} />}
          </BlocksProvider>
        )}
        {selectedTab === 1 && (
          <PagesProvider>
            {(props) => <CustomPageManager {...props} />}
          </PagesProvider>
        )}
      </div>
    </div>
  );
}
