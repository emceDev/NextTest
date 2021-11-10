import { useState } from "react"
import Images from "../Components/Images"
import Post from "../Components/Post"
// get post
export async function getServerSideProps(){
    const postRes = await fetch('https://jsonplaceholder.typicode.com/Posts/2')
        .then(response => response)
    const post = await postRes.json()

    const albumRes = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => response)
    const album = await albumRes.json()

    return { props: { post:post, album:album }}
}

function Ssr(props) {
    const [user, setUser] = useState('niezalogowany')

    async function getUser() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/2')
            .then(response => response)

        const user = await res.json()
        console.log(user)
        setUser(user.name)
        return user
    }
    
    return (
    <div>
        Ssr
        <div>
            <Images album={props.album}/>
            <p>{user}</p>
            <Post post={props.post}/>
        </div>
        <button onClick={()=>getUser()}>getUser</button>
    </div>
    )
  }
  
  export default Ssr