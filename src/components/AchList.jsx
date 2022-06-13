import Card from "./Card";
import { Grid } from "@chakra-ui/react";

export default function AchList({ achs }) {
  return (
    <div>
      <Grid
        templateColumns="repeat(2, 1fr)"
        templateRows="repeat(4, 1fr)"
        gap={4}
        h="400px"
      >
        {achs
          .sort((a, b) => {
            return new Date(b.tstamp).getTime() - new Date(a.tstamp).getTime();
          })
          .map((ach) => (
            <Card ach={ach} key={ach.id} />
          ))}
      </Grid>
    </div>
  );
}
