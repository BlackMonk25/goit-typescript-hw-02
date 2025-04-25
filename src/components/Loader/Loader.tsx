// import css from './Loader.module.css'
// import { BounceLoader } from 'react-spinners';

// export default function Loader() {
//     return <BounceLoader className={css.loader}/>;
// }

import css from './Loader.module.css';
import { BounceLoader } from 'react-spinners';

export default function Loader() {
    return (
        <div className={css.loaderContainer}>
            <BounceLoader className={css.loader} />
        </div>
    );
}
