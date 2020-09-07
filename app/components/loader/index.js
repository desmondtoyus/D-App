import React, { memo } from 'react';
import PropTypes from 'prop-types';

function Loader(props){
    return <span style={{fontSize:props.size}}><i className="fa fa-spinner fa-spin"></i>{props.text}</span>
}

Loader.proptypes={
    size: PropTypes.string,
    text:PropTypes.string
}
Loader.defaultProps={
    size:'10px',
    text:`Loading`
}
export default memo(Loader);