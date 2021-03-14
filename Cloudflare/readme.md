[Cloudflare](https://www.cloudflare.com/) is an American web infrastructure and website security company that provides content delivery network services, DDoS mitigation, Internet security, and distributed domain name server services.

[Cloudflare](https://www.cloudflare.com/) offers *free* host services for React SPA deployment. Below is how to do this with trivial steps!

# Deploy React Apps on Cloudflare

- Online Demo [here](https://cloudflare.xyz-cloudflare.workers.dev/)
- Github repo [here]( https://github.com/DavidKou/ReactDeploymentOnCloud/tree/master/Cloudflare) 

![](https://github.com/DavidKou/ReactDeploymentOnCloud/blob/master/Cloudflare/snapshots/result.png?raw=true)

## Create react app

```
npx create-react-app project-name
cd project-name

yarn
yarn start
```

## Create Cloudflare account

- Visit https://cloudflare.com/
- Create an account there

## Get the API token

To get started, log into the Cloudflare Dashboard and go to User Profile -> API Tokens or simply click [here](https://dash.cloudflare.com/profile/api-tokens). From the API Token home screen select Create Token.

## Install Cloudflare CLI

```Javascript
npm i @cloudflare/wrangler -g
```
<hr/>


## Login Cloudflare using CLI

```
wrangler login
```

You will be redirected to the Cloudflare login page. Input your account there.

Step I: <br/>
![](https://github.com/DavidKou/ReactDeploymentOnCloud/blob/master/Cloudflare/snapshots/login0.png?raw=true)

Step II:  <br/>
![](https://github.com/DavidKou/ReactDeploymentOnCloud/blob/master/Cloudflare/snapshots/login2.png?raw=true)

Step III:  <br/>
![](https://github.com/DavidKou/ReactDeploymentOnCloud/blob/master/Cloudflare/snapshots/login3.png?raw=true)

Step IV:  <br/>
![](https://github.com/DavidKou/ReactDeploymentOnCloud/blob/master/Cloudflare/snapshots/login4.png?raw=true)


Run below command, input the api-key obtained as above:

 ```
 wrangler config --api-key
 ```

Run below command to get your Account-ID

```
wrangler whoami
```

You will see output as below:

```    
+--------------------------+----------------------------------+
| Account Name             | Account ID                       |
+--------------------------+----------------------------------+
| xxxx@gmail.com's Account | abcdefgc13e701c1b4410ad96e3fefe8 |
+--------------------------+----------------------------------+
```
<hr/>



## Init a Cloudflare project

Run the below command to initialize a Cloudflare project.

Note: You need cd into the folder where React App is created. Follow the instructions as shown below:

```
cd project-name
wrangler init
```

A wrangler.toml will be created. Edit the "bucket" setting and change it to "./build"

```
# ... other wrangler config

account_id = "somestringofyouraccoundid"    # ↫ Edit this value
...
[site]
bucket = "./build"                          # ↫ Edit this value
entry-point = "workers-site"
```
<hr/>

## Build react app locally

```
cd project-name
yarn build
```
This will package the react app, and the output is in the *build* sub-folder now.


Run the below command to start the local dev environment:
```
wrangler dev
```

You will then be able to view the app deployed locally

To preview the deployment on Cloudflare, try below command
```
wrangler preview
```
<hr/>

## Deploy react app to Cloudflare

```
wrangler publish
```

if you encounter the below error:
```
Error: Something went wrong! Status: 403 Forbidden, Details {
  "result": null,
  "success": false,
  "errors": [
    {
      "code": 10034,
      "message": "workers.api.error.email_verification_required"
    }
  ],
  "messages": []
}
```

It might be due to the fact that you need to verify your emails on https://Cloudflare.com :

![](https://github.com/DavidKou/ReactDeploymentOnCloud/blob/master/Cloudflare/snapshots/publish_error.png?raw=true)

Re-run the command:

```
wrangler publish
 Built successfully, built project size is 13 KiB.
 Using namespace for Workers Site "__cloudflare-workers_sites_assets"
 Success
 Uploading site files
 Successfully published your script to
 https://cloudflare.xyz-cloudflare.workers.dev
 Deleting stale files...
```
<hr/>

Open a browser window, and type the url: https://cloudflare.xyz-cloudflare.workers.dev/
<hr/>
Now, your app is deployed to Cloudflare! Happy coding, happy deploying!


