import React from 'react'
import Button from './Button'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Button',
  component: Button,
}

export const Text = () => (
  <Button onClick={action('clicked')}>
    Venjulegur texti
  </Button>
)
