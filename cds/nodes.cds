define view NODES as select from general_table
association [0..*] to ATTRIBUTES as _attribute on $projection.Id = _attribute.ParentNode
{
  key id as Id,
  title as Title,
  status as Status,
  _attribute
} where type = 'NODE'
