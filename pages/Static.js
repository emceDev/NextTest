import { useState } from "react"


// get post
export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/Posts/1')
        .then(response => response)

    const post = await res.json()

    return { props: { post }}
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