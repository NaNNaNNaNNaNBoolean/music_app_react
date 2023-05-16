import React,{useState,useEffect} from 'react'
import './BG.css'

const BackChange = () => {

    let [colour, setColour] = useState('darkgrey');
    //const [count, setCount] = useState(0);
    
    useEffect(()=>{


        const timer = setInterval(() =>{
            if(colour == 'darkgrey'){
                colour = 'grey'
                setColour(!colour == colour)
                document.body.style.backgroundColor = colour
            }else if( colour == 'grey') {
                colour = 'darkgrey'
                setColour(!colour == colour)
                document.body.style.backgroundColor = colour}
               

            },(5000));

            return () => {
                clearInterval(timer)
                console.log('cleaned up')
            }

    },[])
}

export default BackChange
