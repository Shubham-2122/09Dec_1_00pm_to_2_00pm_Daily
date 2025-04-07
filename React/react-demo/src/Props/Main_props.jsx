// Immutable: Props cannot be modified by the receiving component.
// Read-Only: They are strictly for reading data and should not be altered.
// Dynamic: Props can be updated when the parent component’s state changes.


import React from 'react'
import Class_props from './Class_props'
import Fun_props from './Fun_props'

function Main_props() {
    return (
        <div>
            {/* <h1 className='bg-danger'>Hello props data</h1> */}
            <div className="container">
                <h1>THis data for props in class</h1>
                <div className="row">
                    <Class_props title="card 1 data" desc="hello this nature imge data" img="https://images.pexels.com/photos/31133725/pexels-photo-31133725/free-photo-of-streetlamp-amidst-blooming-cherry-blossoms-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                    <Class_props title="card 2 data" desc="hello this nature 1 imge data" img="https://images.pexels.com/photos/20818623/pexels-photo-20818623/free-photo-of-cherry-blossom-in-the-temple.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                    <Class_props title="card 1 data" desc="hello this nature imge data" img="https://images.pexels.com/photos/31133725/pexels-photo-31133725/free-photo-of-streetlamp-amidst-blooming-cherry-blossoms-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                    <Class_props title="card 2 data" desc="hello this nature 1 imge data" img="https://images.pexels.com/photos/20818623/pexels-photo-20818623/free-photo-of-cherry-blossom-in-the-temple.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    <Class_props title="card 1 data" desc="hello this nature imge data" img="https://images.pexels.com/photos/31133725/pexels-photo-31133725/free-photo-of-streetlamp-amidst-blooming-cherry-blossoms-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                    <Class_props title="card 2 data" desc="hello this nature 1 imge data" img="https://images.pexels.com/photos/20818623/pexels-photo-20818623/free-photo-of-cherry-blossom-in-the-temple.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                </div>
            </div>

            <div className="container">
                <h1>hello this function in props</h1>
                <div className="row">
                    <Fun_props title="card 1 data" desc="hello this data images" img="https://images.pexels.com/photos/31050187/pexels-photo-31050187/free-photo-of-seagulls-on-a-pebble-beach-by-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                    <Fun_props title="Card 2 data" desc="Hello this data 2 images " img="https://images.pexels.com/photos/19320388/pexels-photo-19320388/free-photo-of-cloudscape-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                    <Fun_props title="card 1 data" desc="hello this data images" img="https://images.pexels.com/photos/31050187/pexels-photo-31050187/free-photo-of-seagulls-on-a-pebble-beach-by-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                    <Fun_props title="Card 2 data" desc="Hello this data 2 images " img="https://images.pexels.com/photos/19320388/pexels-photo-19320388/free-photo-of-cloudscape-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                    <Fun_props title="card 1 data" desc="hello this data images" img="https://images.pexels.com/photos/31050187/pexels-photo-31050187/free-photo-of-seagulls-on-a-pebble-beach-by-the-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                    <Fun_props title="Card 2 data" desc="Hello this data 2 images " img="https://images.pexels.com/photos/19320388/pexels-photo-19320388/free-photo-of-cloudscape-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
                </div>
            </div>
        </div>
    )
}

export default Main_props
