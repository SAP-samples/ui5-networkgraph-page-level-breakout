define view ATTRIBUTES as select from general_table {
  key id as Id,
  ref1 as ParentNode,
  title as LabelC,
  value as Value
} where type = 'ATTR'
