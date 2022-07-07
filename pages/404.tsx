import { Flex, Text } from '@components';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Flex col centered>
      <Text fontSize={5} fontFamily='secondary' fontWeight={600}>
        404
      </Text>
      <Text>Lost, Friend?</Text>
      <Link href='/'>Go Home</Link>
    </Flex>
  );
}
