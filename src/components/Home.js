import React, { Component, useEffect, useState } from "react";

const Home = (props) => {
    const[time, setTime] = useState(new Date().toLocaleTimeString());
    const[clicks, setClick]= useState(0);
    useEffect(()=>{
        //console.log("Mounted")
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    },[])

    const clickGame = async ()=>{
        await setClick(clicks+1);
        if(clicks>0){
            if(clicks%15===0) return alert("BruhMeh");
            else if(clicks%5===0) return alert("Meh");
            else if(clicks%3===0) return alert("Bruh");
        }
    }

    useEffect(()=>{
        
    }, [clicks])
    
    return(
        <React.Fragment>
            <h2>
                Welcome to {props.bootcamp}.
                It is {time}
            </h2>
            <button onClick={() => clickGame()}> 
                Clicky Game
            </button>
            {clicks>0?clicks>1?<h4>{clicks} clicks</h4>:<h4>{clicks} click</h4>:null}
        </React.Fragment>
    );
}

export default Home