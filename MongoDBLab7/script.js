const mongoose = require('./database');
const User = require('./user');

async function addUser(user) {
    try {
        const newUser = new User(user);
        const result = await newUser.save();
        console.log("Dodano nowego użytkownika:", result);
    } catch (err) {
        console.log(err.message);
    }
}

async function updateUser(filter, update) {
    try {
        const result = await User.updateOne(filter, { $set: update });
        if (result.nModified === 0) {
            console.log("Nie znaleziono użytkownika do aktualizacji");
        } else {
            console.log("Użytkownik zaktualizowany");
        }
    } catch (err) {
        console.log(err.message);
    }
}

async function deleteUser(filter) {
    try {
        const result = await User.deleteOne(filter);
        if (result.deletedCount === 0) {
            console.log("Nie znaleziono użytkownika do usunięcia");
        } else {
            console.log("Użytkownik usunięty");
        }
    } catch (err) {
        console.log(err.message);
    }
}

async function findUsers(filter) {
    try {
        const users = await User.find(filter);
        console.log('Znaleziono użytkowników:', users);
    } catch (err) {
        console.log(err.message);
    }
}

async function main() {
    try {
        const user1 = {
            firstName: "Weronika",
            lastName: "Koleda",
            age: 25,
            email: "weronika@example.com"
        };
        const user2 = {
            firstName: "Jan",
            lastName: "Nowak",
            age: 30,
            email: "jan@example.com"
        };
        const user3 = {
            firstName: "Anna",
            lastName: "Kowalska",
            age: 28,
            email: "anna@example.com"
        };
        const user4 = {
            firstName: "Piotr",
            lastName: "Kowalski",
            age: 35,
            email: "piotr@example.com"
        };

        await addUser(user1);
        await addUser(user2);
        await addUser(user3);
        await addUser(user4);

        await findUsers({});

        await updateUser({ firstName: 'Jan', lastName: 'Nowak' }, { lastName: 'Kowalski' });

        await findUsers({ firstName: 'Jan' });

        await deleteUser({ firstName: 'Jan', lastName: 'Kowalski' });

        await findUsers({ firstName: 'Jan' });
    } finally {
        mongoose.connection.close();
    }
}

main().catch(console.error);
