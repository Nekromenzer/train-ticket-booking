const data = {
  levels: [
    {
      name: 'Regular',
      badge:
        'https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-medal-awards-justicon-lineal-color-justicon-2.png',
      discount: '0%',
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
      discount: '5%',
      description:
        'You are a Silver member of our service, to become Gold member you need to book 10 tickets, each ticket will give you 1 point'
    },
    {
      name: 'Gold',
      badge:
        'https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-medal-awards-justicon-lineal-color-justicon-2.png',
      discount: '10%',
      description:
        'You are a Gold member of our service, to become Platinum member you need to book 15 tickets, each ticket will give you 1 point'
    },
    {
      name: 'Platinum',
      badge:
        'https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-medal-awards-justicon-lineal-color-justicon-3.png',
      discount: '15%',
      description:
        'You are a Platinum member of our service, you have 15% of discount for all tickets'
    }
  ]
}

export default data
