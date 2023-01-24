import {useEffect, useState} from "react";


export default function MainPage() {

    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    throw response.status
                }
            })
            .then(data => setPhotos(data))
            .catch(error => console.log(error))

    }, [])

    return (
        <>
            <h1>Main Page</h1>
            <div>
                {
                    photos.map(photo =>
                        <img src={photo.url} alt="photos"/>)
                }
            </div>
        </>
        )
}