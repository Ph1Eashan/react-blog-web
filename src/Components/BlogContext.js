import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [bollywood, setBollywood] = useState([
    {
      Title: ' Title6',
      CategoryName: 'Bollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/86/90/s7lQJO.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '500',
    },
    {
      Title: ' Title7',
      CategoryName: 'Bollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/86/90/s7lQJO.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '501',
    },
    {
      Title: ' Title8',
      CategoryName: 'Bollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/86/90/s7lQJO.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '502',
    },
    {
      Title: ' Title9',
      CategoryName: 'Bollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/86/90/s7lQJO.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '503',
    },
    {
      Title: ' Title1',
      CategoryName: 'Bollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/86/90/s7lQJO.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '504',
    },
  ]);

  const [technology, setTechnology] = useState([
    {
      Title: ' Title10',
      CategoryName: 'Technology',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/94/6/2lhvZU.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '500',
    },
    {
      Title: ' Title11',
      CategoryName: 'Technology',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/94/6/2lhvZU.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '501',
    },
    {
      Title: ' Title12',
      CategoryName: 'Technology',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/94/6/2lhvZU.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '502',
    },
    {
      Title: ' Title13',
      CategoryName: 'Technology',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/94/6/2lhvZU.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '503',
    },
    {
      Title: ' Title2',
      CategoryName: 'Technology',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/94/6/2lhvZU.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '504',
    },
  ]);

  const [hollywood, setHollywood] = useState([
    {
      Title: ' Title14',
      CategoryName: 'Hollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/87/83/bkJ97D.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '500',
    },
    {
      Title: ' Title15',
      CategoryName: 'Hollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/87/83/bkJ97D.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '501',
    },
    {
      Title: ' Title16',
      CategoryName: 'Hollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/87/83/bkJ97D.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '502',
    },
    {
      Title: ' Title17',
      CategoryName: 'Hollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/87/83/bkJ97D.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '503',
    },
    {
      Title: ' Title3',
      CategoryName: 'Hollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/87/83/bkJ97D.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '504',
    },
  ]);

  const [fitness, setFitness] = useState([
    {
      Title: ' Title18',
      CategoryName: 'Fitness',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/50/95/p5UWnt.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '500',
    },
    {
      Title: ' Title19',
      CategoryName: 'Fitness',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/50/95/p5UWnt.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '501',
    },
    {
      Title: ' Title20',
      CategoryName: 'Fitness',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/50/95/p5UWnt.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '502',
    },
    {
      Title: ' Title21',
      CategoryName: 'Fitness',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/50/95/p5UWnt.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '503',
    },
    {
      Title: ' Title4',
      CategoryName: 'Fitness',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/50/95/p5UWnt.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '504',
    },
  ]);

  const [food, setFood] = useState([
    {
      Title: ' Title22',
      CategoryName: 'Food',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/34/46/W6l4nL.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '500',
    },
    {
      Title: ' Title23',
      CategoryName: 'Food',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/34/46/W6l4nL.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '501',
    },
    {
      Title: ' Title24',
      CategoryName: 'Food',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/34/46/W6l4nL.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '502',
    },
    {
      Title: ' Title25',
      CategoryName: 'Food',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/34/46/W6l4nL.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '503',
    },
    {
      Title: ' Title5',
      CategoryName: 'Food',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://mcdn.wallpapersafari.com/medium/34/46/W6l4nL.jpg',
      BlogContent:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer enim neque volutpat ac tincidunt.',
      Likes: '504',
    },
  ]);

  return (
    <BlogContext.Provider
      value={{
        value1: [bollywood, setBollywood],
        value2: [hollywood, setHollywood],
        value3: [technology, setTechnology],
        value4: [fitness, setFitness],
        value5: [food, setFood],
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
