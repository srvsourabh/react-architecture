# React-architecture

UI ARCHITECTURE

- adapter : contains the instance of the axios and endpoints for calling any API.
- assets : contains icons, images, common stylesheet, fonts and similar stuff.
- components : contains global components used app wide like header, footer, buttons etc.
- containers : contains stateful components.
- utils : contains app wide utils like constants / enums and other common utility.
- layouts : contains further directories each representing the complete view component for any particular feature eg: Home.
- config : contains two plain .json files that defines the configuration values used in app. eg: base URL for api server, data refresh rate etc.
- redux : contains four sub directories named actions, stores, types and reducers.
	- action : Will contains the actions or executable against an interaction. We will follow redux standards for sending data to store.
		This directory contains the action files with respect to components aggregated in the main reducer file (index.js)
	- types : is basically a constant file for only action types to be defined in it to be used by actions.
	- reducers : contains all the component based reducers aggregated in a combined reducer which is index.js in the same directory.
		Will contain all the reducers mapping for each layout component that will be mapped to global state store. 
		When ever a a new view is created, it needs that the layout reducer is to be registered in index.js .
	- stores : contains redux store which uses two middleware logger and saga. 
		Redux logger tool to inspect in console panel triggered actions and state of Redux store. 
		Will contain all the base configuration for redux store setup.
- saga : contains saga that watches for all requested actions and triggers an API call to fetch the user data.
- hoc : contains all the highest order components which will be required in our application. 

We also have index.js which is the entry point in the application. The dev server executes from this file.

This directory contains base configuration for the application.

- App.js : Provides the entry point and connects the redux store and maps the routes
- App.css : This defines global css rules. eg: app wide font-size, font-family, css for header, footer etc.
- routes.js : Will contain all the routes to which view components are mapped and will be accessed eg: home will be accessed at /. For every new view added, entry for mapping the component to its route will be done here.

View in our application will have 2 sets of file - component and css.

- component.js : In our case the sample view created is Home.js. We write all the view structure for any view, define all the interactions that user is going to do, consume state values mapped to props.
- component.css : Will contain styles specific to this component

logger (Object) - Implementation of the console API. Useful if you are using a custom, wrapped version of console.
interceptors - are useful when you want to modify request headers before a request is sent or you are implementing some kind of global error handling system.