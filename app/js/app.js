'use strict';

// Configure the angular-drupal module.
angular.module('angular-drupal').config(function($provide) {
    $provide.value('drupalSettings', {
        site_path: 'http://localhost/drupal-7',
        base_path: '/',
        endpoint: 'drupalgap',
        language: 'und',
        theme: {
          name: 'spi',
          path: 'themes'
        },
        file_public_path: 'sites/default/files', // use public or private
        //file_private_path: 'system/files',
    });
    
});

// Configure the drupalgap module.
angular.module('drupalgap').config(function($provide) {
    $provide.constant('drupalgapSettings', {
        
        // Modules.
        modules: {
          core: {
            admin: {},
            entity: {},
            field: {},
            image: {},
            services: {},
            system: {},
            text: {},
            user: {}
          },
          contrib: { },
          custom: { },
        },
        
        // Menus.
        menus: {
          
          // Anonymous user menu.
          user_menu_anonymous: {
            links: [
              {
                title: 'Login',
                path: 'user/login',
                options: {
                  attributes: {
                    
                  }
                }
              },
              {
                title: 'Create new account',
                path: 'user/register',
                options: {
                  attributes: {
                    
                  }
                }
              }
            ],
            attributes: {
              'class': 'nav navbar-nav'
            }
          },
          
          
        },
        
        // Theme.
        theme: {
          
          name: 'spi',
          path: 'themes',
          
          // Regions.
          regions: {
            
            // Header.
            header: {
              format: 'nav', // wrap in a nav element instead of a div
              attributes: {
                'class': 'navbar navbar-inverse navbar-fixed-top'
              },
              blocks: {
                
                // Main menu.
                user_menu_anonymous: { }
                
              }
            },
            
            // Content.
            content: {
              attributes: {
                'class': 'container'
              },
              blocks: {
                
                // Page content.
                main: { }

              }
            },
            
            // Footer.
            footer: {
              format: 'footer', // wrap in a footer element instead of a div
              attributes: {
                'class': 'footer'
              }
            },
          }

        }

    });
});

// Run the App!
dgApp.run(['drupal', function(drupal) {
      /*drupal.connect().then(function(data) {
          console.log(data);
      });*/
}]);
