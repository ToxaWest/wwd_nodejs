export default function(){
    return  fetch('/services').then(res => res.json());
}