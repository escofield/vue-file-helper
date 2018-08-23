###Vue-File-Helper

######  This is an attempt to increase my personal development experience.

This is a tool that will add a handful of node scripts
-     vue-helper-component - creates a component using a single file design.
-     vue-helper-filter - creates a filter class in the filters folder.
-     vue-helper-module - creates a module with Vuex dependency.
-     vue-helper-model - creates a model.
-     vue-helper-service - creates a service with vue-inject dependency.
-     vue-helper-view - creates a view with vue-tidyroutes dependency.

these can be accessed via the shell from the project folder.  You should modify your package.json to include the following.

    "scripts": {
        "view": "vue-helper-view",
        "component": "vue-helper-component",
        "filter": "vue-helper-filter",
        "module": "vue-helper-module",
        "model": "vue-helper-model",
        "service": "vue-helper-service",
				"mixin": "vue-helper-mixin"
    }

When you run this for the first time,  all templates are copied into the project directory so you can modify them yourself.
extensions are dynamic based on the file.<extension> and indexfile.<extension>

replacement1 and replacemen2 are used to inject into the index file on subsequent uses.