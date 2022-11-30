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
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });
    it('should return the string "Hello, Alex!" when called with "Alex" as an parameter', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return the string "Hello, Pat!" when called with "Pat" as a parameter', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
})