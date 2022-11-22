const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
            </main>
            <div>
                <h2>Rating</h2>
                <p> unknown rating </p>
            </div>
            <div>
                <h2>Description</h2>
            </div>
            <div>
                <h2> Comments </h2>
                <p>no comments yet!</p>
            </div>

            <a href={`/places/${data.id}/edit`} className='btn btn-warning'> Edit </a>
            <form method="POST" action={`/places/${data.id}?method=DELETE`}>
                <button type='submit' className='btn btn-danger'>
                    Delete
                </button>
            </form>
        </Def>
    )
}

module.exports = show