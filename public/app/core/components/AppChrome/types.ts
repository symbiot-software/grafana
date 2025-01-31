import { NavModelItem } from '@grafana/data';
export const TOP_BAR_LEVEL_HEIGHT = 65;
export const NAV_BAR_LEVEL_HEIGHT = 40;

export interface ToolbarUpdateProps {
  pageNav?: NavModelItem;
  actions?: React.ReactNode;
}
