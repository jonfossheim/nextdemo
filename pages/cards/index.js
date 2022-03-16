import React from 'react';
import Link from 'next/link';

const Index = ({ cards }) => {
  return (
    <div>
      {cards.map((c, idx) => {
        const { name, rarity, id } = c;
        return (
          <Link key={idx} passHref href={`/cards/${id}`}>
            <div>
              <h3>{name}</h3>
              <p>{rarity}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://api.magicthegathering.io/v1/cards');
  const data = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  console.log(data);
  const cards = data.cards;
  return {
    props: {
      cards,
    },
  };
}

export default Index;
