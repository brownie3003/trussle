export default class ParenthesisChecker {
    constructor() {
        this.openedParenthesis = [];
        this.parenthesisOpen = [ "(", "[", "{" ];
        this.parenthesisClose = [ ")", "]", "}" ];
    }
    check(string) {
        for(let i = 0; i < string.length; i++) {
            if (this.parenthesisOpen.indexOf(string[i]) >= 0) {
                this.openedParenthesis.push(string[i]);
            }
            if (this.parenthesisClose.indexOf(string[i]) >= 0) {
                let lastOpened = this.openedParenthesis.pop();
                let currentCloser = string[i];
                
                // Using the index to compare. { index of 2 in parenthesisOpen, } index of 2 in parenthesisClose
                if (this.parenthesisOpen.indexOf('lastOpened') !== this.parenthesisClose.indexOf('currentCloser')) {
                    return false;
                }
            }
        }
        if (this.openedParenthesis.length > 0) { return false };
        return true;
    }
};
