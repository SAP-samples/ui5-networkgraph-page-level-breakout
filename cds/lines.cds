define view LINES as select from general_table {
  key id as Id,
  ref1 as IdFrom,
  ref2 as IdTo
} where type = 'LINE'
