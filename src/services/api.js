const url = 'https://jsonplaceholder.typicode.com/'


const getUsers = () => {
    return fetch(url + 'users')
        .then(value => value.json())

}


const getUser = (id) => {
    return fetch(url + 'users/' + id)
        .then(value => value.json())

}



const getPosts = () => {
    return fetch(url + 'posts')
        .then(value => value.json())
}

const getPost = (id) => {
    return fetch(url + 'posts/' + id)
        .then(value => value.json())

}


const getComments = () => {
    return fetch(url + 'comments')
        .then(value => value.json())
}



const getComment = (id) => {
    return fetch(url + 'comments/' + id)
        .then(value => value.json())
}



export {getUsers, getUser, getPosts, getPost, getComments, getComment}