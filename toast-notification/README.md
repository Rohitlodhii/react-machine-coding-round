# Toast Component

## Description
This is a simple Toast notification component built using React and TypeScript. It allows you to display toast messages with different colors and automatically removes them after 5 seconds.

## Features
- Display toast notifications with customizable messages and colors.
- Automatically removes toast after 5 seconds.
- Supports manual closing of individual toasts.

## Installation
Ensure you have React and TypeScript installed in your project.

```sh
npm install
```

## Usage
Import and use the `ToastContainer` component in your application.

```tsx
import ToastContainer from "./ToastContainer";

function App() {
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default App;
```

## Component Breakdown

### `ToastProps` Type
Defines the structure of a toast notification.
```ts
type ToastProps = {
    id: number;
    message: string;
    color: string;
};
```

### `ToastContainer` Component
- **State (`toast`)**: Holds an array of active toast messages.
- **Ref (`timerRef`)**: Stores timeout references for automatic removal.
- **`handleClose(id: number)`**: Removes a toast manually and clears its timeout.
- **`handleToast(message: string, color: string)`**: Adds a new toast and sets a timeout for removal.

### Example Usage
```tsx
<button onClick={() => handleToast("Success", "green")}>
  Success Toast
</button>
<button onClick={() => handleToast("Danger", "red")}>
  Danger Toast
</button>
```

## Styling
Ensure you have the necessary CSS styles for `.toast-container`, `.toast`, and `.btn-container` for proper UI rendering.

## Improvements
- Add animations for toast appearance/disappearance.
- Support for different toast types (success, error, warning, info).
- Allow users to set custom durations for each toast.

## License
This project is open-source and free to use.

---
Feel free to customize it as per your needs!