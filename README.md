
# @iorp/react-aid
## Todo 
- Locale getString /setString must also accept serialiczed component strings, in order to be able to use ScriptComponent from the server
 - Unify every module exports, make indexes to all folders ( automate using turbodev??) 
 
  
# Note
AFTER EDITS do  npm run build

# Features

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


   
 

   
# Components



## Namespace
Provides a built in context to all the elements within
 It has 3 built in elements 
 - layout
 - options
 - data

 The hook useNamespace is available 
 useNamespace
 

## Locale
Locale provides a dedicated context for strings and localization management

## HotImporter 
Hot importer allows the developer to include script directly to dom, this is very useful when working with for example bootstrap templates, allows the developer to use resources out of the sight of react so enhances hybridization

# Hooks
 

## useLocale
```js
const {
      locale,
      setLocale,
      setLanguage,
      setStrings,
      getString,
      L : getString,
    } useLocale();
```

## useNamespace

```js
const {
  layout,
  setLayout,
  data,
  setData,
  options,
  setOptions
  }= useNamespace();
```
```js
//...
import useNamespace from '@iorp/react-aid/lib/hooks/useNamespace';
 
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

## useExpose
```js
 const [style,setStyle]= useState({});
  useExpose(ref,{
    // tho this for the const hooks , the name 'self' is conventional
    self:{
      style,
      setStyle,
      mySafeExposedStuff:123 // here is safe, any key name is valid
    },
    myBareExposedStuff:456  // WARNING:Dont overwrite component default attributes
  })
```


`@iorp/react-aid` is a utility library for React developers, providing handy tools and components to streamline development and improve productivity.

