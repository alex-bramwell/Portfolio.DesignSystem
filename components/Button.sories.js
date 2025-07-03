import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Default = {
  args: {
    children: 'Click Me',
  },
};

export const WithAction = {
  args: {
    children: 'Action',
    onClick: () => alert('Button clicked!'),
  },
};