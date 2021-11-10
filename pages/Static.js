import { useState } from "react"


// get post
export async function getStaticProps(){
    const postRes = await fetch('https://jsonplaceholder.typicode.com/Posts/2')
        .then(response => response)
    const post = await postRes.json()

    const albumRes = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => response)
    const album = await albumRes.json()

    return { props: { post:post, album:album }}
}

function Static(props) {
    const [user, setUser] = useState('niezalogowany')

    async function getUser() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response)

        const user = await res.json()
        console.log(user)
        setUser(user.name)
        return user}
        
    return (
    <div>
        Static
        <p>{user}</p>
        <div>
            <h1>title{props.post.title}</h1>
            <p>{props.post.body}</p>
        </div>
        <button onClick={()=>getUser()}>getUser</button>
    </div>
    )
  }
  
  export default Static