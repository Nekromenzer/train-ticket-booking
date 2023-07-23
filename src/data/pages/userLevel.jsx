const data = {
  levels: [
    {
      name: 'Regular',
      badge:
        'https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-medal-awards-justicon-lineal-color-justicon-2.png',
      discount: 0,
      description: (
        <p className='text-justify text-base leading-8'>
          You are a regular member of our service, to become Silver member you
          need to book 5 tickets,
          <span className='text-base font-roboto italic text-black'>
            {' '}
            each ticket will give you 1 point
          </span>
        </p>
      )
    },
    {
      name: 'Silver',
      badge:
        'https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-medal-awards-justicon-lineal-color-justicon-1.png',
      discount: 5,
      description: (
        <p className='text-justify text-base leading-8'>
          You are a Silver member of our service, to become Gold member you need
          to book 10 tickets,{' '}
          <span className='text-base font-roboto italic text-black'>
            each ticket will give you 1 point
          </span>
        </p>
      )
    },
    {
      name: 'Gold',
      badge:
        'https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-medal-awards-justicon-lineal-color-justicon-2.png',
      discount: 10,
      description: (
        <p className='text-justify text-base leading-8'>
          You are a Gold member of our service, to become Platinum member you
          need to book 15 tickets,{' '}
          <span className='text-base font-roboto italic text-black'>
            each ticket will give you 1 point
          </span>
        </p>
      )
    },
    {
      name: 'Platinum',
      badge:
        'https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-medal-awards-justicon-lineal-color-justicon-3.png',
      discount: 15,
      description: (
        <p className='text-justify text-base leading-8'>
          You are a Platinum member of our service,{' '}
          <span className='text-base font-roboto italic text-black'>
            you have 15% of discount for all tickets
          </span>
        </p>
      )
    }
  ],
  seats: [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 }
  ],
  windowSeats: [1, 4, 5, 8, 9, 12, 13, 16, 17, 20]
}

export default data
