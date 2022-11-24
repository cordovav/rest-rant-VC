const React = require('react')

function Def (html){
    return (
        <html>
            <head>
                <title>Title</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous"/>

                <link rel="stylesheet" href="/css/style.css" />

                
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/places">Places</a></li>
                        <li><a href="/places/new">Add Places</a></li>
                    </ul>
                </nav>
                {html.children}
            </body>


        </html>
    )

}

module.exports = Def
