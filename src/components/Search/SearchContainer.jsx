import React from 'react'
import { connect } from 'react-redux'
import cls from './Search.module.scss'
import { getMeImg, cleanListImg, clearDataSearch, tooleIsGrouping } from '../../redux/search-reducer'
import { Field, reduxForm } from 'redux-form'
import { Input } from '../Form controls/FormControls'
import { requared } from '../utils/validator'

const SearchContainer = (props) => {
    const onSubmit = (formData) => {
        props.getMeImg(formData)
    }
    const clearData = () => {
        props.clearDataSearch()
    }
    const tooleGrouping = () => {
        props.tooleIsGrouping()
    }
    return (
        <div className={cls.searchBlock}>
            <SearchReduxForm onSubmit={onSubmit} className={cls.searchModule} />
            <div className={cls.buttonBlock}>
                <button onClick={clearData}>Очистить</button>
                <button onClick={tooleGrouping}>{(props.isGrouping?'Разгрупировать':'Сгрупировать')}</button>
            </div>
        </div >
    )
}

const Search = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={cls.formBlock}>
            <Field placeholder={"enter the tag"} name={"search"} component={Input} validate={[requared]} />
            <button>Загрузить</button>
        </form>
    )
}

const SearchReduxForm = reduxForm({
    form: 'search',
})(Search)

const mapStateToProps = (state) => {
    return {
        searchData: state.searchReducer,
        fieldValue: state.form.search,
        isGrouping: state.search.isGrouping
    }
}

export default connect(mapStateToProps, { getMeImg, cleanListImg, clearDataSearch, tooleIsGrouping })(SearchContainer)