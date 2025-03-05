import React, { useEffect, useState } from 'react'

function Home() {
    // console.info('Home -> call')

    const [places, setPlaces] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_APP_FOURSQUARE_API_KEY
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: API_KEY
            }
        }

        const queryParams = new URLSearchParams({
            ll: '41.3874,2.1686',
            radius: 1000,
            limit: 20
        })

        fetch(`https://api.foursquare.com/v3/places/search?${queryParams}`, options)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                return response.json()
            })
            .then((data) => {
                setPlaces(data.results)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error fetching places:', error)
                setError(error)
                setLoading(false)
            })
    }, [])

    return (
        <div className="p-4">
            <h1 className="mt-6 text-left text-xl font-bold">Places</h1>
            {loading ? (
                <p className='text-4xlfont-bold text-left'>Cargando localizaciones...</p>
            ) : error ? (
                <p className="text-red-500">Error: {error}</p>
            ) : (
                <ul>
                    {places.map((place) => (
                        <li key={place.fsq_id} className="border-b p-2">
                            <h2 className="text-left text-amber-300 font-semibold">{place.name}</h2>
                            <p className='text-left'>{place.location.formatted_address}</p>
                            {place.categories.length > 0 && (
                                <p className="text-left text-sm text-zinc-500">
                                    Categoría: {place.categories[0].name}
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Home