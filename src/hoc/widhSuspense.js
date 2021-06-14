import React from 'react';
import PreLoader from "../components/common/Preloader/Preloader";

export const withSuspense = (Component) => {
return (props) => {
    return <React.Suspense fallback={<PreLoader/>}>
        <Component {...props} />
    </React.Suspense>
};
}