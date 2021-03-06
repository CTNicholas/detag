
 ```
 ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄                                                                
 ███████████████  ▄██████▄   ████    ████   ▄████▄ ████ ████    ████   ▄███████▄ 
      █████      ▀▀▀   ▀███  ████    ████  ████▀▀▀█████ ████    ████  ███▀   ▀███
      █████      ▄█████████  ████    ████ ████     ████ ████    ████ ████████████
      █████▄    ████▀  ████  ████▄  ▄████ ████▄   ▄████ ████▄  ▄████ ████▄    ▄▄▄
       ▀██████  ▀██████▀███   ▀██████▀███  ▀██████▀████  ▀██████▀███  ▀████████▀▀
      ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄  ████  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
      B      U      N      D      L      E      R  ████  @ github.com/CTNicholas/
                                                   ▀▀▀▀
 ```  
  
  Tauque allows for a single configuration object within tauque.json, or multiple
  within an array. Major thanks to evanw for creating esbuild.
  
  ## Config options
  With default settings inserted:  
  {
    // Name of the final file (required)
    "name": "packageName",
    
    // Location of the entry point (required)
    "source": "src/index.js",
    
    // Package type: "node" (cjs), "browser" (iife), "module" (esm), or "all"
    "type": "all",
    
    // Global variable name of export in iife packages
    "global": "packageName",
    
    // Bundle imports: true, false
    "bundle": true,
    
    // Minify package: true, false
    "minify": true,
    
    // Generate separate source map file
    "sourcemap": true,
    
    // Target environment, eg: ["es2020", "chrome58", "firefox57", "node12.19.1"]
    "target": ["es6"],
    
    // Directory to output package to
    "outputDir": "dist", 
    
    // Directory to watch for changes
    "watchDir": "src",
    
    // Native esbuild settings to pass on (overrides Tauque)
    "esbuild": {}   
  }
  
  Please note that comments are not allowed in JSON files.
  _______________________________________________________________________________
  
  
  ## Config examples
    
  ### Single package config 
  {
    "name": "my-package",
    "source": "src/index.js"
  }
  
  - dist/
    ¬ my-package.js
    ¬ my-package.js.map
  
  
  ### Multiple package config
  [
    {
      "name": "my-package.browser",
      "source": "src/index.js",
      "type": "browser"
    },
    {
      "name": "my-package.node",
      "source": "src/index.js",
      "type": "node"
    }
  ]
  
  - dist/
    ¬ my-package.browser.js
    ¬ my-package.browser.js.map
    ¬ my-package.node.js
    ¬ my-package.node.js.map
  
  
  ### Complex package config
  [
    {
      "name": "server",
      "source": "src/server.js",
      "outputDir": "build-server",
      "type": "node",
      "sourcemap": false,
      "minify": false
    },
    {
      "name": "client",
      "source": "src/client/index.js",
      "outputDir": "build-client",
      "type": "browser",
      "esbuild": {
        "banner": "/* Package made by CTNicholas */",
        "define": { "mode": "debug" }
      }
    }
  ]
  
  - build-server/
    ¬ server.js
   
  - build-client/
    ¬ client.js
    ¬ client.js.map
  
  GitHub: https://github.com/CTNicholas/tauque
     NPM: https://www.npmjs.com/package/tauque
 esbuild: https://esbuild.github.io/api
   
