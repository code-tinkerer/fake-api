const faker = require("faker");

const maxUsers = 10;

function generateUsers()
{
    var users = [];

    for (var userIndex = 0; userIndex < maxUsers; userIndex++)
    {
        var fullName = faker.name.findName();
        var firstName = fullName.split(" ")[0];
        var username = faker.internet.userName(firstName);

        users.push({
            id: userIndex + 1,
            name: fullName,
            email: faker.internet.email(username)
        });
    }

    return users;
}

function generateItems()
{
    var items = [];

    for (var itemIndex = 0; itemIndex < 25; itemIndex++)
    {
        items.push({
            id: itemIndex + 1,
            title: faker.commerce.productName(),
            url: faker.internet.url(),
            comment: faker.lorem.sentence(25),
            rating: faker.random.number() % 6, // 0-5
            tags: faker.random.words(10),
            subject: faker.random.word(),
            grade: faker.random.number() % 13, // 0-12
            user_id: faker.random.number() % maxUsers + 1 // 1-5
        });
    }

    return items;
}

var users = generateUsers();
console.log(users);

//var items = generateItems();
//console.log(items);
