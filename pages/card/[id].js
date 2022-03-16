import { useRouter } from 'next/router';

const Card = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Card Id: {id}</p>;
};

export default Card;
