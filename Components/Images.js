import Image from 'next/image'
function Images(props) {
    return ( <div>
        {/* {console.log(props)} */}
        {props.album.map(image=><Image src={image.url} width="100" height="100"/>)}
    </div> );
}

export default Images;