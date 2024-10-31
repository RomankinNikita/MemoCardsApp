import { createLazyFileRoute } from "@tanstack/react-router";
import Layout from "../components/Layout/Layout";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Layout title="Home">
      <p>Home Page</p>
    </Layout>
  );
}
