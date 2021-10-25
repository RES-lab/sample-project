export const idlFactory = ({ IDL }) => {
  const Note = IDL.Record({
    'id' : IDL.Int,
    'title' : IDL.Text,
    'content' : IDL.Text,
    'createdAt' : IDL.Int,
    'tags' : IDL.Vec(IDL.Text),
    'updatedAt' : IDL.Int,
    'isPrivate' : IDL.Bool,
    'notebookId' : IDL.Int,
  });
  const anon_class_12_1 = IDL.Service({
    'addNote' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'deleteNote' : IDL.Func([IDL.Int], [], []),
    'getNotes' : IDL.Func([], [IDL.Vec(Note)], []),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'test' : IDL.Func([], [IDL.Text], ['query']),
    'updateNote' : IDL.Func([IDL.Int, IDL.Text, IDL.Text], [], []),
    'whoami' : IDL.Func([], [IDL.Text], []),
  });
  return anon_class_12_1;
};
export const init = ({ IDL }) => { return []; };