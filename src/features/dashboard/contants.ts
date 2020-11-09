import { State } from './entities';

export const mockedDashboardData: State = {
  id: '1',
  columns: [
    {
      id: '1',
      title: 'Lol',
      tasks: [
        {
          id: '1',
          title: 'Eat ass',
          description: '',
        },
        {
          id: '2',
          title: 'Eat pussy',
          description: '',
        },
      ],
    },
    {
      id: '2',
      title: 'Kek',
      tasks: [
        {
          id: '3',
          title:
            'Lorem ipsum dolor sit amet lorem ipsum dolor sit amet, sum dolor set, lorem ipsum dolor lol amet.',
          description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        },
      ],
    },
  ],
};
