import React from 'react'
//import { useState } from "react";

const Pagination=({page,setPage,max})=>{

    //const [input,setInput]=useState(page); /* indice de la pagina */

    const nextPage=()=>{
        if(page<max){
            setPage(page+1);
            //setInput(page);
        }
    }
    const previusPage=()=>{
        if(page>1){
            //setInput(input-1);
            setPage(page-1);
            //setInput(page);
        }
    }
    /*const directPage=(event)=>{
        if(event.keyCode===13){ // cuando se preciona la tecla enter 
            if(event.target.value<1){ 
                setInput(1);
                setPage(input)
            }else if(event.target.value>max) {
                setInput(max);
                setPage(input);
                //setInput(max);
            }else {
                setInput(event.target.value);
                setPage(input);
            };
        }
    }
    const onChange=(event)=>{
        if(event.target.value<1){ 
            setInput(1);
            setPage(input);
            //setInput(1);
        }else if(event.target.value>max) {
            setInput(max);
            setPage(input);
            //setInput(max);
        }else {
            setInput(event.target.value);
            setPage(input);
        };
    }*/

    return(
        <div>
            <button onClick={previusPage}>{"<-"}</button>
            <span> </span>
            <input type="number" name="page" value={page} min={1} max={max} disabled="disabled" /> {/*onChange={(event)=>onChange(event)}  onKeyDown={(event)=>directPage(event)}*/}
            <span>de {max} </span>
            <button onClick={nextPage}>{"->"}</button>
        </div>
    );
};

export default Pagination;