import {StateHandler} from "../src/js/StateHandler.js";

describe('StateHandler', () => {
    "use strict";

    let STATES = [{
        value: 0,
        description: 'StateHandler 1'
    }, {
        value: 1,
        description: 'StateHandler 2'
    }, {
        value: 2,
        description: 'StateHandler 3'
    }];

    it("length", () => {
        expect(new StateHandler().length).toEqual(1);
        expect(new StateHandler(STATES).length).toEqual(3);
    });

    it("new()", () => {
        let state_instance = new StateHandler();
        expect(state_instance.current.value).toEqual(0);
        expect(state_instance.current.description).toEqual('Default');
    });

    it("next() with no states", () => {
        let state_instance = new StateHandler();
        expect(state_instance.current.value).toEqual(0);
        expect(state_instance.current.description).toEqual('Default');
        state_instance.next();
        expect(state_instance.current.value).toEqual(0);
        expect(state_instance.current.description).toEqual('Default');
    });

    it("next() with states", () => {
        let state_instance = new StateHandler(STATES);
        expect(state_instance.current).toEqual(STATES[0]);
        state_instance.next();
        expect(state_instance.current).toEqual(STATES[1]);
        state_instance.next();
        expect(state_instance.current).toEqual(STATES[2]);
        state_instance.next();
        expect(state_instance.current).toEqual(STATES[2]);
    });

    it("hasNext()", () => {
        let state_instance = new StateHandler();
        expect(state_instance.hasNext()).toEqual(false);
    });

    it("hasPrevious()", () => {
        let state_instance = new StateHandler();
        expect(state_instance.hasPrevious()).toEqual(false);
    });

    it("changeTo(state)", () => {
        let state_instance = new StateHandler(STATES);
        expect(state_instance.changeTo(2).current).toEqual(STATES[2]);
        expect(state_instance.changeTo(0).current).toEqual(STATES[0]);
        expect(state_instance.changeTo(-1).current).toEqual(STATES[0]);
        expect(state_instance.changeTo(STATES.length).current).toEqual(STATES[0]);
        expect(state_instance.changeTo(2).current).toEqual(STATES[2]);
    });

    it("previous()", () => {
        let state_instance = new StateHandler(STATES);
        expect(state_instance.changeTo(2).current).toEqual(STATES[2]);
        state_instance.previous();
        expect(state_instance.current).toEqual(STATES[1]);
        state_instance.previous();
        expect(state_instance.current).toEqual(STATES[0]);
        state_instance.previous();
        expect(state_instance.current).toEqual(STATES[0]);
    });

    it("hasNext()", () => {
        let state_instance = new StateHandler(STATES);
        expect(state_instance.hasNext()).toEqual(true);
        state_instance.next();
        expect(state_instance.hasNext()).toEqual(true);
        state_instance.next();
        expect(state_instance.hasNext()).toEqual(false);
    });

});
