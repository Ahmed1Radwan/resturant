import React from 'react';
import './laurels.css';
import { SubHeading } from '../../components';
import { Images, Data } from '../../constants';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
    <div className="app__laurels_awards-card">
        <img src={imgUrl} alt="awards" />
        <div className="app__laurels_awards-card_content">
            <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
            <p className="p__opensans">{subtitle}</p>
        </div>
    </div>
}

const Laurels = () => {
    return (
        <div className="app__bg app__wrapper section__padding" id="awards">
            <div className="app__wrapper_info">
                <SubHeading title="Awards & recognition" />
                <h1 className="headtext__cormorant">Our Laurels</h1>
                <div className="app__laurels_awards">
                    {Data.awards.map((award) =>{
                        return <AwardCard award={award} key={award.title} />
                    } 
                    )}
                </div>
            </div>
            <div className="app__wrapper_img">
                <img src={Images.laurels} alt="laurels_img" />
            </div>
        </div>
    )
}

export default Laurels