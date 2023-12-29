///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays.
*/


//////////////////PROBLEM 1////////////////////
/*
    Create an object called `pizza` that has 6
    properties:
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//CODE HERE

const pizza = {
    name: 'Quattro Formaggi',
    price: 19.99,
    category: 'entree',
    popularity: 4.7,
    rating: 4.7,
    tags: ['vegetarian', 'cheese']
}

//////////////////PROBLEM 2////////////////////
/*
    Let's print a few values from our pizza object.

    First, log the popularity of pizza.
    Use dot notation to access the value.
*/

//CODE HERE
console.log(`Pizza popularity is ${pizza.popularity}`);

/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

//CODE HERE
console.log('Second pizza tag is ' + pizza.tags[1]);

/*
    Third, destructure the price off of the
    pizza object.

    Print the value of your new price variable.
*/

//CODE HERE
const { price } = pizza;
console.log(`Price is ${price}`);


/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable.
*/

//CODE HERE
const { category } = pizza;
console.log(category);


//////////////////PROBLEM 3////////////////////
/*
    Create an array with 4 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

//CODE HERE
const foodArr = [
    {
        name: 'Quattro Formaggi',
        price: 19.99,
        category: 'entree',
        popularity: 4.7,
        rating: 4.7,
        tags: ['vegetarian', 'cheese', 'pizza']
    },
    {
        name: 'Pasta Carbonara',
        price: 16.99,
        category: 'entree',
        popularity: 4.2,
        rating: 4.4,
        tags: ['pasta', 'cheese']
    },
    {
        name: 'Margherita',
        price: 14.99,
        category: 'entree',
        popularity: 4.0,
        rating: 4.1,
        tags: ['vegetarian', 'cheese', 'pizza']
    },
    {
        name: 'Caprese',
        price: 10.99,
        category: 'appetizer',
        popularity: 5.0,
        rating: 4.7,
        tags: ['vegetarian', 'salad']
    }
]


//////////////////PROBLEM 4////////////////////
/*
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag
    of your choice.

    For example, you could return only the food objects
    which have "vegetarian" inside of their tags arrays.

    You can choose any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

const filteredFood = foodArr.filter((food) => food.tags.includes('pizza'));


//////////////////PROBLEM 5////////////////////
/*
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for
    food that has above a certain rating,
    or is above a certain price.

    Write a function called `filterByProperty`
    that takes in two arguments: `property` and
    `number`

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against

    For example, calling filterByProperty('rating', 5)
    would return all the menu items with a rating above 5.

    And calling filterByProperty('price', 12)
    would return all the menu items with a price above 12.

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr. Return objects
    whose value for the given property is greater than the
    `number` passed in.

    Return the filtered array from the entire function
*/
const filterByProperty = (property, number) => {
    return foodArr.filter(food => food[property] > number);
}
//CODE HERE


/*
    Invoke the `filterByProperty` function, passing
    in a value for each parameter.

    You'll have to console.log to see the filtered array
*/
console.log(filterByProperty('rating', 4.5));
console.log(filterByProperty('price', 15));
console.log(filterByProperty('popularity', 4.7));