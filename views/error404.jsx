const React = require('react')
const Def = require('./default')

function error404 (){
    return(
    <Def>
        <main>
            <h1>404: Page Not FOUND</h1>
            <p>OOPS, Sorry, we can't find this page!</p>
        </main>
    </Def>
)}

module.exports = error404