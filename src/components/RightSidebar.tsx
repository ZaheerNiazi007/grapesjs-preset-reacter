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

export default function RightSidebar({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className={cx('gjs-right-sidebar flex flex-col', className)}>
      <Tabs
        value={selectedTab}
        onChange={(_, v) => setSelectedTab(v)}
        variant="fullWidth"
      >
        <Tab {...defaultTabProps} label={cx('Styles')} />
        <Tab {...defaultTabProps} label={cx('Layers')} />
      </Tabs>
      <div
        className={cx('overflow-y-auto flex-grow border-t', MAIN_BORDER_COLOR)}
      >
        {selectedTab === 0 && (
          <>
            <SelectorsProvider>
              {(props) => <CustomSelectorManager {...props} />}
            </SelectorsProvider>
            <StylesProvider>
              {(props) => <CustomStyleManager {...props} />}
            </StylesProvider>

            <TraitsProvider>
            {(props) => <CustomTraitManager {...props} />}
            </TraitsProvider>
          </>
        )}
        {selectedTab === 1 && (
          <LayersProvider>
            {(props) => <CustomLayerManager {...props} />}
          </LayersProvider>
        )}
      </div>
    </div>
  );
}
