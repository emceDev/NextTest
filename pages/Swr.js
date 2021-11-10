import useSWR from 'swr'
import { useState } from "react"
import Images from '../Components/Images'

async function fetcher(url) {
    const res = await fetch(url)
        .then(response => response)

    const data = await res.json()
    // console.log(data)
    return data
}

function useUser (link) {
    const { data, error } = useSWR(link, fetcher)
    return {
      data: data,
      isLoading: !error && !data,
      isError: error
    }
  }

function Profile() {
    const { data, isLoading, isError } = useUser('https://jsonplaceholder.typicode.com/photos/1')
  
    if (isLoading) return <p>loading</p>
    if (isError) return <p>errod</p>
    return data.title
  }
function Posts() {
    const { data, isLoading, isError } = useUser('https://jsonplaceholder.typicode.com/albums/1/photos')
  
    if (isLoading) return <p>loading</p>
    if (isError) return <p>errod</p>
    return <Images album={data}/>
  }

function Ser() {
return(
    <div>
        <Profile/>
        <Posts/>
        XD
    </div>
   
   )}
  export default Ser






// function Profile() {
//   const { data, error } = useSWR('https://jsonplaceholder.typicode.com/Posts/3', fetcher)
//   const { album , albumError} = useSWR('https://jsonplaceholder.typicode.com/albums/1/photos', fetcher)
//   const [ user, setUser ] = useState('niezalogowany')

//     async function getUser() {
//         const res = await fetch('https://jsonplaceholder.typicode.com/users/3')
//             .then(response => response)

//         const user = await res.json()
//         setUser(user.name)
//         return user
//     }

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return (
//     <div>
//         SWR
//         <Post post={data}/>
//         {console.log(!album,albumError)}
//         {
//             albumError?<p>error</p>:
//             !album?<p>ładowanie</p>:
//             <p>mamdane</p>
//         }
//         <button onClick={()=>getUser()}>getUser</button>
//     </div>
//     )
// }
// export default Profile