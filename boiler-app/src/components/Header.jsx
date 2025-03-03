import React from 'react'

function Header() {
    console.info('Header -> call')

    return (
        <header className="m-0 p-4 bg-purple-600 text-white">
            <h1>This is the BoilerPlate React App | Header</h1>
        </header>
    )
}

export default Header