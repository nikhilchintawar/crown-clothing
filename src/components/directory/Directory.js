import React, { useState } from 'react';
import sections from "./../../ShopData";
import MenuItem from '../menu-item/MenuItem';

import "./directory.styles.scss";

const Directory = () => {
    const [sectionData] = useState(sections);

    return (
        <div className="directory-menu">
            {
                sectionData.map(({title, id, imageUrl, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))
            }
        </div>
    );
};

export default Directory;