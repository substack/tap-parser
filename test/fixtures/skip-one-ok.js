module.exports =
[ [ 'line', 'TAP version 13\n' ],
  [ 'version', '13' ],
  [ 'line', 'ok 1 totally fine # SKIP\n' ],
  [ 'assert',
    { ok: true, id: 1, skip: true, name: 'totally fine' } ],
  [ 'line', '1..1\n' ],
  [ 'plan', { start: 1, end: 1 } ],
  [ 'complete',
    { ok: true,
      count: 1,
      pass: 1,
      skip: 1,
      plan: { start: 1, end: 1 } } ] ]
