
export const getPosts = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    });

    return await responce.json();
}


export const getRandmUser = async () =>{
    const responce = await fetch('https://randomuser.me/api/', {method:'GET'});
    return await responce.json();
}