export default function(){
    return  fetch('/posts').then(res => res.json());
}