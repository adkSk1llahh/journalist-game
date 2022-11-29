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
    title: 'Распространенная практика - Нападение на журналистов',
    description: null,
    img: null,

    children: [
      {
        id: 1,
        title: 'title1',
        description: null,
        img: null,
        children: [
          {
            id: 1,
            sender: 1,
            img: null,
            text: 'qwe',
            description: null,
            children: [

            ]
          },
        ]
      },

      {
        id: 2,
        title: 'title2',
        description: null,
        img: null,
        children: [
          {
            id: 1,
            sender: 1,
            img: null,
            text: 'asd',
            description: null,
            children: [

            ]
          },
        ]
      },
    ]
  },
]
