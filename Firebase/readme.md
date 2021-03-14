[Firebase](Firebasefirebase.google.com) is a platform developed by Google for creating mobile and web applications. It was originally an independent company founded in 2011. In 2014, Google acquired the platform and it is now their flagship offering for app development.

Firebase offers free host services for React SPA deployment. Below is how to do this with trivial steps!

 
 # Deploy React Apps on Firebase

- Demo Site: https://xyz-firebase-react.web.app/
- Github repo [here](https://github.com/DavidKou/ReactDeploymentOnCloud/tree/master/Firebase)

## Create react app

```
npx create-react-app project-name
cd project-name

yarn
yarn start
```

## Install Firebase tools CLI

```Javascript
npm install -g firebase-tools
```
<hr/>

## Login Firebase using CLI

```
firebase login
```

You will be redirected to firebase login page. Input your account there.

![](https://github.com/DavidKou/ReactDeploymentOnCloud/blob/master/Firebase/snapshots/login.png?raw=true)


<hr/>

## Setup Firebase project from CLI

Note: you can also create a project using Firebase console, but using CLI is more convenient.

1. Run the below command
```
cd project-name
firebase init
```

You need cd into the folder where React App is created. Follow the instructions as shown below:

![](https://github.com/DavidKou/ReactDeploymentOnCloud/blob/master/Firebase/snapshots/init.png?raw=true)


2. Confirm YES.
3. Create a new Firebase project, e.g. "xyz-firebase-react" 
4. Input a project ID, e.g. "xyz-firebase-react" 
5. Choose a directory where the contents will be deployed to Firebase, type **"build"**, since when you package the react app using "yarn build" command, the "build" folder will be the default.
6. Confirm **"YES"**. This is important since we are not deploying the static html! 
7. Confirm NO.
8. Confirm NO.

<hr/>


## Build react app locally

```
cd project-name
yarn build
```
This will package the react app, and the output is in the *build* sub-folder now.

<hr/>

## Deploy react app to Firebase

```
firebase deploy
```

![](https://github.com/DavidKou/ReactDeploymentOnCloud/blob/master/Firebase/snapshots/deploy.png?raw=true)

Open a browser window, and type the url: https://xyz-firebase-react.web.app/

![](https://github.com/DavidKou/ReactDeploymentOnCloud/blob/master/Firebase/snapshots/result.png?raw=true)

Now, your app is deployed to Firebase! Happy coding, happy deploying!

