import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Moveable, Props } from '../src';

const meta: Meta = {
  title: 'Moveable',
  component: Moveable,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => (
  <Moveable {...args}>
    <Image />
  </Moveable>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};

const Image = () => (
  <div
    style={{
      width: '240px',
      height: '420px',
      backgroundImage: 'url(https://s1.ax1x.com/2020/09/30/0mg6ht.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '4px',
    }}
  ></div>
);
