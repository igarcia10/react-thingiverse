import React from 'react'

interface ILandingProps {
    isLoading: boolean
};

const Landing: React.FC<ILandingProps> = ({ isLoading }) => (
    isLoading ? <div>Redirecting...</div> : <div>You must log in to Thingiverse.</div >
);


export default Landing;