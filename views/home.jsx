const React = require('react')
const Def = require('./default')

function home (){
    return (
        <Def>
            <main>
                <h1>
                    REST-Rant
                </h1>
                <a href="/places">Places To Rant And Rave About</a>
                <div>
                    <img src="/images/veggies.jpg" alt="Vegatable Variety" />
                    <div>Photo by <a href="AUTHOR_LINK">Dan Gold</a> on <a href="UNSPLASH_LINK">Unsplash</a></div>
                </div>
                <a href="/places">
                    <button className= "btn btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home