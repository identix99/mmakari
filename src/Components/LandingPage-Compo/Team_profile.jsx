import React from 'react';

const Team_profile = (props) => {
    return (
        <>
            <div className='team_box_row'>
                <img src={props.Our_Team_image} alt="Our_Team image" />
                <div className='team_box_text'>
                    <h4>{props.titleh4}</h4>
                    <span>{props.titlespan}</span>
                    {props.titleh3 ? <h3>{props.titleh3}</h3> : "" }
                    <p className='web_text_p'>{props.titlep}</p>
                    <p className='web_text_p'>{props.titlep2}</p>
                    <br></br>
                    <br></br>
                    <p className='web_text_p'>{props.titlep3}</p>
                </div>
            </div>
        </>
    )
}

export default Team_profile;