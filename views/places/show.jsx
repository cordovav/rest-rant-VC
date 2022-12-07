const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comment yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border col-sm-4'>
                    <h2 className="rant"> {c.rant ? 'Rant! 😡' : 'Rave 😻' }</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                        
                </div>
            )
        })
    }
    return (
        <Def>
            <main className='pt-3'>
                <div className="row">
                    
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name} />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className='col-sm-6'>
                        <h1>{ data.place.name }</h1>
                            <h2>Rating</h2>
                                <h3>Not Rated</h3>
                        <br />
                            <h2>Description</h2>
                            <h3>
                                {data.place.showEstablished()}
                            </h3>
                                <h4>
                                    Serving {data.place.cuisines}
                                    </h4>
                        <br />
                        <a href={`/places/${data.id}/edit`} className='btn btn-warning'> 
                            Edit 
                        </a>
                        <form method="POST" action={`/places/${data.id}?method=DELETE`}>
                            <button type='submit' className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
                <h2>Comments</h2>
                <div className="row">
                    {comments}
                </div>

                <h3>Got something to Rant or Rave about? Let us know!</h3>
                <form method= "POST" action={`/places/${data.place.id}/comment`}>
                    <div className="row">
                        <div className='form-group col-sm-6'>
                            <label htmlFor='content'> Content</label>
                            <textarea className='form-control' id='content' name='content'></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className='form-group col-sm-4'>
                            <label htmlFor='author'> Author</label>
                            <input className='form-control' id='author' name='author'/>
                        </div>
                        <div className='form-group col-sm-4'>
                            <label htmlFor='stars'> Star Rating</label>
                            <input className='form-control' id='stars' name='stars' type='range' step='.5' min='1' max='5' />
                        </div>
                        <div className='form-group col-sm-2'>
                            <label htmlFor='rant'> Rant?</label>
                            <input type='checkbox' className='form-control' id='rant' name='rant'/>
                        </div>
                    </div>
                    <div className="p-2">
                    <input className='btn btn-primary' type="submit" value='Add Comment' />
                    </div>  
                </form>
            </main>
            
        </Def>
    )
}

module.exports = show