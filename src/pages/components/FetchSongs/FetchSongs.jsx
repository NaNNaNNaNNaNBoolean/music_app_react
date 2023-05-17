import React,{useEffects} from 'react'

const FetchSongs = () => {
    const [songs,setSongs] =useState([])
        
    async function getSongs(){
        try{ 
            const result = await fetch ('https://api')
            const data = await result.json();
            setSongs(data)
        }catch(err){
            console.log(err.message)
        }
    }
    useEffect(() => {   
        getSongs()
    },([]))
 
    return (
    <div>FetchSongs</div>
  )
}

export default FetchSongs
