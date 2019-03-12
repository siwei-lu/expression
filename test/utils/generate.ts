import  generate from '../../src/utils/generate'

describe('Generate Util', () => {
  it('should returns an array of expression', () => {
    const arr = generate()
    arr.some(v => typeof v === 'number').should.true
    arr.some(v => v['id']).should.true
    arr.length.should.lte(5)
  })
})