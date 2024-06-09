import React from 'react' ;
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
   

function Github() {

    const data = useLoaderData()

    const {userid} =useParams();

                return(
                    
                    <h1>the nvalue is:{data.followers}</h1>
    



                )
}

export default Github;

export const githubInfoLoder = async () => {

        const response = await fetch('https://api.github.com/users/manishb70')
        return response.json()

} 

