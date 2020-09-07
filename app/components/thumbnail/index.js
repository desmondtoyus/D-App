import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';


function Thumbnail(props){
    const projectLists = useMemo(()=>props.projects, [props.projects])

    return projectLists.map((data, i)=>{
            return(
                <div className='col-md-6' key={data.id}>
                {data.name}
                    <a className="thumbnail fancybox" rel="ligthbox" href={data.link} target="_blank">
                        <img className="img-responsive" alt={data.alt} src={data.img} />
                        {/* <div className='text-right'>
                            <small className='text-muted'>{data.details}</small>
                        </div> */}
                    </a>
                </div> 
            )
        })
    
}

Thumbnail.protoType = {
    projects: PropTypes.array.isRequired
    // link:PropTypes.string.isRequired,
    // details:PropTypes.string.isRequired,
    // img:PropTypes.string.isRequired,
    // alt: PropTypes.string
}
// Thumbnail.defaultProps={
//     alt:''
// }
export default memo(Thumbnail);