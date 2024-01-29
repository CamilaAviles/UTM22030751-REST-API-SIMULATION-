const users = ["Jacob", "Carlos", "Sofia", "Victor"];

function formatResponse(code, body, msg) {
    const response = {
        code: code,
        body: body,
        msg: msg
    };
    return response;
}

// GET USER
function getUser(username) {
    const user = users.find(user => user === username);
    if (!user) {
        return formatResponse(404, null, "User not found.");
    }
    return formatResponse(200, user, "User found.");
}

// GET USERS
function getUsers() {
    return formatResponse(200, users, "All users.");
}


// add users
function addUser(newUser) {
    users.push(newUser);
    return formatResponse(201, { allUsers: users, newUser: newUser }, "User added successfully.");
}

// remove user  by index
function removeUserByIndex(index) {
    if (index < 0 || index >= users.length) {
        return formatResponse(404, null, "Index out of range.");
    }
    const deletedUser = users.splice(index, 1)[0];
    return formatResponse(200, { deletedUser: deletedUser, allUsers: users }, "User removed successfully.");
}


//remove last user
function removeLastUser() {
    if (users.length === 0) {
        return formatResponse(404, null, "No users to remove.");
    }
    const deletedUser = users.pop();
    return formatResponse(200, { deletedUser: deletedUser, allUsers: users }, "Last user removed successfully.");
}

// remove first user
function removeFirstUser() {
    if (users.length === 0) {
        return formatResponse(404, null, "No users to remove.");
    }
    const deletedUser = users.shift();
    return formatResponse(200, { deletedUser: deletedUser, allUsers: users }, "First user removed successfully.");
}


// update user by index 
function updateUserByIndex(index, newValue) {
    if (index < 0 || index >= users.length) {
        return formatResponse(404, null, "Index out of range.");
    }
    users[index] = newValue;
    return formatResponse(200, { allUsers: users }, "User updated successfully.");
}


// get usrs size
function getUsersSize() {
    return formatResponse(200, users.length, "Number of users.");
}

//console.log(getUser("Sofia"));
//console.log(getUsers());
//console.log(addUser("Camila"));
//console.log(removeUserByIndex(1));
//console.log(removeLastUser());
//console.log(removeFirstUser());
//console.log(updateUserByIndex(1, "Lorena"));
//console.log(getUsersSize());
