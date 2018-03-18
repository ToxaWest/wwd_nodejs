//filter posts

export const FilterPosts = (services) => {
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

//sidebar
export const SwipeAside = (swipeAside) => {
    return{
        type: "ActiveSwipe",
        payload: swipeAside
    }
};