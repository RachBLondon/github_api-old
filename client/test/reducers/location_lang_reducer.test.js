import React from 'react';
import {expect} from 'chai';
import reducer from '../../src/reducers/location_lang_reducer'
import * as actions from '../../src/actions/types'


describe('location_lang reducer', function () {

    it('SET_LOCATION_LANG', () => {
        const action = { type: actions.SET_LOCATION_LANG, location : 'London', language: 'Ruby'}
        const state = reducer(null, action)
        expect(state).to.eql({ location : 'London', language: 'Ruby' })
    })

    it('SHOW_USER_DATA', () => {
        const action = { type: actions.SHOW_USER_DATA, pagination: { key : "some stuff"}}
        const state = reducer(null, action)
        expect(state).to.eql({pagination: { key : "some stuff"}})
    })

    it("returns state by default", () => {})
        const action = { type: actions.SOME_ACTION }
        const state = reducer(null, action)
        expect(state).isNull
})
