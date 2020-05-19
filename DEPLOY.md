# Deploy Jabakus yourself

## Deploy it only for your own network (LAN)

On the Device that will run Jabakus execute following:

### Windows
1. Download and install [Node.js](https://nodejs.org/en/)

2. Open a Terminal (cmd.exe) and type: `node --version` to verify your node version.

3. Type to install a simple webserver: `npm install --global serve`

4. Clone the Gitrepo by typing: `git clone https://github.com/jabakus/jabakus.git`
OR Download it from [here](https://github.com/jabakus/jabakus/archive/master.zip)  and unzip the file.

5. cd into that Directory that you just downloaded and run `serve`.

### Linux/MacOS
1. Download and install [Node.js](https://nodejs.org/en/)

2. Open a Terminal and type: `node --version` to verify your node version.

3. Type to install a simple webserver: `(sudo) npm install --global serve`

4. Clone the Gitrepo by typing: `git clone https://github.com/jabakus/jabakus.git`
OR Download it from [here](https://github.com/jabakus/jabakus/archive/master.zip)  and unzip the file.

5. cd into that Directory that you just downloaded and run `serve`.

## Deploy to the Internet

To use Jabakus publicly you can use the already deployed version [here](https://jabakus.netlify.app/).

If you want to deploy your own version e.g with changes made by you, you have to follow the [LICENSE TERMS](https://github.com/jabakus/jabakus/blob/master/LICENSE).

For the deploy you have two options:

### Deploy to Netlify (Easy)

If you deploy to netlify you can use a subdomain provided to you, or you can use your own domain.

To deploy to netlify, all you have to do, is have a Account by one of the following Git-Providers and click on the Button:

- GitHub
- GitLab
- BitBucket

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jabakus/jabakus)

### Deploy to a (Root/V-)Server
Assuming your Root/V-Server runs a spin of Linux, follow the obove Linux/MacOS instructions.
With domain setup, you are on your own.

If your Root/V-Server runs a Windows Version, follow the obove Windows instructions.
With domain setup, you are on your own.

### If you make modifications that could be useful for everyone, you are welcome to open a [Pull Request](https://github.com/jabakus/jabakus/pulls)