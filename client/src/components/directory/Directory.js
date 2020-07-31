import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import MenuItem from '../menu-item/MenuItem';
import { selectDirectorysections } from '../../redux/directory/directorySelector';

import {DirectoryContainer} from "./directory.styles";


const Directory = ({sections}) => {
    return (
        <DirectoryContainer>
            {
                sections.map(({id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps} />
                ))
            }
        </DirectoryContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorysections
})

export default connect(mapStateToProps)(Directory);