import React from 'react'
//import { useState } from "react";

const Pagination=({page,setPage,max})=>{

    //const [input,setInput]=useState(1); /* indice de la pagina */

    const nextPage=()=>{
        if(page<max){
            //setInput(input+1);
            setPage(page+1);
        }
    }
    const previusPage=()=>{
        if(page>1){
            //setInput(input-1);
            setPage(page-1);
        }
    }
    const directPage=(event)=>{
        if(event.keyCode===13){ /* cuando se preciona la tecla enter */
            if(event.target.value<1){ 
                setPage(1);
                //setInput(1);
            }else if(event.target.value>max) {
                setPage(max);
                //setInput(max);
            }else {
                //setInput(event.target.value);
                setPage(event.target.value);
            };
        }
    }
    const onChange=(event)=>{
        if(event.target.value<1){ 
            setPage(1);
            //setInput(1);
        }else if(event.target.value>max) {
            setPage(max);
            //setInput(max);
        }else {
            //setInput(event.target.value);
            setPage(event.target.value);
        };
    }

    return(
        <div>
            <button onClick={previusPage}>{"<-"}</button>
            <span> </span>
            <input type="number" name="page" value={page} min={1} max={max} onKeyDown={(event)=>directPage(event)} onChange={(event)=>onChange(event)} />
            <span>de {max} </span>
            <button onClick={nextPage}>{"->"}</button>
        </div>
    );
};

export default Pagination;