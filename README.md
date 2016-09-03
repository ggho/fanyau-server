#Fanyau API server 

- running on Node.js using [express](https://expressjs.com/)
- connecting to Firebase Database project: [fanyau-server](https://console.firebase.google.com/project/fanyau-server/overview)
- hosted on [OpenShift](https://openshift.redhat.com) using their [`nodejs` cartridge](http://openshift.github.io/documentation/oo_cartridge_guide.html#nodejs).

#Demo

It is available at the OpenShift's free domain: http://server-fanyau.rhcloud.com/ (custom domain is configurable too)

e.g.
- `GET /`: [http://server-fanyau.rhcloud.com/](http://server-fanyau.rhcloud.com/)
- `GET /user/:userid`: [http://server-fanyau.rhcloud.com/user/gigiho](http://server-fanyau.rhcloud.com/user/gigiho)
