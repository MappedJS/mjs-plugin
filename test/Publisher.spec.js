import {Publisher} from "../src/js/Publisher.js";

describe('Publisher', () => {
    "use strict";

    var Pub_Instance = null;

    beforeEach(() => {
        Pub_Instance = new Publisher();
    });

    afterEach(() => {
        Pub_Instance.destroy();
    });

    it("is a singleton", () => {
        let a = new Publisher(1);
        let b = new Publisher(1);
        expect(a).toBe(b);
        a.destroy();
    });

    it("destroy()", () => {
        let instance = new Publisher(Date.now());
        const id = instance.id;
        instance.destroy();
        expect(Publisher.instances[id]).toEqual(null);
    });

    it("subscribe()", () => {
        expect(Pub_Instance.subscribers.any).toBeUndefined();
        Pub_Instance.subscribe();
        expect(Pub_Instance.subscribers.any).not.toBeUndefined();
        expect(Pub_Instance.subscribers.any.length).toEqual(1);
    });

    it("subscribe(topic)", () => {
        expect(Pub_Instance.subscribers.topic).toBeUndefined();
        Pub_Instance.subscribe("topic", () => {});
        expect(Pub_Instance.subscribers.topic).toBeDefined();
        expect(Pub_Instance.subscribers["foo"]).toBeUndefined();
        Pub_Instance.subscribe("foo");
        expect(Pub_Instance.subscribers["foo"]).toBeDefined();
        Pub_Instance.subscribe("foo", () => { let a = 1; });
        expect(Pub_Instance.subscribers["foo"]).toBeDefined();
    });

    it("unsubscribe(topic)", () => {
        const fn = () => {};
        Pub_Instance.subscribe("topic", fn);
        Pub_Instance.subscribe();
        expect(Pub_Instance.subscribers.topic).toBeDefined();
        Pub_Instance.unsubscribe("topic", fn);
        expect(Pub_Instance.subscribers.topic).toEqual([]);
        Pub_Instance.unsubscribe();
        Pub_Instance.unsubscribe("foo");
    });

    it("publish()", () => {
        Pub_Instance.subscribe("any", (a) => {
            expect(a).toEqual([]);
            expect(a.length).toBe(0);
        });
        Pub_Instance.publish();
    });

    it("publish(arg)", () => {
        var test_str = "text";
        Pub_Instance.subscribe("topic", (a) => {
            expect(a).toEqual(test_str);
        });
        Pub_Instance.publish("topic", test_str);
    });

    it("publish([arg])", () => {
        var test_str = "text";
        Pub_Instance.subscribe("topic", (a) => {
            expect(a instanceof Array).toEqual(true);
            expect(a.length).toEqual(3);
        });
        Pub_Instance.publish("topic", [test_str, test_str, test_str]);
    });

});
