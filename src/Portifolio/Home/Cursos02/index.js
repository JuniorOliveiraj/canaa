
import "./style.css";
import { useState } from "react";
export default function TEste() {
    const [curse01, setCurse01] = useState(false)
    const [curse02, setCurse02] = useState(true)
    const [curse03, setCurse03] = useState(false)

    return (
        <section  >
            <div className="options"  >
                <div className={ !curse01 ?  "option active": "option"}  onClick={()=>{!curse01 && curse01 ?  setCurse01(false) : setCurse01(true); setCurse02(false); setCurse03(false)}} style={{backgroundImage:`url(/static/illustrations/Cursos/Curso${3}.jpg`}}>
                    <div className="shadow"></div>
                    <div className="label">
                        {/* <div className="icon">
                            <i className="fas fa-walking"></i>
                        </div> */}
                        <div className="info">
                            <div className="main">Blonkisoaz</div>
                            <div className="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
                <div className={ !curse02 ?  "option active": "option"}  onClick={()=>{!curse02 && curse02 ?  setCurse02(false) : setCurse02(true) ; setCurse01(false); setCurse03(false) }}  style={{backgroundImage:`url(/static/illustrations/Cursos/Curso${1}.jpg`}}>
                    <div className="shadow"></div>
                    <div className="label">
                        {/* <div className="icon">
                            <i className="fas fa-snowflake"></i>
                        </div> */}
                        <div className="info">
                            <div className="main">basic UI/UX</div>
                            <div className="sub">Printo oara ajudar em seu projeto</div>
                        </div>
                    </div>
                </div>
                <div className={ !curse03 ?  "option active": "option"}  onClick={()=>{!curse03 && curse03 ?  setCurse03(false) : setCurse03(true);  setCurse02(false); setCurse01(false) }}  style={{backgroundImage:`url(/static/illustrations/Cursos/Curso${2}.jpg`}}>
                    <div className="shadow"></div>
                    <div className="label">
                        {/* <div className="icon">
                            <i className="fas fa-tree"></i>
                        </div> */}
                        <div className="info">
                            <div className="main">Iteresuselle</div>
                            <div className="sub">Omuke trughte a otufta</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}