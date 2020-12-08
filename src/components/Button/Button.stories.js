import React from 'react'
import Button from './Button.jsx'
import { withKnobs } from '@storybook/addon-knobs'

export const button = () => {
	return <Button label="Hello" />;
}

export default { title: 'Button', decorators: [withKnobs] }
