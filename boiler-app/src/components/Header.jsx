import React from 'react'

function Header() {
    console.info('Header -> call')

    return (
        <header className="p-4 bg-blue-500 text-white">
            <h1>BoilerPlate React App</h1>
        </header>
    )
}

export default Header