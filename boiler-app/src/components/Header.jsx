import React from 'react'

function Header() {
    console.info('Header -> call')

    return (
        <header className="fixed top-0 right-0 left-0 p-4 bg-purple-600 text-white">
            <h1>BoilerPlate React App | Header</h1>
        </header>
    )
}

export default Header