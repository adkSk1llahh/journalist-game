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

    game: {
      title: 'datadata',
      data: [
        {
          id: 1,
          image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
          senderId: 1,
          question: 'lorem ipsum?',
          answers: [
            {
              id: 1,
              title: 'lorem A',
            },
            {
              id: 2,
              title: 'lorem B',
            }
          ]
        },
      ]
    }
  }
]
