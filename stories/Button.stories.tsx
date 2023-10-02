
import { Button } from '../src'

export default {
  title: 'my-components/Button',
  component: Button
}

const Template = (args) => ({
  //👇 Your template goes here
});

const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  variant: 'primary',
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Test Button'
  },
};
