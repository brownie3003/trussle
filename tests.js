import ParenthesisChecker from "./ParenthesisChecker.js";
import PrimeFactors from "./PrimeFactors.js";

QUnit.test( "simple brackets will pass", function(assert) {
    let string = "()";
    let PC = new ParenthesisChecker;
    assert.ok(PC.check(string) === true, "Passed!");
});

QUnit.test( "unmatched brackets will fail", (assert) => {
    let string = ")(";
    let PC = new ParenthesisChecker;
    assert.ok(PC.check(string) === false, "Passed!");
});

QUnit.test( "trailing brackets will fail ", (assert) => {
    let string = "()(";
    let PC = new ParenthesisChecker;
    assert.ok(PC.check(string) === false, "Passed!");
});

QUnit.test( "single bracket will fail ", (assert) => {
    let string = "(";
    let PC = new ParenthesisChecker;
    assert.ok(PC.check(string) === false, "Passed!");
});

QUnit.test ( "multiple parenthesis pass ", (assert) => {
    let string = "( { [ ] } )";
    let PC = new ParenthesisChecker;
    assert.ok(PC.check(string) === true, "Passed!")
});

QUnit.test ( "multiple parenthesis fail ", (assert) => {
    let string = "{ [ ( } ) ]";
    let PC = new ParenthesisChecker;
    assert.ok(PC.check(string) === true, "Passed!")
})

QUnit.test ( "Prime factors of 2 is 2 ", (assert)  => {
    let number = 2;
    let PF = new PrimeFactors;
    assert.deepEqual(PF.findPrimeFactors(number), [2], "Passed!");
});

QUnit.test ( " Prime factors of 14 are 2 and 7 ", (assert)  => {
    let number = 14;
    let PF = new PrimeFactors;
    debugger;
    assert.deepEqual(PF.findPrimeFactors(number), [2, 7], "Passed!");
});
