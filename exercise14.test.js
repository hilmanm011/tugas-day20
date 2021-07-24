const countBmi = require('./exercise14')
const category = require('./exercise14')

test('countBmi', () => {
    expect(countBmi.countBmi(50, 1.70)).toEqual('17.3')
    expect(countBmi.countBmi(60, 1.70)).toEqual('20.8')
    expect(countBmi.countBmi(75, 1.70)).toEqual('26.0')
    expect(countBmi.countBmi(90, 1.70)).toEqual('31.1')
})

test('category', () => {
    expect(category.category('17.3')).toBe('Under Weight')
    expect(category.category('20.8')).toBe('Normal Weight')
    expect(category.category('26.0')).toBe('Over Weight')
    expect(category.category('31.1')).toBe('Obesity')
})