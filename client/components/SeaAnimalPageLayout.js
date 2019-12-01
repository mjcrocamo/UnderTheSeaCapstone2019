/**
 * The Under the Sea Sea Animal Page Layout Component
 * Shows users the list of animals (cards) that they can
 * learn about
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import SeaAnimalCard from './SeaAnimalCard';
import { SeaAnimalPageLayoutPlaceholder } from './UnderTheSeaPlaceholders';
import { Typography } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { seaAnimalListQuery } from './UnderTheSeaQueries';
import { GLOBAL_FONT_VARIANT } from './UnderTheSeaConstants';

/**
 * Sea animal page component
 *
 * @param {*} props
 */
const SeaAnimalPage = () => {
  const { loading, error, data } = useQuery(seaAnimalListQuery);
  return (
    <Fragment>
      <Typography
        gutterBottom
        variant={GLOBAL_FONT_VARIANT}
        color="textPrimary"
        component="h2"
      >
        Discover the Creatures Beneath our Oceans
      </Typography>
      {loading ? (
        <SeaAnimalPageLayoutPlaceholder />
      ) : (
        <Grid container spacing={2}>
          {data?.seaAnimals?.map(({ id, ...props }) => {
            return (
              <Grid item key={id}>
                <SeaAnimalCard {...props} seaAnimalId={id} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Fragment>
  );
};

export default SeaAnimalPage;
