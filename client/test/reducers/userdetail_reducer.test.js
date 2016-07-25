import React from 'react';
import {expect} from 'chai';
import reducer from '../../src/reducers/userdetail_reducer'
import * as actions from '../../src/actions/types'


describe('userdetail_reducer', function () {

    it('SHOW_USER_DATA', () => {

        const action = { type: actions.SHOW_USER_DATA,payload:[{name:'test1'}, {name:'test2'}]}
        const state = reducer(null, action)
        expect(state).to.eql(action.payload)
    })

    it("returns state by default", () => {})
    const action = { type: actions.SOME_ACTION }
    const state = reducer(null, action)
    expect(state).isNull
})
