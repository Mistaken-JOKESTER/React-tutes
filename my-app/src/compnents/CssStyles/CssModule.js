import React from 'react'
import './myStyles.css'
import style from './modulecss.module.css'

function CssModule() {
    return (
        <div>
            
            <h1 className={style.success}>From moduled style sheet</h1>            
        </div>
    )
}

export default CssModule
