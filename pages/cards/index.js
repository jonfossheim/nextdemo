import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Index = ({ cards }) => {
  return (
    <div className='cardsArr'>
      {cards.map((c, idx) => {
        const { name, imageUrl, id } = c;
        return (
          <Link key={idx} passHref href={`/cards/${id}`}>
            <div>
              <Image width={250} height={375} src={imageUrl} alt={name} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export const filterCards = (arr) => {
  return arr.filter((item) => item.imageUrl);
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://api.magicthegathering.io/v1/cards');
  const data = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  const temp = data.cards;
  const cards = filterCards(temp);

  return {
    props: {
      cards,
    },
  };
}

export default Index;
