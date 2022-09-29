import React from "react";
const Titulo = ({name, className})=>{
    return(
        <>
        <div className={className}>
        <h1><i class="fa-brands fa-spotify"></i> {name}</h1>
        </div>
        </>
    )
}
export default Titulo;