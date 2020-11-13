import { change, reset } from 'redux-form'

const TOOGLE_IS_GROUPING = "TOOGLE_IS_GROUPING"
const REFRESH_LIST_IMG = "REFRESH_LIST_IMG"
const CLEAN_LIST_IMG = "CLEAN_LIST_IMG"

let initialState = {
    fieldInput: '',
    listImg: [],
    isGrouping: false
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case REFRESH_LIST_IMG:
            let newImg = {
                url: action.url,
                tag: action.tag,
                id: action.id
            }
            return {
                ...state, listImg: [...state.listImg, newImg]
            }
        case TOOGLE_IS_GROUPING:
            return {
                ...state, isGrouping: !state.isGrouping
            }
        case CLEAN_LIST_IMG:
            return {
                ...state, listImg: []
            }
        default:
            return state
    }
}

export const cleanListImg = () => ({ type: CLEAN_LIST_IMG })
export const refreshListImg = (url, tag, id) => ({ type: REFRESH_LIST_IMG, url, tag, id })
export const tooleIsGrouping = () => ({ type: TOOGLE_IS_GROUPING })

export const getMeImg = (tag) => {
    let API_KEY = 'HQoiB7tZcHFuvYTruWYgEAi03VKPtg11'
    return async (dispatch) => {
        debugger
        let response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag.search}`)
        if (response.ok) {
            let json = await response.json()
            dispatch(reset('search'))
            dispatch(refreshListImg(json.data.image_original_url, tag, json.data.id))
        } else {
            alert("Ошибка HTTP: " + response.status);
        }
    }
}

export const clearDataSearch = () => {
    return (dispatch) => {
        dispatch(reset('search'))
        dispatch(cleanListImg())
    }
}

export const reSearchImg = (tag) => {
    return (dispatch) => {
        dispatch(change('search', 'search', tag.search))
    }
}

export default searchReducer