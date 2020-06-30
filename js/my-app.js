// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Floristeria',
	dialog: {
		title: 'Floristeria',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/Cumpleaños/',
    	url: 'Cumpleaños.html',
    	name: 'Cumpleaños',
  		},
		{
		path: '/valentin/',
    	url: 'valentin.html',
    	name: 'valentin',
  		},
		{
		path: '/pequeño/',
    	url: 'pequeño.html',
    	name: 'pequeño',
  		},
		{
		path: '/funerario/',
    	url: 'funerario.html',
    	name: 'funerario',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

