import React from 'react'


require('../styles/components/profile-card.css');

export const Profile = (props) => {
    let gender = props.gender === '0' ? "aqua" : "pink";
    
    return (
        <div>

            <div className="col-xs-6 col-sm-4 col-md-3">
                <div className="card" style={{ background: gender }}>
                    <div className="card-image">
                        <img className="" src={props.photo} alt={props.bio} />
                        <span className="card-title">{props.username}</span>
                    </div>

                    <div className="card-action" style={{ borderBottom: `2px solid ${gender}` }}>
                        <a href={`#${props.id}`} >Snapchat</a>                        
                        <i style={{float:'right'}}>{props.age}</i>
                    </div>
                </div>
            </div>

        </div>
    )
}



export const ProfileImage = () => {return <h2>FAM</h2>}



// export Profile
