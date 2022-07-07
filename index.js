import { reducer } from './reducer.js'
import { initialValue } from './initialValue.js'
import { clean } from './clean.js'

const sample = [5, true, 'hola', false, 'adios', 2]
const preliminaryResult = sample.reduce(reducer, initialValue)
const result = clean(preliminaryResult)
console.log('Informe', result)
