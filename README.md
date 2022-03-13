**NOTE** <br/>

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 🚀 Quick start

1.  **Development**

    Clone the repo and just run command below

    ```shell
    $ npm i && npm run start
    ```
    or
    ```shell
    $ yarn && yarn start
    ```

2.  **Test**

    ```shell
    $ npm run test
    ```
    or
    ```shell
    $ yarn test
    ```

## 🧐 Performance!

1.  **Using React-Query**

    I used `react-query` instead of `redux` and `redux-saga` to handle Api call side-effect and managing the application's states, react-query caches the fetched data easily, for example when some `people` data is loaded on a `movie` page and we have same poeple on another movie pages, it will not send new requests to get those people data, it uses cached data!

1.  **Using styled Components**  
    `styled-components` is the best and fastest CSS-in-JS library for styling large scale react production apps.
