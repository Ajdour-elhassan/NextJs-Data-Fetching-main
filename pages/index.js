import Head from "next/head";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import MetaHead from "../components/Meta/MetaHead";

function HomePage(props) {
  return (
    <div>
      <MetaHead
        title="NextJS Events"
        name="description"
        content="Find a Lot of great events in your city"
      />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
