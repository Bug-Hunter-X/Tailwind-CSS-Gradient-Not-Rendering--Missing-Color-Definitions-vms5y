```javascript
// Example usage in a React component

function MyComponent() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg">
      {/* ...content... */}
    </div>
  );
}
```
This code uses Tailwind CSS classes for styling.  However, if the `from-blue-500` and `to-purple-500` colors are not defined in your Tailwind config file (e.g., `tailwind.config.js` or `tailwind.config.cjs`), the gradient won't work correctly.  You might see a default color, or the entire styling might be missing.