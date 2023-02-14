### Booking tickets project


# The technology that I'm using in this app.
```
npm i react-router-dom: using for redirecting the webpage.;
npm i react-redux: use  to connect redux with react.;
npm i redux:  use to store the state at the global.;
npm i react-thunk: use to handle asynchronous action when it call api;
npm i lodash:  create object and function faster and using for old browser;
npm i tailwind css: style for component by class name;
npm i axios: handle asynchonous;
npm i antd: design UI faster with components in antd;
```

# build folder structures

```
src/ 
|--- assets
|    |---constant.js
|---redux 
|    |--- action
|    |--- types
|    |--- reducers
|    |---configStore.js
|--- pages
|
|--- servies (connect with backend with http resquest using axios lib) 
|    |--- baseSerives.js
|---component
|
|---template
|   |--- admin
|   |--- HomeTemplate
|   |--- UserTemplate
|   |--- UserTemplate
|---utils
```


# What does each folder exactly do?

```
template
```


```

redux
```


```
layout
```

```
servies
```


# STEP

1. set up redux and react router dom 

2. in folder template we are going use history, reacr-router, tailwind, library to set up redirect page with Header.js + HomeTemplate.js + App.js, create footer component, we are going to target in HomeTemplate.js here includes multiple component 

3. target folder redux, in folder reducer create carouselReducers, managingMoviesReducer

4. After setting succesfully redux and we will we initial state for banner carousel and movies carousel with redux

5. we create folder services to connect with back end via axios

6. In Home component we use react-slick libary for MutipleRows component

6. The component Movies carousel is ok, i use card in mamba, witch react slick carousel for Home component but we will config hover and some animation int the next step

7. We finished watching and upcomming button

8. we will target to HomeMenu component, but first we create manageCenima service to call api, next setup cenima in redux folder

9. we finished Home menu will api 

10. we complete Detail Component

11. we will create Checkout template component

12. Complete Tabs of Checkout component

13. Build button for the people are ordering the chair and we will set up web socket in the next step

14. Config websocket between client and server successfully.

