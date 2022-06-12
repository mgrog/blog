import {Flex, SiteText} from '@elements';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Flex col centered>
      <SiteText css={{fontSize: '10em', fontFamily: 'Montserrat, sans-serif'}} weight={600}>
        404
      </SiteText>
      <SiteText>Lost, Friend?</SiteText>
      <Link href='/'>Go Home</Link>
    </Flex>
  );
}
