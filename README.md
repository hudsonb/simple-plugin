# Simple Plugin

A simple Backstage frontend plugin demonstrating multiple React components with inline MUI styles.

## Features

- **WelcomeCard**: A styled card component with gradient background
- **InfoPanel**: An information panel displaying metrics with icons
- **StatusList**: A list component showing service statuses
- **ExampleComponent**: Main component that combines all the above

All components use Material-UI inline styles for styling.

## Development

To run the plugin in development mode:

```bash
yarn start
```

## Structure

```
src/
  components/
    WelcomeCard/
      WelcomeCard.tsx
    InfoPanel/
      InfoPanel.tsx
    StatusList/
      StatusList.tsx
    ExampleComponent/
      ExampleComponent.tsx
  plugin.ts
  routes.ts
  index.ts
dev/
  index.tsx
```

## Usage in Backstage

To use this plugin in your Backstage app, import and add it to your app:

```tsx
import { SimplePage } from '@internal/plugin-simple';

// In your App.tsx routes:
<Route path="/simple" element={<SimplePage />} />
```
