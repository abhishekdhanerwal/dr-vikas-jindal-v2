import { Banner } from '@/components/home/banner';
import { Booking } from '@/components/home/booking';
import { QuickInfo } from '@/components/home/quick-info';
import { QuickReview } from '@/components/home/quick-reviews';
import { Services } from '@/components/home/services';
import { WhyChooseUs } from '@/components/home/why-choose-us';

export default function Home() {
  return (
    <>
      <Banner />
      <QuickInfo />
      <Services />
      <WhyChooseUs />
      <QuickReview />
      <Booking />
    </>
  );
}
