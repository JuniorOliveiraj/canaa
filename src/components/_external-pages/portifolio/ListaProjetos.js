import { snakeCase } from 'change-case';

// ----------------------------------------------------------------------

export const PROJETOS_DESIGNER = ['Colors', 'Typography', 'Shadows', 'Grid'].map((item) => ({
  name: item,
  href: `ler/${snakeCase(item)}`,
  icon: `https://avocadostories.com/src/apps/admin/files/1lkbh707i/Case%20Rivhit_preview-min-3ol5b1mllkbh8bfo.jpg`
}));

export const PROJETOS_WEB_DEV = [
  'Chart',
  'Map',
  'Editor',
  'Copy to clipboard',
  'Upload',
  'Carousel',
  'Multi language',
  'Animate',
  'Mega Menu',
  'Form Validation'
].map((item) => ({
  name: item,
  href: `ler/${snakeCase(item)}`,
  icon: `https://avocadostories.com/src/apps/admin/files/1lkbh707i/Case%20Rivhit_preview-min-3ol5b1mllkbh8bfo.jpg`
}));

export const PROJETOS_DEVELOPED = [
  'Accordion',
  'Alert',
  'Autocomplete',
  'Avatar',
  'Badge',
  'Breadcrumbs',
  'Buttons',
  'Checkbox',
  'Chip',
  'Dialog',
  'Label',
  'List',
  'Menu',
  'Pagination',
  'Pickers',
  'Popover',
  'Progress',
  'Radio Button',
  'Rating',
  'Slider',
  'Snackbar',
  'Stepper',
  'Switch',
  'Table',
  'Tabs',
  'Textfield',
  'Timeline',
  'Tooltip',
  'Transfer List',
  'TreeView',
  'Data Grid'
].map((item) => ({
  name: item,
  href: `ler/${snakeCase(item)}`,
  icon: `https://avocadostories.com/src/apps/admin/files/1lkbh707i/Case%20Rivhit_preview-min-3ol5b1mllkbh8bfo.jpg`
}));
