import assert from 'static-type-assert'
import compare = assert.compare

import {
  Any,
  NotAny,
  Equal,
  NotEqual,
  Extends,
  Compare
} from './index'

compare<Any<any>, true>('equal')
compare<Any<string>, false>('equal')
compare<Any<number>, false>('equal')

compare<NotAny<any>, false>('equal')
compare<NotAny<string>, true>('equal')
compare<NotAny<number>, true>('equal')

compare<Equal<123, 123>, true>('equal')
compare<Equal<string, string>, true>('equal')
compare<Equal<123, '123'>, false>('equal')
compare<Equal<number, string>, false>('equal')

compare<NotEqual<123, 123>, false>('equal')
compare<NotEqual<string, string>, false>('equal')
compare<NotEqual<123, '123'>, true>('equal')
compare<NotEqual<number, string>, true>('equal')

compare<Extends<123, 123 | 456>, true>('equal')
compare<Extends<123, number>, true>('equal')
compare<Extends<'abc', number>, false>('equal')

compare<Compare<123, 123>, 'equal' | 'broaderRight' | 'broaderLeft'>('equal')
compare<Compare<123 | 456, 123>, 'broaderLeft'>('equal')
compare<Compare<123, 456 | 123>, 'broaderRight'>('equal')
compare<Compare<123 | 456, 456 | 789>, 'mismatch'>('equal')
compare<Compare<string, number>, 'mismatch'>('equal')

compare<Compare.Strict<123, 123>, 'equal'>('equal')
compare<Compare.Strict<123 | 456, 123>, 'broaderLeft'>('equal')
compare<Compare.Strict<123, 456 | 123>, 'broaderRight'>('equal')
compare<Compare.Strict<123 | 456, 456 | 789>, 'mismatch'>('equal')
compare<Compare.Strict<string, number>, 'mismatch'>('equal')
