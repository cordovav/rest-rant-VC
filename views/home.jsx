const React = require('react')
const Def = require('./default')

function home (){
    return (
        <Def>
            <main>
                <h1>
                    REST-Rant
                </h1> 
                <div className='pb-2'>
                <a href="/places">
                    <button className= "btn btn-primary">Places To Rant and Rave About</button>
                </a>
                </div>
                <div>
                    <img src="/images/veggies.jpg" alt="Vegatable Variety" />
                    <div>Photo by <a href="AUTHOR_LINK">Dan Gold</a> on <a href="UNSPLASH_LINK">Unsplash</a></div>
                </div>
            
            </main>
        </Def>
    )
}

module.exports = home