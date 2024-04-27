import { css } from '@emotion/css';
import React from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { useStyles2 } from '@grafana/ui';

import { OrganizationSwitcher } from '../OrganizationSwitcher/OrganizationSwitcher';

import { TopSearchBarSection } from './TopSearchBarSection';
import { TOP_BAR_LEVEL_HEIGHT } from '../types';

export const TopSearchBar = React.memo(function TopSearchBar() {
  const styles = useStyles2(getStyles);

  return (
    <div className={styles.layout}>
      <TopSearchBarSection>
        <a className={styles.logo} href="/" title="SYMBIOT">
          <img src="public/img/symbiot-logo.png" className={styles.img} />
        </a>
      </TopSearchBarSection>

      <div />

      <TopSearchBarSection align="right">
        <OrganizationSwitcher />
      </TopSearchBarSection>
    </div>
  );
});

const getStyles = (theme: GrafanaTheme2) => ({
  layout: css({
    height: TOP_BAR_LEVEL_HEIGHT,
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center',
    padding: theme.spacing(0, 1, 0, 2),
    borderBottom: `1px solid ${theme.colors.border.weak}`,
    justifyContent: 'space-between',

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: '1.5fr minmax(240px, 1fr) 1.5fr', // search should not be smaller than 240px
      display: 'grid',

      justifyContent: 'flex-start',
    },
  }),
  img: css({
  }),
  logo: css({
    display: 'flex',
  }),
  profileButton: css({
    padding: theme.spacing(0, 0.25),
    img: {
      borderRadius: theme.shape.radius.circle,
      height: '24px',
      marginRight: 0,
      width: '24px',
    },
  }),
});
