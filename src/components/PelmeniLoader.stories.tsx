import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PelmeniLoader } from './PelmeniLoader';

const meta: Meta<typeof PelmeniLoader> = {
  title: 'PelmeniLoader',
  component: PelmeniLoader,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    size: {
      control: { type: 'range', min: 50, max: 400, step: 10 },
    },
    color: { control: 'color' },
    speed: {
      control: { type: 'range', min: 0.1, max: 4, step: 0.1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PelmeniLoader>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: { size: 80 },
};

export const Large: Story = {
  args: { size: 300 },
};

export const RedPot: Story = {
  args: { color: '#e74c3c' },
};

export const GreenPot: Story = {
  args: { color: '#2ecc71' },
};

export const BluePot: Story = {
  args: { color: '#3498db' },
};

export const PurplePot: Story = {
  args: { color: '#9b59b6' },
};

export const OrangePot: Story = {
  args: { color: '#f39c12' },
};

export const HalfSpeed: Story = {
  args: { speed: 0.5 },
};

export const DoubleSpeed: Story = {
  args: { speed: 2 },
};

export const TripleSpeed: Story = {
  args: { speed: 3 },
};

export const Combined: Story = {
  args: { size: 150, color: '#e74c3c', speed: 0.7 },
};
