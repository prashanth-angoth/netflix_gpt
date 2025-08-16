here in this project we are creating a netflix cone app with some AI api's like chat gpt API's
the folowing are the steps we have done since developing the app from scratch
1. created project 
2. configured the tailwind css
3. identified the compoents 
4. created sign in/sign up page
5. added the routing 
6. validating the sign in/sign up page 
    ( one way is we can use state variables to validate the email and password
      another way is using the useRef hook to validate the form that is we are using in this project )
7. now adding the authentivation using firebase, we have to create firebase project and add the  configuration generated in the process in firebase.js file
8. then select the authentication card from the project overview/sign in methods.
9. now to deploy the app from UI to firebase we have to login to fire base for that we  have to do following steps in the terminal
    1. npm install -g firebase-tools
    2. firebase login
    3. firebase init
and once you give public directory as build and other select as no it'll complete the initialization.
10. now run the build command
11. now you can run the command 
  1. firebase deploy
12. implemented signin/signup on firebase
13. now setup redux store to tore the user details 
14. implemented signout 

