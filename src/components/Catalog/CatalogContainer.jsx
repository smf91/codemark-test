import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import cls from './Catalog.module.scss'
import { reSearchImg} from '../../redux/search-reducer'

const CatalogContainer = (props) => {
    useEffect(() => {
        return props.searchData
    }, [props.searchData])

    const reSearch = (tag) => {
        props.reSearchImg(tag);
    }
    if (props.isGrouping) {
        let unicueSet = new Set(props.searchData.map(i => i.tag.search))
        let arr = [...unicueSet]
        return (
            <>
                {arr.map(item => <ItemGroup tag={item} {...props} key={item} reSearch={reSearch}/>)}
            </>
        )
    }
    else
        return (
            <div className={cls.catalogBlock}>
                {props.searchData.map(img => <CatalogItem data={img} key={img.id} reSearch={reSearch} />)}
            </div>
        )
}

const ItemGroup = (props) => {
    return (
        <div className={cls.itemGroup}>
            <div className={cls.tagNamae}>{props.tag}</div>
            {props.searchData.map(img => {
                if (img.tag.search === props.tag)
                    return <CatalogItem data={img} key={img.id} reSearch={props.reSearch} />})
            }
        </div>
    )
}

const CatalogItem = (props) => {
    return (
        <div className={cls.imgItem} onClick={() => { props.reSearch(props.data.tag) }} >
            <img src={props.data.url} alt="img" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        searchData: state.search.listImg,
        isGrouping: state.search.isGrouping
    }
}

export default connect(mapStateToProps, { reSearchImg })(CatalogContainer)