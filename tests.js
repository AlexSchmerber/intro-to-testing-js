// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string")
    });
    it('should return the string "Hello, Jane!" when called with Jane as an parameter', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when called with "Alex" as an parameter', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when called with "Pat" as a parameter', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when parameter is undefined', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when the parameter is equal to the boolean true', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when the parameter is equal to the boolean false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when parameter is null', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when the parameter is equal to the number 21', function() {
        expect(sayHello(21)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when the parameter is equal to an object', function() {
        expect(sayHello(Object)).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean value', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true if the parameter is equal to 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return false if parameter is equal to "5"', function() {
        expect(isFive("5")).toBe(false)
    });
});