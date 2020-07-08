import React, { useState } from 'react';
import sections from "./../../ShopData";
import MenuItem from '../menu-item/MenuItem';

import "./directory.styles.scss";

const Directory = () => {
    const [sectionData] = useState(sections);

    return (
        <div className="directory-menu">
            {
                sectionData.map(({id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </div>
    );
};

export default Directory;