#Fanyau API server 

- Server: Node.js using [express](https://expressjs.com/)
- Database: Firebase Database project: [Firebase project here](https://console.firebase.google.com/project/fanyau-server/overview)
- Hosting: [OpenShift](https://openshift.redhat.com) using their [`nodejs` cartridge](http://openshift.github.io/documentation/oo_cartridge_guide.html#nodejs): [OpenShift project here](https://openshift.redhat.com/app/console/application/57cb4a102d5271ad6c0000a9-server)

## Set up locally

1. clone this git
2. Go to root directory of the repo (where `package.json` exists)
3. Run `npm install` to install dependencies 
4. Run `node server.js` to start the server at your localhost, default link: [http://localhost:8080/](http://localhost:8080/)
 
## Deploy to production

OpenShift use a git push hook as deployment method. They provide a git to store the project source, and any `push` to this git source will trigger a release of the project.

1. (Do only once at setup) Add a remote source to your git [ssh://57cb4a102d5271ad6c0000a9@server-fanyau.rhcloud.com/~/git/server.git/](ssh://57cb4a102d5271ad6c0000a9@server-fanyau.rhcloud.com/~/git/server.git/)
2. Push any changes to the git


#Demo

It is available at the OpenShift's free domain: http://server-fanyau.rhcloud.com/ (custom domain is configurable too).

e.g.
- `GET /`: [http://server-fanyau.rhcloud.com/](http://server-fanyau.rhcloud.com/)
- `GET /user/:userid`: [http://server-fanyau.rhcloud.com/user/gigiho](http://server-fanyau.rhcloud.com/user/gigiho) 
  - This retrieves user info of <userid> stored data on the Firebase database and retrun the info as JSON.
