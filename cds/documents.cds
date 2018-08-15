define view DOCUMENTS as select general_table as main
 left outer to one join general_table as attr on attr.type = 'ATTR' and attr.title = 'Document Type' and main.id = attr.ref1
 association [0..1] to NODES as _node on $projection.Id = _node.Id 
{
 @UI: { 
       lineItem: {position: 10},
       selectionField: {position: 10}
      } 
  key main.id as Id,
  @UI: { 
       lineItem: {position: 20}
      } 
  main.title as Title,
  @UI: { 
       lineItem: {position: 30},
       selectionField: {position: 20}
      } 
  attr.value as DocumentType,
  @UI: { 
       lineItem: {position: 40},
       selectionField: {position: 30}
      } 
  main.createdfld as Createdm,
  _node
} where main.type = 'NODE'
