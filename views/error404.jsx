const React = require('react')
const Def = require('./default')

function error404 (){
    return(
    <Def>
        <main>
            <h1>404: Page Not FOUND</h1>
            <div>
                    <img src="/images/404error.jpg" alt="404 Error" />
                    <div>Photo by <a href="AUTHOR_LINK">Clay Banks</a> on <a href="UNSPLASH_LINK">Unsplash</a></div>
                </div>
            <p>OOPS, Sorry, we can't find this page!</p>
        </main>
    </Def>
)}

module.exports = error404