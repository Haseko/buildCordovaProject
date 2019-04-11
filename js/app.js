// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        loggedIn: 0
      },
      // Demo products for Catalog section
      products: [{
          id: '1',
          title: 'Паназиатский карп',
          description: ' Жиры (г/100г) <br> Белки (г/100г.) <br> Углеводы (г/100г) <br> Энергетическая ценность (ккал/100г) ',
          img: 'img/2.jpg',
          price: 3000
        },
        {
          id: '2',
          title: 'Галантин из лосося с овощами',
          description: ' Жиры (г/100г) <br> Белки (г/100г.) <br> Углеводы (г/100г) <br> Энергетическая ценность (ккал/100г) ',
          img: 'img/3.jpg',
          price: 2000
        },
        {
          id: '3',
          title: 'Лосось на пару',
          description: 'Стейк лосося, приготовленный на пару Жиры (г/100г) - 10,5 <br> Белки (г/100г.) - 20,5 <br> Углеводы (г/100г) - 0,1 <br> Энергетическая ценность (ккал/100г) - 176,9',
          img: 'img/1.jpg',
          price: 990
        },
      ],
      // Demo products for Catalog section
      categorys: [{
          id: '1',
          title: 'Рыба',
          img: 'img/2.jpg',
          products: [{
              id: '1',
              title: 'Паназиатский карп',
              description: ' Жиры (г/100г) <br> Белки (г/100г.) <br> Углеводы (г/100г) <br> Энергетическая ценность (ккал/100г) ',
              img: 'img/2.jpg',
              price: 3000
            },
            {
              id: '2',
              title: 'Галантин из лосося с овощами',
              description: ' Жиры (г/100г) <br> Белки (г/100г.) <br> Углеводы (г/100г) <br> Энергетическая ценность (ккал/100г) ',
              img: 'img/3.jpg',
              price: 2000
            },
            {
              id: '3',
              title: 'Лосось на пару',
              description: 'Стейк лосося, приготовленный на пару Жиры (г/100г) - 10,5 <br> Белки (г/100г.) - 20,5 <br> Углеводы (г/100г) - 0,1 <br> Энергетическая ценность (ккал/100г) - 176,9',
              img: 'img/1.jpg',
              price: 990
            },
          ]
        },
        {
          id: '2',
          title: 'Рыба',
          img: 'img/3.jpg',
          products: [{
              id: '1',
              title: 'Паназиатский карп',
              description: ' Жиры (г/100г) <br> Белки (г/100г.) <br> Углеводы (г/100г) <br> Энергетическая ценность (ккал/100г) ',
              img: 'img/2.jpg',
              price: 3000
            },
            {
              id: '2',
              title: 'Галантин из лосося с овощами',
              description: ' Жиры (г/100г) <br> Белки (г/100г.) <br> Углеводы (г/100г) <br> Энергетическая ценность (ккал/100г) ',
              img: 'img/3.jpg',
              price: 2000
            },
            {
              id: '3',
              title: 'Лосось на пару',
              description: 'Стейк лосося, приготовленный на пару Жиры (г/100г) - 10,5 <br> Белки (г/100г.) - 20,5 <br> Углеводы (г/100г) - 0,1 <br> Энергетическая ценность (ккал/100г) - 176,9',
              img: 'img/1.jpg',
              price: 990
            },
          ]
        },
        {
          id: '3',
          title: 'Рыба',
          img: 'img/1.jpg',
          products: [{
              id: '1',
              title: 'Паназиатский карп',
              description: ' Жиры (г/100г) <br> Белки (г/100г.) <br> Углеводы (г/100г) <br> Энергетическая ценность (ккал/100г) ',
              img: 'img/2.jpg',
              price: 3000
            },
            {
              id: '2',
              title: 'Галантин из лосося с овощами',
              description: ' Жиры (г/100г) <br> Белки (г/100г.) <br> Углеводы (г/100г) <br> Энергетическая ценность (ккал/100г) ',
              img: 'img/3.jpg',
              price: 2000
            },
            {
              id: '3',
              title: 'Лосось на пару',
              description: 'Стейк лосося, приготовленный на пару Жиры (г/100г) - 10,5 <br> Белки (г/100г.) - 20,5 <br> Углеводы (г/100г) - 0,1 <br> Энергетическая ценность (ккал/100г) - 176,9',
              img: 'img/1.jpg',
              price: 990
            },
          ]
        },
      ]
    };
  },
  // App root methods
  methods: {
    helloWorld: function() {
      app.dialog.alert('Hello World!');
    },
  },
  // App routes
  routes: routes,
});

// Init/Create views
var homeView = app.views.create('#view-home', {
  url: '/'
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

  app.dialog.create({
    title: 'Вы вошли в аккаунт!',
    buttons: [
      {
        text: 'Отлично!',
      }
    ],
    verticalButtons: true,
  }).open();
});

app.data.categorys.forEach(function(v, i) {
  $$('.list .category-catalog').append('<li><a href="/category/' + v.id + '/"><div class="card demo-card-header-pic"><div style="background-image:url(' + v.img + '); height: 40vw" class="card-header align-items-flex-end">' + v.title + '</div></div></a></li>')
})


if(!app.data.user.loggedIn){

    app.loginScreen.open('#my-login-screen');

}
