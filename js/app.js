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




                app.data ='{"url":"http://9142767578.myjino.ru","price":0,"user":{"firstName":"John","lastName":"Doe"},"cart":[],"category":{"burgers":{"id":"1","name":"burgers","title":"burgers","img":"/img/burgers.jpg","recipes":[1,2]},"lasagna":{"id":"2","name":"lasagna","title":"lasagna","img":"/img/lasagna.jpg","recipes":[3]},"nachos":{"id":"3","name":"nachos","title":"nachos","img":"/img/nachos.jpg","recipes":[4]},"spinach-potato":{"id":"4","name":"spinach-potato","title":"spinach-potato","img":"/img/spinach-potato.jpg","recipes":[5]},"taco":{"id":"5","name":"taco","title":"taco","img":"/img/taco.jpg","recipes":[6]},"taquitos":{"id":"6","name":"taquitos","title":"taquitos","img":"/img/taquitos.jpg","recipes":[7]},"veggies":{"id":"7","name":"veggies","title":"veggies","img":"/img/veggies.jpg","recipes":[8]}},"recipeList":[{"id":"1","name":"American Hamburger","img":"/img/burgers1.jpg","title":"American Hamburger","products":[1,2,3,4],"description":"Prepare a hot campfire and place a grate over the top. Add a 9-12 inch cast iron skillet over medium direct heat.\r\nPat dry the lamb and ground beef and add to a bowl with the coriander, cumin, ? teaspoon garlic powder, ground nutmeg, onion powder, and fresh oregano. Sprinkle with salt and pepper, then mix thoroughly to combine. Form 4 equal patties by hand, then press a dimple into the center of each. Cover and set aside.\r\nAdd the butter to the skillet and let melt. Toss in the diced potatoes and cook until they just begin to crisp, around 10 minutes. Sprinkle with salt and pepper and remaining garlic powder.\r\nGently push the potatoes to the edges of the pan and nestle in the 4 lamb burger patties. Allow to cook for 5 minutes on each side, or until cooked through. Sprinkle potatoes with fresh dill, then top the burgers with diced tomatoes and feta cheese.\r\n"},{"id":"2","name":"Indian Hamburger","img":"/img/burgers2.jpg","title":"Italian Hamburger","products":[1,2,3,4,5],"description":"Ingredients\r\n8 thick-cut strips of bacon (1/2 pound)\r\n1 1/2 pounds ground chicken Kosher salt Freshly ground pepper\r\n4 slices of aged cheddar cheese Barbecue sauce, for brushing\r\n4 sesame seed hamburger buns, split and toasted\r\nThinly sliced red onion and tomato and shredded iceberg lettuce, for serving\r\n"},{"id":"3","name":"lasagna","img":"/img/lasagna.jpg","title":"the best lasagna","products":[5,6,7,8,9],"description":"Cook noodles according to package directions; drain. Meanwhile, in a Dutch oven, cook sausage, beef and onion over medium heat 8-10 minutes or until meat is no longer pink, breaking up meat into crumbles. Add garlic; cook 1 minute. Drain.\r\nStir in tomatoes, tomato paste, water, sugar, 3 tablespoons parsley, basil, fennel, 1/2 teaspoon salt and pepper; bring to a boil. Reduce heat; simmer, uncovered, 30 minutes, stirring occasionally.\r\nIn a small bowl, mix egg, ricotta cheese, and remaining parsley and salt.\r\nPreheat oven to 375°. Spread 2 cups meat sauce into an ungreased 13x9-in. baking dish. Layer with three noodles and a third of the ricotta mixture. Sprinkle with 1 cup mozzarella cheese and 2 tablespoons Parmesan cheese. Repeat layers twice. Top with remaining meat sauce and cheeses (dish will be full).\r\nBake, covered, 25 minutes. Bake, uncovered, 25 minutes longer or until bubbly. Let stand 15 minutes before serving."},{"id":"4","name":"nachos","img":"/img/nachos.jpg","title":"mexican nachos","products":[5,8,9],"description":"In a cast-iron skillet, cook ground beef over medium heat (using grill, campfire or stovetop) until no longer pink. Create a hole in the center of the meat and add jalapenos and green onions. Cook, stirring frequently for 3-4 minutes. Transfer mixture to a bowl and line the bottom of the hot skillet with chips.\r\nPour the ground beef-green onion mixture evenly over the chips. Top with cheese, lettuce, tomatoes and salsa/taco sauce. Dig in immediately!\r\n"},{"id":"5","name":"spinach-potato","img":"/img/spinach-potato.jpg","title":"very tasty","products":[9,10,11],"description":"Heat 1 tbsp sesame oil in a wide-based pan with a tight-fitting lid.\r\nAdd 1 finely chopped red onion and cook over a low heat for 10 mins, stirring occasionally, until softened.\r\nAdd 1 crushed garlic clove, a finely chopped thumb-sized piece of ginger and 1 finely chopped red chilli, cook for 1 min, then add 1 ? tsp ground turmeric and 1 ? tsp ground cumin and cook for 1 min more.\r\nTurn up the heat to medium, add 2 sweet potatoes, cut into even chunks, and stir everything together so the potato is coated in the spice mixture.\r\nTip in 250g red split lentils, 600ml vegetable stock and some seasoning. \r\nBring the liquid to the boil, then reduce the heat, cover and cook for 20 mins until the lentils are tender and the potato is just holding its shape.\r\nTaste and adjust the seasoning, then gently stir in the 80g spinach. Once wilted, top with the 4 diagonally sliced spring onions and ? small pack torn basil leaves to serve.\r\nAlternatively, allow to cool completely, then divide between airtight containers and store in the fridge for a healthy lunchbox."},{"id":"6","name":"taco","img":"/img/taco.jpg","title":"tacooooo!","products":[4,7,8,9],"description":"Heat the pork barbecue according to the instructions on the package.\r\nOpen the bag of chips and crush them into smaller pieces.\r\nFold down the sides of the bag to make it more sturdy.\r\nTop the chips with the pork barbecue, shredded cheese, shredded lettuce, pineapple salsa, sour cream and cilantro."},{"id":"7","name":"taquitos","img":"/img/taquitos.jpg","title":"taquitos like shawuha?","products":[4,7,8,9],"description":"Crumble and cook the sausage in a large skillet until brown. Drain grease, place sausage on paper towel-lined plate, cover and set aside\r\nIn a large skillet, melt 1 tablespoon of butter, add eggs, salt and pepper, and cook over medium heat, stirring continuously, until mostly set and no longer runny\r\nStir in sausage, then remove from heat\r\nAdd some of the egg mixture to the middle of a tortilla, top with some of the cheese, fold sides, and roll up\r\nMelt 1 tablespoon of butter on a griddle or skillet over medium-high heat. Place burrito in pan, and cook for about 1 minute per side or until golden brown\r\nRepeat process until all burritos are made, and serve immediately"},{"id":"8","name":"veggies","img":"/img/veggies.jpg","title":"struchok","products":[3,4],"description":"Heat 1 tbsp olive oil in a frying pan, then fry 1 halved and sliced large onion until golden.\r\nAdd 2 large carrots, cut into sugar-cube size pieces and most of the 2 tbsp chopped thyme, reserving a sprinkling for later.\r\nPour in 200ml red wine, 150ml water and a 400g chopped tomatoes, then crumble in 2 vegetable stock cubes and simmer for 10 mins.\r\nTip in a 410g can green lentils, including the juice, then cover and simmer for another 10 mins until the carrots still have a bit of bite and the lentils are pulpy.\r\nMeanwhile, boil 950g sweet potatoes, cut into chunks, for 15 mins until tender, drain well, then mash with 25g butter and season to taste.\r\nPile the lentil mixture into a pie dish, spoon the mash on top, then sprinkle over 85g grated vegetarian mature cheddar and the remaining thyme. The pie can now be covered and chilled for 2 days, or frozen for up to a month.\r\nHeat oven to 190C/170C fan/gas 5. Cook for 20 mins if cooking straightaway, or for 40 mins from chilled, until golden and hot all the way through. Serve with broccoli."}],"productList":[{"id":"1","name":"roll","img":"/img/roll.jpg","description":"A BREAD","markets":[1],"price":"50"},{"id":"2","name":"cutlet","img":"/img/cutlet.jpg","description":"mramornaya govyadina","markets":[1],"price":"80"},{"id":"3","name":"mayo","img":"/img/mayo.jpg","description":"mayonez","markets":[1],"price":"100"},{"id":"4","name":"tomato","img":"/img/tomato.jpg","description":"from garden","markets":[1],"price":"40"},{"id":"5","name":"eggs","img":"/img/eggs.jpg","description":"from chicken","markets":[1],"price":"100"},{"id":"6","name":"milk","img":"/img/milk.jpg","description":"cow\'s milk","markets":[1],"price":"60"},{"id":"7","name":"meat","img":"/img/meat.jpg","description":"pig\'s meat","markets":[1],"price":"200"},{"id":"8","name":"flour","img":"/img/flour.jpg","description":"from pshenitsa","markets":[1],"price":"110"},{"id":"9","name":"butter","img":"/img/butter.jpg","description":"butter like oil","markets":[1],"price":"40"},{"id":"10","name":"potato","img":"/img/potato.jpg","description":"from garden","markets":[1],"price":"100"},{"id":"11","name":"spinach","img":"/img/spinach.jpg","description":"spinach","markets":[1],"price":"20"}],"products":[]}';

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
