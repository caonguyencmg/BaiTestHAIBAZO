export const LIST_TREE = [
  {
    id: 1,
    name: "output",
    type: "folder",
    children: [
      {
        id: "c1",
        name: "f1",
        type: "folder",
      },
      {
        id: 2,
        name: "f2",
        type: "folder",
        children: [
          {
            id: "t1",
            name: "f3",
            type: "folder",
            children: [
              {
                id: "i1",
                name: "t2.txt",
                type: "file",
              },
            ],
          },
          {
            id: "t2",
            name: "t1.txt",
            type: "file",
          },
        ],
      },
    ],
  },
];
