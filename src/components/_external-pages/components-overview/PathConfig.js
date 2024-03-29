import { snakeCase } from 'change-case';

// ----------------------------------------------------------------------

export const FOUNDATION_LIST = ['Colors', 'Typography', 'Shadows', 'Grid'].map((item) => ({
  name: item,
  href: `/components/${snakeCase(item)}`,
  icon: `https://minimals.cc/assets/icons/components/ic_${snakeCase(item)}.svg`
}));

export const EXTRA_LIST = [
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
  href: `/components/${snakeCase(item)}`,
  icon: `https://minimals.cc/assets/icons/components/ic_extra_${snakeCase(item)}.svg`
}));

export const MATERIAL_LIST = [
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
  href: `/components/${snakeCase(item)}`,
  icon: `https://minimals.cc/assets/icons/components/ic_${snakeCase(item)}.svg`
}));
