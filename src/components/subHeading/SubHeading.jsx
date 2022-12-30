import React from 'react';
import { Images } from '../../constants';

const SubHeading = ({ title }) => {
  return (
    <div style={ { marginBottom: '1rem' } }>
        <p className='p__cormorant'>
            {title}
        </p>
        <img src={Images.spoon} alt="spoon__image" className='spoon__img'/>
    </div>
  )
}

export default SubHeading