import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import Layout from "../../components/Layout/Layout";
import { List, ListItem } from "konsta/react";
import { useCallback } from "react";

export const Route = createLazyFileRoute("/cards/")({
  component: Cards,
});

function Cards() {
  const navigate = useNavigate();

  const navigateToCard = useCallback(
    (cardId: number) => {
      navigate({ to: "/cards/$cardId", params: { cardId } });
    },
    [navigate]
  );

  return (
    <Layout title="Learn">
      <p className="font-bold">Cards List</p>
      <List strong outline className="my-3">
        <ListItem title="Card 1" link onClick={() => navigateToCard(1)} />
        <ListItem title="Card 2" link onClick={() => navigateToCard(1)} />
        <ListItem title="Card 3" link onClick={() => navigateToCard(1)} />
      </List>
    </Layout>
  );
}
