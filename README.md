
# @iorp/react-aid
## Todo 
- Unify every module exports, make indexes to all folders ( automate using turbodev??) 
- useNamespace->setParams (of url), pair of getParams.
  
 


`@iorp/react-aid` is a utility library for React developers, providing handy tools and components to streamline development and improve productivity.

## Features

- **Utility Hooks**: Includes various custom React hooks for common tasks like state management, side effects, and more.
- **Reusable Components**: Offers a collection of reusable React components to speed up UI development.
- **Easy Integration**: Simple to integrate into existing React projects, with minimal setup required.

## Installation

You can install `@iorp/react-aid` via npm or yarn:

```bash
npm install @iorp/react-aid
# or
yarn add @iorp/react-aid
```
## Usage
Check project docs.

## Documentation

For detailed documentation and usage examples, please refer to the [official documentation](https://link-to-your-documentation) of `@iorp/react-aid`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
 

Feel free to adjust the content as needed based on the specific features and documentation of `@iorp/react-aid`.


# React-aid components

## Namespace
Provides a built in context to all the elements within
 It has 3 built in elements 
 - layout
 - options
 - data
 ```js
//...
import useNamespace from '@iorp/react-aid/lib/components/Namespace/hooks/useNamespace';
 
const Component = forwardRef((props, ref) => {

  const {layout,setLayout,data,setData,options,setOptions}= useNamespace();
  // This example accesses the stored refs in the layout 
  console.log(Object.keys(layout.refs||{}));
    return (  
<div > 
    {JSON.stringify(layout, null, 2)}
       {JSON.stringify(data, null, 2)} 
       {JSON.stringify(options, null, 2)} 
</div>
    );
}); 

```

