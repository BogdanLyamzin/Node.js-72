const createUser = data => {
    return {
        name: data.name,
        lastName: data.lastName,
        fullName: `${data.name} ${data.lastName}`
    }
}

const user = createUser();
if(Object.keys(user).length === 2) {
    
}