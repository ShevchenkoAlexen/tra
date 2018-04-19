// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCU_vJKv6fT1pqpQsMhEILzfUfrbs6cYVE',
    authDomain: 'travel-todo-demo-mvc.firebaseapp.com',
    databaseURL: 'https://travel-todo-demo-mvc.firebaseio.com',
    projectId: 'travel-todo-demo-mvc',
    storageBucket: 'travel-todo-demo-mvc.appspot.com',
    messagingSenderId: '67865087190'
  }

};
