import { eventChannel, END } from 'redux-saga';
import _ from 'lodash';
import {
	all,
	call,
	put,
	select,
	take,
	cancelled
} from 'redux-saga/effects';
import axios, { Canceler } from 'axios';
import * as actions from '../actions';
// import { progressCalc, createPath, parse, stringify } from '../helpers'
import { history } from '../index';
import { del, get, post, put as httpPut } from './http';


// function localStorageToken(token?: string) {
// 	if (token) {
// 		return Http.token = token
// 	}
// 	Http.token = null
// }

function* fetchLogOut({ payload }) {
    yield console.log('logout')
    try {
        const response = yield call (get, 'https://httpbin.org/get')
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

function* fetchSignUp({ payload }) {
    yield console.log(payload)
    try {
        const response = yield call (post, 'register', payload)
        console.log('response', response)
    } catch (error) {
        console.log('error', error)
        
    }
}

function* fetchLogin({ payload }) {
    yield console.log(payload)
    try {
        const response = yield call (post, 'login', payload)
        console.log('response', response)
    } catch (error) {
        console.log('error', error)
    }
}

export default {
    fetchLogOut,
    fetchSignUp,
    fetchLogin
};
