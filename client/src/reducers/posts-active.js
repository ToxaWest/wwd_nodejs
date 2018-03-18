export default function ( state = null , action) {
    switch (action.type) {
        case "SERVICES_SELECTED":
            return action.payload;
            break;
        default:
            return state;
    }
}