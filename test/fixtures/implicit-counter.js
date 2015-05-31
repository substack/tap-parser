module.exports =
[ [ 'line', 'TAP version 13\n' ],
  [ 'version', '13' ],
  [ 'line', '# beep\n' ],
  [ 'comment', '# beep\n' ],
  [ 'line', 'ok should be equal\n' ],
  [ 'assert', { ok: true, id: 1, name: 'should be equal' } ],
  [ 'line', 'ok should be equivalent\n' ],
  [ 'assert', { ok: true, id: 2, name: 'should be equivalent' } ],
  [ 'line', '# boop\n' ],
  [ 'comment', '# boop\n' ],
  [ 'line', 'ok should be equal\n' ],
  [ 'assert', { ok: true, id: 3, name: 'should be equal' } ],
  [ 'line', 'ok (unnamed assert)\n' ],
  [ 'assert', { ok: true, id: 4, name: '(unnamed assert)' } ],
  [ 'line', '1..4\n' ],
  [ 'plan', { start: 1, end: 4 } ],
  [ 'line', '# tests 4\n' ],
  [ 'comment', '# tests 4\n' ],
  [ 'line', '# pass  4\n' ],
  [ 'comment', '# pass  4\n' ],
  [ 'line', '# ok\n' ],
  [ 'comment', '# ok\n' ],
  [ 'complete',
    { ok: true, count: 4, pass: 4, plan: { start: 1, end: 4 } } ] ]
