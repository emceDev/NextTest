import useSWR from 'swr'
import { useState } from "react"


async function fetcher(url) {
    const res = await fetch(url)
        .then(response => response)

    const post = await res.json()
    return post
}



function Profile() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/Posts/3', fetcher)
  const [ user, setUser ] = useState('niezalogowany')

    async function getUser() {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/3')
            .then(response => response)

        const user = await res.json()
        setUser(user.name)
        return user
    }

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
        Ssr
        <p>{user}</p>
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
        <button onClick={()=>getUser()}>getUser</button>
    </div>
    )
}
export default Profile