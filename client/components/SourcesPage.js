/**
 * Sources Page Component
 * Shows users all of the sources for information/images on the site
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React from 'react';
import Link from '@material-ui/core/Link';
import { useQuery } from '@apollo/react-hooks';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { sourcesQuery } from './UnderTheSeaQueries';
import { useSourceStyles } from './UnderTheSeaStyles';
import {
  UNDER_THE_SEA_FONT_SIZES,
  GLOBAL_FONT_VARIANT,
  SOURCE_IDS
} from './UnderTheSeaConstants';
import { SourcesPlaceholder } from './UnderTheSeaPlaceholders';

const { SOURCES, SOURCE_NAME } = UNDER_THE_SEA_FONT_SIZES;
const { GAMES, VIDEOS, WEBSITES, COURSES, DOCUMENTATION, IMAGES } = SOURCE_IDS;

/**
 * Sources Page Component
 */
const SourcesPage = () => {
  const classes = useSourceStyles();
  const games = useQuery(sourcesQuery, { variables: { typeId: GAMES } });
  const videos = useQuery(sourcesQuery, { variables: { typeId: VIDEOS } });
  const websites = useQuery(sourcesQuery, { variables: { typeId: WEBSITES } });
  const courses = useQuery(sourcesQuery, { variables: { typeId: COURSES } });
  const images = useQuery(sourcesQuery, { variables: { typeId: IMAGES } });
  const documentation = useQuery(sourcesQuery, {
    variables: { typeId: DOCUMENTATION }
  });

  const sourcesMap = [
    {
      title: 'Game Sources',
      data: games
    },
    {
      title: 'Content Sources',
      data: websites
    },
    {
      title: 'Image Sources',
      data: images
    },
    {
      title: 'Video Sources',
      data: videos
    },
    {
      title: 'Courses',
      data: courses
    },
    {
      title: 'Documentation',
      data: documentation
    }
  ];

  return (
    <div className={classes.root}>
      <Typography
        variant={GLOBAL_FONT_VARIANT}
        gutterBottom
        color="textPrimary"
        component="h2"
        className={classes.section}
      >
        Sources Cited
      </Typography>
      {sourcesMap.map(({ title, data }) =>
        data.loading ? (
          <SourcesPlaceholder />
        ) : (
          <div className={classes.section} key={title}>
            <Typography
              variant={GLOBAL_FONT_VARIANT}
              color="textPrimary"
              component="div"
            >
              <Box fontWeight="fontWeightMedium" fontSize={32}>
                {title}
              </Box>
            </Typography>
            <List className={classes.list}>
              {data?.data?.sources?.map(({ id, url, name, source }) => (
                <ListItem divider key={id}>
                  <Link rel="noopener" rel="noreferrer" href={url}>
                    <Typography component="div">
                      <Box
                        className={classes.sourceTitle}
                        fontWeight="fontWeightMedium"
                        fontSize={SOURCE_NAME}
                        m={1}
                      >
                        {name}
                      </Box>
                    </Typography>
                    <Typography color="textPrimary" component="div">
                      <Box fontSize={SOURCES} m={1}>
                        {source}
                      </Box>
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </div>
        )
      )}
    </div>
  );
};

export default SourcesPage;
