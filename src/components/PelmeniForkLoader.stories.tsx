import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { PelmeniForkLoader } from './PelmeniForkLoader';

const meta: Meta<typeof PelmeniForkLoader> = {
  title: 'PelmeniForkLoader',
  component: PelmeniForkLoader,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    size: {
      control: { type: 'range', min: 50, max: 500, step: 10 },
    },
    accent: { control: 'color' },
    forkColor: { control: 'color' },
    plateColor: { control: 'color' },
    pelmeniColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    speed: {
      control: { type: 'range', min: 0.1, max: 4, step: 0.1 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PelmeniForkLoader>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: { size: 100 },
};

export const Large: Story = {
  args: { size: 400 },
};

export const BlueAccent: Story = {
  args: { accent: '#3498db' },
};

export const RedAccent: Story = {
  args: { accent: '#e74c3c' },
};

export const GreenAccent: Story = {
  args: { accent: '#2ecc71' },
};

export const OrangeAccent: Story = {
  args: { accent: '#f39c12' },
};

export const PurpleAccent: Story = {
  args: { accent: '#9b59b6' },
};

export const WarmPalette: Story = {
  args: {
    accent: '#c44569',
    plateColor: '#fff5e6',
    pelmeniColor: '#f5cba7',
    backgroundColor: '#fdf2e9',
  },
};

export const DarkPalette: Story = {
  args: {
    accent: '#bb86fc',
    plateColor: '#2d2d2d',
    pelmeniColor: '#4a4a4a',
    backgroundColor: '#1a1a1a',
  },
};

export const NaturePalette: Story = {
  args: {
    accent: '#2d6a4f',
    plateColor: '#f0f7f4',
    pelmeniColor: '#b7b7a4',
    backgroundColor: '#e9ece9',
  },
};

export const OceanPalette: Story = {
  args: {
    accent: '#0a4c7f',
    plateColor: '#e8f4f8',
    pelmeniColor: '#a8d0e6',
    backgroundColor: '#d4e6f1',
  },
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
  args: { size: 180, accent: '#e74c3c', speed: 0.7 },
};
