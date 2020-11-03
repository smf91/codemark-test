import React from 'react'
import cls from './FormControls.module.scss'

export const Input = ({ input, meta, ...props }) => {
    let hasErr = meta.touched && meta.error
    return (
        <div className={cls.formBlock}>
            <div className={cls.formControl + " " + (hasErr ? cls.fieldError : " ")}>
                <input {...input} {...props} />
                { hasErr && <div className={cls.msgError1}>{meta.error}</div>}
            </div>
        </div>
    )
}