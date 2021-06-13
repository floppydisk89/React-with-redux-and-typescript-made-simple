# About this project

This project was created by me as a future example for my works on how to use Redux the right way without over-typing JS with TS.
Lots of tutorials on Youtube and the web are created by rookies that end-up teaching the wrong way of using Redux with Typescript, by creating and unecessary amount of interfaces and typing, especially when the value types are implicit and don't need more typing.

I hope this helps other people getting to use Redux and learn it the easy way without being thrown up with pure junk spargetti code.
It took me some time to learn it the right way, and here is the result.

## Structure

The entry point is index.tsx.
-> index.tsx wraps App.tsx
-> App.tsx wraps page.tsx
-> From here redux is used. 
-> App.tsx is using the redux provider for the store.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.