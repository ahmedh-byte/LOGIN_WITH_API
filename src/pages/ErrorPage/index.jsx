import Bigo from "../../components/Bigo"
import style from "../ErrorPage/index.module.css"
import "../ErrorPage/index.css"


export default function ErrorPage()
{
    return(
        <div className="inff d-flex  justify-content-center  align-items-center   flex-column flex-md-row flex-lg-row  col-12 h-100 ">
            <span className={style.myspan}>4</span>
            <Bigo/>
            <span className={style.myspan}>4</span>
            

        </div>
    )
}