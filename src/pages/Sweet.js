import React from "react";
import Swal from "sweetalert2";


function Sweet()
{
    let myAlert = ()=>{
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    } 
    
    return(
        <>
         <button onClick={myAlert}>Click</button>
        </>
    );
}
export default Sweet;