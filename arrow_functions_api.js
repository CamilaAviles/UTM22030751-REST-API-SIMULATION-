const users = ["Mafer", "Maricruz", "Lorena", "Montse"];

const formatResponse = (code, body, msg) => ({
    code: code,
    body: body,
    msg: msg
});

const getUser = (username) => {
    const user = users.find(user => user === username);
    if (!user) {
        return formatResponse(404, null, "User not found.");
    }
    return formatResponse(200, user, "User found.");
};

const getUsers = () => formatResponse(200, users, "All users.");

const addUser = (newUser) => {
    users.push(newUser);
    return formatResponse(201, { allUsers: users, newUser: newUser }, "User added successfully.");
};

const removeUserByIndex = (index) => {
    if (index < 0 || index >= users.length) {
        return formatResponse(404, null, "Index out of range.");
    }
    const deletedUser = users.splice(index, 1)[0];
    return formatResponse(200, { deletedUser: deletedUser, allUsers: users }, "User removed successfully.");
};

const removeLastUser = () => {
    if (users.length === 0) {
        return formatResponse(404, null, "No users to remove.");
    }
    const deletedUser = users.pop();
    return formatResponse(200, { deletedUser: deletedUser, allUsers: users }, "Last user removed successfully.");
};

const removeFirstUser = () => {
    if (users.length === 0) {
        return formatResponse(404, null, "No users to remove.");
    }
    const deletedUser = users.shift();
    return formatResponse(200, { deletedUser: deletedUser, allUsers: users }, "First user removed successfully.");
};

const updateUserByIndex = (index, newValue) => {
    if (index < 0 || index >= users.length) {
        return formatResponse(404, null, "Index out of range.");
    }
    users[index] = newValue;
    return formatResponse(200, { allUsers: users }, "User updated successfully.");
};

const getUsersSize = () => formatResponse(200, users.length, "Number of uses.");


console.log(getUser("Victor"));
console.log(getUsers());
console.log(addUser("Erasmo"));
console.log(removeUserByIndex(1));
console.log(removeLastUser());
console.log(removeFirstUser());
console.log(updateUserByIndex(0, "Jacob"));
console.log(getUsersSize());
