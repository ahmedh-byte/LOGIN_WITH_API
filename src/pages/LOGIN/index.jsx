import { useRef } from "react"
import styles from  "../LOGIN/index.module.css"
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useLoader } from "../../store";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


export default function LoginPage()
{
    const {open,close}=useLoader();
    const navigate=useNavigate();
    const phoneinput=useRef();
    const codeinput=useRef();
    const btnclick =()=>{
        open()
        setTimeout(() => {
            close()
            navigate('*')
        }, 1000);
       
       
    }


    const handelsubmit= ()=>{
        open();
     event.preventDefault();
     let data={
     user_phonr:phoneinput.current.value,
     user_code:codeinput.current.value

     }
     // verify
     let endpoint="https://support.israaosman.com/php/index.php/api/auth/login"
     axios.post(endpoint,data).then((res)=>{
        if(res.data.err){
            setTimeout(()=>{
                Swal.fire({
                    icon:'error',
                    title:"wrong user name or password",
                    timer:1000
                }).then(()=>{
                    close();
    
                })

            },1000);
           
        }
        else{
            setTimeout(()=>{
                Swal.fire({
                    icon:'success',
                    title:"successfuy login",
                    timer:1500
                }).then(()=>{
                    close();
                    navigate('/Landing')
    
                })

            },1000)
        
          

        }
        console.log(res.data)
     })

 




    }
    return(
        <div className={`col-12 loginpage d-flex flex-column h-100 justify-content-center align-items-center ${styles.bgc}`}>
            <form  onSubmit={handelsubmit}  className={`${styles.bgcform} p-4 col-10 col-md-5 col-lg-4 rounded shadow p-3 d-flex flex-column gap-4 justify-content-center align-items-center `}>
                <h1 className={styles.h1}>LogIn</h1>
                <div className="buttons col-12 d-flex justify-content-center gap-3">
                  <button onClick={btnclick} type="button" className={styles.mybutton}>
                     <FcGoogle />
                     Login w google               
                  </button>
                  <button  onClick={btnclick} type="button" className={styles.mybutton}>
                    <FaApple />
                     Login w Aplle               
                  </button>
                </div>
                <div className="choselabel d-flex flex-row col-12 justify-content-center align-items-center gap-2" >
                    <hr className={`col-4 border-light `}/>
                  <span className={styles.tc} >or login with</span>
                    <hr className={`col-4 border-light `}/>
                </div>
                <input ref={phoneinput} className={styles.input} type="text"  placeholder="Your Email"/>
                <input ref={codeinput} className={styles.input} type="password"  placeholder="Your Password"/>
                <div className=" col-12 rem d-flex flex-row justify-content-between">
                   <div className="remm d-flex flex-row gap-1">
                        <input type="checkbox" /> 
                        <span className={styles.tc}>Remmber Me</span>
                     
                   </div>
                   <a onClick={btnclick} className={styles.link} href="#">Forget password ?</a>
                </div>
                <button className={`  col-12 ${styles.btn}`}  type="submit">Submit</button>
                


            </form>
        </div>
    )
}