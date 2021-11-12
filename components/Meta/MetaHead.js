import Head from "next/head";

function MetaHead(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name={props.name} content={props.contnet} />
      </Head>
    </div>
  );
}

export default MetaHead;
