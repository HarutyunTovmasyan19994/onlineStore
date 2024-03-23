import {all,spawn} from "redux-saga/effects"
import productSaga from "./product";
export default function* rootSaga(){
const sagas = [productSaga]
    yield all(
        sagas.map(s=>spawn(s))
    )

}




