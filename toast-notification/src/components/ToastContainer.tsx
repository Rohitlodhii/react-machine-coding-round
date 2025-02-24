/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react"

type ToastProps = {
    id : number ;
    message : string;
    color : string ;

}

const ToastContainer = () => {

    const [toast , setToast] = useState<ToastProps[]>([]);

    const timerRef : any = useRef({});

    const handleClose = (id : number) => {
        clearTimeout(timerRef.current[id]);
        delete timerRef.current[id];
        setToast((prevToast)=>{
            
            const filteredArray = prevToast.filter((toast)=>{
                return toast.id !== id;
            })
            return filteredArray
        });
    }

    const handleToast = ( message : string , color : string) => {
        const id = new Date().getTime();
        const newToast = [...toast , {id ,message , color}];

        setToast(newToast);

        timerRef.current[id] = setTimeout(()=>handleClose(id) , 5000);

    }

    

  return (
    <div className="container">
        <div className="toast-container">

            {/* {toast && (
                <div style={{ background : `${color}`}} className="toast">
                    Success Toast <span onClick={()=>handleClose()}>X</span>
                </div>


            )} */}

            {toast.map(({id , message ,color}) => (
                <div key={id} style={{ background : `${color}`}} className="toast">
                {message} Toast <span onClick={()=>handleClose(id)} >X</span>
            </div>
            ))}


        </div>
        <div className="btn-container">
            <button onClick={()=>handleToast("Success" , "green")}>Success Toast</button>
            <button onClick={()=>handleToast("Danger" , "red")}>Success Toast</button>
           
        </div>
    </div>
  )
}

export default ToastContainer