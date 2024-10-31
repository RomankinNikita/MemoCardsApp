import { createLazyFileRoute } from "@tanstack/react-router";
import Layout from "../../components/Layout/Layout";
import Card from "../../components/Card/Card";

export const Route = createLazyFileRoute("/cards/$cardId")({
  component: CardPage,
});

function CardPage() {
  const { cardId } = Route.useParams();
  return (
    <Layout back title={`Card ${cardId}`}>
      <Card front={`Card ${cardId} Front`} back={`Card ${cardId} Back`} />
    </Layout>
  );
}
