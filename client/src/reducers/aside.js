export default function(state = null, swipeAside){
    switch (swipeAside.type) {
        case "ActiveSwipe":
            return swipeAside.payload;
            break;
        default:
            return -300;
    }
}