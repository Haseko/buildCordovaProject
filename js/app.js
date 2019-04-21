// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
    root: '#app', // App root element
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'ios', // Automatic theme detection
    // App root data
    data: function() {


        return {
            url: 'http://9142767578.myjino.ru',
            price: 0,
            user: {
                firstName: 'John',
                lastName: 'Doe',
            },

            cart: [
            ],

            category: {
            },

            recipeList: {
            },

            productList: {
            },
            products: [
            ]
        };
    },
    // App root methods
    methods: {
        refreshCart: function() {

            $$('#view-catalog .cartOutList').html('');

            app.data.price = 0;

            app.data.cart.forEach(function(v, i) {

                $$('#view-catalog .cartOutList').append('<li class="swipeout"><div class="item-content swipeout-content"><div class="item-inner"><div class="item-title">'
                  + app.data.productList[v-1].name+
                  '</div><span class="float-right">' + app.data.productList[v-1].price +'</span></div></div>'+
                  '<div class="swipeout-actions-right">'+
                  '<a href="#" class="swipeout-delete" onclick = "app.data.cart.splice('+i+', 1); app.data.price -= '+app.data.productList[v-1].price+'; $$(\'#price\').html(app.data.price);">Delete</a>'+
                  '</div></li>');
                  app.data.price += parseInt(app.data.productList[v-1].price);

            });

            $$('#price').html(app.data.price);


        },
    },
    // App routes
    routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
    url: '/',
    on: {

        pageInit: function() {

            Framework7.request.get('http://9142767578.myjino.ru/backend/getters/categorys.php', function(data){

                app.data.category = JSON.parse(data);

                $$('#mainPage .category-list').html('');
                i = 0;
                for (var v in app.data.category) {
                    if (i < 4) {

                        $$('#mainPage .category-list').append(
                            '<a class="col-50 margin-bottom padding-top elevation-6" href="/category-page/' + app.data.category[v].name + '/" style="display: block; border-radius: 15px;background-image: url(' + app.data.url + app.data.category[v].img + '); -webkit-background-size: cover;">' +
                            '<h4 class="text-align-center" style="color: white; background: rgba(255,59,48,0.8);padding-top: 7px; padding-bottom: 7px">' + app.data.category[v].title + '</h4></a>'
                        );
                    }
                    i++;
                };

            });

            Framework7.request.get('http://9142767578.myjino.ru/backend/getters/recipes.php', function(data){

                app.data.recipeList = JSON.parse(data);

            });

            Framework7.request.get('http://9142767578.myjino.ru/backend/getters/products.php', function(data){

                app.data.productList = JSON.parse(data);

            });


        }

    }
});
var catalogView = app.views.create('#view-catalog', {
    url: '/catalog/'
});
var settingsView = app.views.create('#view-settings', {
    url: '/settings/'
});


// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function() {
    var username = $$('#my-login-screen [name="username"]').val();
    var password = $$('#my-login-screen [name="password"]').val();

    // Close login screen
    app.loginScreen.close('#my-login-screen');

    // Alert username and password
    app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});


$$('.deleted-callback').on('swipeout:deleted', function () {
    console.log($$(this).prop('myid'));
    alert(1);
});
