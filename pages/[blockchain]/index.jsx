import Layout from "../../components/layout";

export default function Blockchain({ blockchain }) {
  return (
    <Layout>
      <h1>Here Will be Page About a {blockchain} Blockchain</h1>
    </Layout>
  );
}

export function getServerSideProps(context) {
  return { props: { blockchain: context.query.blockchain } };
}
