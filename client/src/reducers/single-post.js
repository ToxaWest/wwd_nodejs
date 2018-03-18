export default function ( state = null , singlePost) {
    switch (singlePost.type) {
        case "POST_SELECTED":
            return singlePost.payload;
            break;
        default:
            return state;
    }
}