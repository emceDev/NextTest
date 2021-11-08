import { useState } from "react"

// get post
export async function getServerSideProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/Posts/2')
        .then(response => response)

    const post = await res.json()

    return { props: { post }}
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
            <p>{user}</p>
            <h1>title{props.post.title}</h1>
            <p>{props.post.body}</p>
        </div>
        <button onClick={()=>getUser()}>getUser</button>
    </div>
    )
  }
  
  export default Ssr