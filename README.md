This repository is a slightly modified version of [CoPilot](https://github.com/misterGF/CoPilot) used
to generate a [site template](https://github.com/skagitpublishing/site-template-connextcms) for 
[ConnextCMS](http://connextcms.com).


Installation
------------
All the installation commands described in the [CoPilot README](https://github.com/misterGF/CoPilot)
still apply. To compile the project as a ConnextCMS site template, follow these instructions:


``` bash
# clone this repository
git clone https://github.com/skagitpublishing/coPilot

# install dependencies
sudo npm install

# compile the project
npm run connextcms

# generate a site template from the compiled project by running the following script file
./generateSiteTemplate

```

A site template will now exist in the `connextcms-vue-app` directory. Copy this directory
to the `theme` directory of your [docker-connextcms](https://github.com/skagitpublishing/docker-connextcms) installation. 

You can bring up the application by navigating to the `/appdashboard` path of your server.


License
-------
CoPilot is an open source project by [Skagit Connext](http://skagitconnext.com/) that is licensed 
under the  [MIT License](http://opensource.org/licenses/MIT).

