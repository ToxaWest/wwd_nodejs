//filter posts

export const FilterPosts = (services) => {
    alert ("checked: " + services.title);
    return{
        type: "SERVICES_SELECTED",
        payload: services
    }
};


// select post
export const SinglePosts = (posts) => {
    return{
        type: "POST_SELECTED",
        payload: posts
    }
};