# NodeSDR module template

NodeSDR Github Project: https://github.com/barrygee/NodeSDR

<br />

## Add the module to NodeSDR

* cd into the NodeSDR > shScripts directory and run the following command:

    ``` ./add-module.sh URL_TO_YOUR_MODULE_GITHUB_REPOSITORY```

    for example

    ``` ./add-module.sh https://github.com/barrygee/nodesdr-module.git```

    The repository will be cloned and the source files will be placed into the NodeSDR > app > modules directory


<br />

* Require your module in NodeSDR > app > v1 > routers > router.js

  ```const YourModule = require('../../../modules/your-module/module')```

  In the modules section of router.js add your module to the express router

  ```router.use(new YourModule())```

<br />

## Test the module

  * Run the NodeSDR project

    ```npm start```

    curl or visit the following URL in your browser

    ```http://localhost:6633/api/v1/my-module```

    The string 'My Module' will be returned