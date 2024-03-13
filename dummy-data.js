const DUMMY_EVENTS = [
    {
      id: 'e1',
      title: 'Programming for everyone',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
      location: 'Somestreet 25, 12345 San Somewhereo',
      date: '2023-05-12',
      image: 'images/programming.jpeg',
      isFeatured: false,
    },
    {
      id: 'e2',
      title: 'Networking for introverts',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2023-05-30',
      image: 'images/introvert-event.jpeg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Cooking in London',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
      location: 'My Street 12, 10115 London',
      date: '2024-04-10',
      image: 'images/cooking.jpeg',
      isFeatured: true,
    },
    {
      id: 'e4',
      title: 'AI meetup  - Bristol',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
      location: 'My Street 12, Bristol',
      date: '2023-12-10',
      image: 'images/ai.jpeg',
      isFeatured: true,
    },
    {
      id: 'e5',
      title: 'Old cars community',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
      location: 'My Street 12, 10115 Broke City',
      date: '2024-02-14',
      image: 'images/car.jpg',
      isFeatured: true,
    },
    {
      id: 'e6',
      title: 'Jazz players',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
      location: 'My Street 12, 10115 Broke City',
      date: '2024-11-02',
      image: 'images/jazz.jpeg',
      isFeatured: true,
    },
    {
      id: 'e7',
      title: 'Music',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
      location: 'My Street 12, 10115 Broke City',
      date: '2023-02-28',
      image: 'images/music.jpeg',
      isFeatured: true,
    },
    {
      id: 'e8',
      title: 'Photo course',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
      location: 'My Street 12, 10115 Broke City',
      date: '2024-03-19',
      image: 'images/photo.jpeg',
      isFeatured: true,
    },
    {
      id: 'e9',
      title: 'Travel with us!',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
      location: 'My Street 12, 10115 Broke City',
      date: '2024-04-10',
      image: 'images/travel.jpeg',
      isFeatured: true,
    },
    {
      id: 'e10',
      title: 'London journey',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
      location: 'My Street 12, 10115 Broke City',
      date: '2024-05-02',
      image: 'images/trip.jpeg',
      isFeatured: true,
    }
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }
