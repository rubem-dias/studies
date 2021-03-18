const chai = require('chai'),
assert = chai.assert,
expect = chai.expect,
should = chai.should()


describe('String', () => {
    let name = "Rubem"
    it('verificar se eh string', () => {
        name.should.be.a('string')
        expect(name).to.be.a('string')
        assert.typeOf(name, 'string')
    })
})