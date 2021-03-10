# Deploy React Apps on Firebase

#### Demo Site: https://xyz-firebase-react.web.app/

#### Github repo: https://github.com/DavidKou/ReactDeploymentOnCloud/tree/master/Firebase



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


![](https://imgur.com/DvtEymh.png)

<hr/>

## Setup Firebase project from CLI

Note: you can also create a project using Firebase console, but using CLI is more convenient.

1. Run the below command
```
cd demo
firebase init
```

You need cd into the folder where React App is created. Follow the instructions as shown below:

![](https://imgur.com/MdAGEqq.png)

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
cd demo
yarn build
```
This will package the react app, and the output is in the *build* sub-folder now.

<hr/>

## Deploy react app to Firebase

```
firebase deploy
```

![](https://imgur.com/MtFyfEF.png)

Open a browser window, and type the url: https://xyz-react-deployment.web.app/
Now, your app is deployed to Firebase!

![](https://imgur.com/7pPf0UL.png)