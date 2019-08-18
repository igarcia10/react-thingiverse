import React from 'react'

const URL = `https://www.thingiverse.com/login/oauth/authorize?client_id=${process.env.CLIENT_ID}&response_type=code`;

const Landing = () => (<div>
    <button onClick={() => window.location.href = URL}>Log in</button>
    You must log in to Thingiverse.
    </div >);

export default Landing;