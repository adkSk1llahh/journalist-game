export const senderData = [
  {
    id: 1,
    name: 'Собеседник',
    colorType: 'primary'
  },
  {
    id: 2,
    name: 'Я',
    colorType: 'success'
  },
  {
    id: 3,
    name: 'Комментарий',
    colorType: 'warning'
  }
]

export const catalogData = [
  {
    id: 1,
    key: 'data',
    title: 'data',
    description: 'lorem ipsum',
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',

    role: [
      {
        id: 1,
        title: 'role1',
        description: 'lorem ipsum',
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        children: [
          {
            id: 1,
            sender: 1,
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            text: 'lorem ipsum',
            variant: 'first variant',
            children: [
              {
                id: 1,
                sender: 1,
                img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                text: 'lorem ipsum',
                variant: 'first variant',
                children: [
                  {
                    id: 1,
                    sender: 1,
                    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    text: 'lorem ipsum',
                    variant: 'first variant',
                    children: [

                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 2,
            sender: 1,
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            text: 'lorem ipsum321',
            variant: 'first variant',
            children: [
              {
                id: 1,
                sender: 1,
                img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                text: 'lorem ipsum',
                variant: 'first variant',
                children: [
                  {
                    id: 1,
                    sender: 1,
                    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    text: 'lorem ipsum',
                    variant: 'first variant',
                    children: [

                    ]
                  }
                ]
              }
            ]
          },
        ]
      },
      {
        id: 2,
        title: 'role2',
        description: 'lorem ipsum',
        img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        children: [
          {
            id: 1,
            sender: 1,
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
            text: 'lorem ipsum',
            variant: 'first variant',
            children: [
              {
                id: 1,
                sender: 1,
                img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                text: 'lorem ipsum',
                variant: 'first variant',
                children: [
                  {
                    id: 1,
                    sender: 1,
                    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                    text: 'lorem ipsum',
                    variant: 'first variant',
                    children: [

                    ]
                  }
                ]
              }
            ]
          },
        ]
      },
    ]
  },
]
