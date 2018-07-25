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
        "service": "vue-helper-service"
    },
    "vueHelper": {
		"lang": "js",
		"options": {
			"html": "pug",
			"style": "less"
			"styleImports": [
				"@import \"..\theme\variables.less\";"
			]
    }

lang: specifies the output file types and can be ['js','coffee']  'ts' is experimental it will output files but I was unsuccessful with the dependencies i have chosen.)
html: specifies the template type,  exlude for default html templates.  The value is placed into the lang tag if included.  example:
`	"html": "pug"  will produce <template lang="pug">`
style: specifies the style type, exclude for the default style.
	`"style": "stylus" will produce <style lang="stylus">`
styleImports: will include the array of strings at the top of the style template..

The folder structure this produces:

	components
		myComponent.vue
		index.js
	filters
		myFilter.ts
		index.js
	views
		myView.vue
		index.js
	store
		modules
			myStoreModule.js
		index.js
	models
		myModel.js
	services
		myService.js
		index.js

Each index file should be registered in your main.js.  Each index file is the registry for the items in those directories and may contain logic specific to that type.

for example modules registers the Vuex.Store with the appriate modules.

	export default new Vuex.Store
			  strict: true,
			  modules:
					'myModule': myModule

whereas the component index file will register the component as follows:

`Vue.component('myComponent', myComponent)`
