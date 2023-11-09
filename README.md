# React Component Library

This is a React Component Library that provides a collection of reusable UI components. Each component is organized in its own folder for easy maintenance and distribution. The `index.jsx` file serves as a testing ground to showcase and demonstrate the usage of these components.

## Components

The components are located in its own folder within the repository. You can find it at `src/components/{Component}`. Each component has its own files and assets required for its functionality.

### Button

This Component uses two props for customization.

1.  `size`
    - `sm` for small,
    - `md` for medium and
    - `lg` for large.
2.  `variant`
    - `success` for success,
    - `warning` for warning and
    - `danger` for danger.

Ex: pass the props as `variant="danger" size="md"` to the component.

### Avatar

This component uses two props and React children for customization.

1. `src`

   - this takes in the location of profile photo if it exists.

2. `alt`

   - This takes in the alt attribute of the image.

3. Provide initials as children to render them in the avatar.

4. Leave the props and children empty if you need the Anonymous variant.

### Menu

- This component uses Context API and children for passing props.
- The dropdown values are stored in a array which is passed on as a child.

## Usage

### Testing the Components

To test and visualize how the components render, the `index.jsx` file serves as a sandbox to render the components within the library. To do this:

1.  Clone this repository using Git:

    ```bash
    git clone https://github.com/SGM-dev/react-component-library.git
    ```

2.  Ensure you have all necessary dependencies installed. Use `npm install` or `yarn install` based on your package manager.
3.  Run the testing script using `npm run dev` or `yarn run dev`.
4.  Open a browser and navigate as prompted in the terminal to see the rendered components in action.

### Integrating Components into Your Project

To integrate these components into your project:

1. Clone this repository using Git:
   ```bash
   git clone https://github.com/your-username/react-component-library.git
   ```
2. Choose the components you want to use and copy the respective folders into your project's source directory.

3. Import the components as needed in your React application:
   ```javascript
   import Component1 from "./components/Component1"; // adjust the path based on your project's structure
   ```
4. Use the components within your React code.

## License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the [LICENSE](LICENSE) file for details.
