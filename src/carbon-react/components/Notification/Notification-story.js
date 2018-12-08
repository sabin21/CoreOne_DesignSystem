import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import Notification, {
  ToastNotification,
  InlineNotification,
} from '../Notification';

const kinds = {
  'Error (error)': 'error',
  'Info (info)': 'info',
  'Success (success)': 'success',
  'Warning (warning)': 'warning',
};
const notificationProps = () => ({
  kind: select('The notification kind (kind)', kinds, 'info'),
  role: text('ARIA role (role)', 'alert'),
  title: text('Title (title)', 'Notification title'),
  subtitle: text('Subtitle (subtitle)', 'Subtitle text goes here.'),
  iconDescription: text(
    'Icon description (iconDescription)',
    'describes the close button'
  ),
  hideCloseButton: boolean('Hide close button (hideCloseButton)', false),
  onCloseButtonClick: action('onCloseButtonClick'),
});

storiesOf('Notifications', module)
  .addDecorator(withKnobs)
  .add(
    'Deprecated: <Notfication />',
    () => (
      <div>
        <Notification
          {...notificationProps()}
          caption={text('Caption (caption)', 'Time stamp [00:00:00]')}
        />
      </div>
    ),
    {
      info: {
        text: `
            Toast notifications are typically passive, meaning they won't affect the user's workflow if not addressed.
            Toast Notifications use 'kind' props to specify the kind of notification that should render (error, info, success, warning).
          `,
      },
    }
  )
  .add('Toast', () => (
    <div>
      <ToastNotification
        {...notificationProps()}
        caption={text('Caption (caption)', 'Time stamp [00:00:00]')}
        style={{ minWidth: '30rem', marginBottom: '.5rem' }}
      />
    </div>
  ))
  .add('inline', () => (
    <div>
      <InlineNotification {...notificationProps()} />
    </div>
  ));