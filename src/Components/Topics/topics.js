import React from 'react';
import {Link} from 'react-router-dom';
/*------- CSS --------*/
/*------- COMPONENTS --------*/

const Topics = () => {
    return (
        <div>
            <ul>
                <li>
                <Link to="/topics/callback">callback</Link>
                </li>
                <li>
                <Link to="/topics/promise">Promise</Link>
                </li>
                <li>
                <Link to="/topics/async-await">Async/Await</Link>
                </li>
            </ul>
         

        </div>
    )
}

export default Topics;