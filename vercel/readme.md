[Vercel](https://vercel.com/) combines the best developer experience with an obsessive focus on end-user performance, which enables frontend teams to do their best work.
 
 # Deploy React Apps on Vercel

- Demo Site: https://xyz-vercel.vercel.app/
- Github repo [here](https://github.com/DavidKou/ReactDeploymentOnCloud/tree/master/vercel)
                     

## Create react app

```
npx create-next-app project-name
cd project-name

yarn
yarn dev
```

## Install Vercel tools CLI

The Vercel command-line interface enables instant cloud deployment and local development.

```Javascript
npm i -g vercel
```
<hr/>

## Login Vercel using CLI

```
vercel login
```

You will be prompted to enter an email, where a link will redirect you to a verification page. Click the `VERIFY` button to proceed.

![](https://github.com/DavidKou/ReactDeploymentOnCloud/blob/master/vercel/snapshots/login2.png?raw=true)

After this, you will see below result in CLI:
![](https://github.com/DavidKou/ReactDeploymentOnCloud/blob/master/vercel/snapshots/login1.png?raw=true)



<hr/>

## Setup Vercel project from CLI

Note: you can also create a project using Vercel console, but using CLI is more convenient.

1. Run the below command
```
cd project-name
vercel 
```

You need cd into the folder where React App is created. Follow the instructions as shown below:

![](https://github.com/DavidKou/ReactDeploymentOnCloud/blob/master/vercel/snapshots/init.png?raw=true)


2. Confirm YES.
3. Create a new Vercel project, by typing "y".  
4. Input a project ID, e.g. "xyz-vercel", choose a directory where the code resides.
5. Overwrite the default settings if needed.
6. You might wish to override the build command if necessary 

After a few seconds, your app will be deployed to Vercel and a URL will be given: e.g. https://xyz-vercel.vercel.app/
<hr/>


Open a browser window, and type the url: https://xyz-vercel.vercel.app/

![](https://github.com/DavidKou/ReactDeploymentOnCloud/blob/master/vercel/snapshots/result.png?raw=true)

Now, your app is deployed to Vercel! Happy coding, happy deploying!
