# Tailwind CSS Gradient Rendering Issue

This repository demonstrates a common issue encountered when using Tailwind CSS gradients:  the gradient fails to render correctly because the specified colors are not defined within the Tailwind configuration file.

## Problem

The `bg-gradient-to-r from-blue-500 to-purple-500` class attempts to create a linear gradient from blue to purple. However, if `blue-500` and `purple-500` are not included in your `tailwind.config.js` file's `theme.extend.colors` object, the gradient will not render as expected. You will likely see either the default color or no styling applied at all.

## Solution

The solution involves adding the necessary color definitions to your `tailwind.config.js`.  The `bugSolution.js` file shows the corrected configuration.

## Reproduction Steps

1. Clone this repository.
2. Open the `bug.js` file to see the code with the missing color definitions.
3. Run the application (method dependent on your setup).
4. Observe the incorrect or missing gradient.
5. Open `bugSolution.js` to see the corrected version with the color definitions added to `tailwind.config.js`.
6. Apply the fix and see the gradient rendering correctly.
