/**
 * Under the Sea styles. These are made using the makeStyles hook
 * provided by Material-UI
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import { makeStyles } from '@material-ui/core/styles';
import {
  CONSERVATION_PLACEHOLDER_IMAGE_HEIGHT,
  CONSERVATION_PLACEHOLDER_IMAGE_WIDTH,
  GAME_PHOTO_HEIGHT,
  GAME_PHOTO_WIDTH,
  SEA_ANIMAL_CARD_IMAGE_HEIGHT,
  SEA_ANIMAL_CARD_IMAGE_WIDTH,
  WELCOME_TOPIC_PLACEHOLDER_IMAGE_HEIGHT,
  WELCOME_TOPIC_PLACEHOLDER_IMAGE_WIDTH,
  CAROUSEL_PHOTO_PLACEHOLDER_HEIGHT,
  CAROUSEL_PHOTO_PLACEHOLDER_WIDTH,
  GAME_VIDEO_PLACEHOLDER_HEIGHT,
  GAME_VIDEO_PLACEHOLDER_WIDTH
} from './UnderTheSeaConstants';

/**
 * App Component Styles
 */
export const useAppStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(6),
    paddingBottom: theme.spacing(4)
  }
}));

/**
 * ConservationLinkPage Component Styles
 */
export const useConservationLinkStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: 'center'
  },
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(1)
  },
  content: {
    flex: '1 0 auto'
  },
  conservationPlaceholder: {
    height: CONSERVATION_PLACEHOLDER_IMAGE_HEIGHT,
    width: CONSERVATION_PLACEHOLDER_IMAGE_WIDTH
  },
  cover: {
    width: 935,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    alignSelf: 'center'
  },
  subTextMargin: {
    marginBottom: theme.spacing(5)
  },
  subText: {
    color: theme.palette.secondary.main
  }
}));

/**
 * ErrorBoundary Component Styles
 */
export const useErrorBoundaryStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(6)
  },
  subTextMargin: {
    marginBottom: theme.spacing(5)
  },
  container: {
    paddingBottom: theme.spacing(18)
  },
  title: {
    color: 'white'
  },
  subText: {
    color: 'white'
  }
}));

/**
 * GameDirections Component Styles
 */
export const useGameDirectionsStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4)
  },
  gamePlaceholder: {
    height: GAME_PHOTO_HEIGHT,
    width: GAME_PHOTO_WIDTH
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: 'center'
  },
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(1)
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    maxWidth: 1350,
    maxHeight: 700
  },
  controls: {
    color: '#b0c9d4'
  },
  descriptions: {
    marginBottom: theme.spacing(4)
  },
  description: {
    marginBottom: theme.spacing(1)
  },
  subTextMargin: {
    marginBottom: theme.spacing(5)
  },
  game: {
    textAlign: 'center',
    paddingBottom: theme.spacing(5)
  },
  paper: {
    padding: theme.spacing(5)
  },
  download: {
    paddingBottom: theme.spacing(2)
  },
  getApp: {
    height: 60,
    width: 60
  },
  video: {
    height: 560,
    maxWidth: 900,
    paddingBottom: theme.spacing(5)
  }
}));

/**
 * NarBar Component Styles
 */
export const useNavBarStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  toolbar: {
    minHeight: 125,
    alignItems: 'flex-start',
    paddingLeft: theme.spacing(3)
  },
  logo: {
    maxWidth: 100,
    height: 100,
    marginTop: 7
  },
  subTitle: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  title: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 34
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 34
    }
  },
  links: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    alignSelf: 'center',
    marginRight: 30
  },
  homelink: {
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    alignSelf: 'center'
  },
  menu: {
    alignSelf: 'center'
  }
}));

/**
 * NavBar Menu Component Styles
 */
export const useNavBarMenuStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    },
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  link: {
    color: 'white'
  }
}));

/**
 * NotFound Component Styles
 */
export const useNotFoundStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(8)
  },
  subTextMargin: {
    marginBottom: theme.spacing(5)
  },
  subText: {
    color: 'white'
  }
}));

/**
 * Sea Animal Card Component Styles
 */
export const useSeaAnimalCardStyles = makeStyles(theme => ({
  fullList: {
    width: 'auto'
  },
  card: {
    maxWidth: 394,
    position: 'relative'
  },
  drawerCard: {
    maxWidth: 750
  },
  seaAnimalPlaceholder: {
    height: SEA_ANIMAL_CARD_IMAGE_HEIGHT,
    width: SEA_ANIMAL_CARD_IMAGE_WIDTH
  },
  learnMore: {
    color: '#b0c9d4'
  }
}));

/**
 * Sea Animal Details Component Styles
 */
export const useSeaAnimalDetailsStyles = makeStyles(theme => ({
  list: {
    maxWidth: 810
  },
  fullList: {
    width: 'auto'
  },
  media: {
    height: 160
  },
  drawerCard: {
    maxWidth: 810
  },
  link: {
    color: '#b0c9d4'
  }
}));

/**
 * Sources Component Styles
 */
export const useSourceStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: 'auto'
  },
  sourceTitle: {
    color: '#b0c9d4'
  },
  section: {
    marginBottom: theme.spacing(5),
    overflowWrap: 'break-word',
    flexWrap: 'wrap'
  }
}));

/**
 * Placeholder Components styles
 */
export const usePlaceholderStyles = makeStyles(theme => ({
  carouselPhoto: {
    padding: 275,
    maxWidth: 1200
  },
  carouselPlaceholder: {
    height: CAROUSEL_PHOTO_PLACEHOLDER_HEIGHT,
    maxWidth: CAROUSEL_PHOTO_PLACEHOLDER_WIDTH
  },
  gamePlaceholder: {
    height: GAME_VIDEO_PLACEHOLDER_HEIGHT,
    maxWidth: GAME_VIDEO_PLACEHOLDER_WIDTH
  },
  conservationPlaceholder: {
    height: CONSERVATION_PLACEHOLDER_IMAGE_HEIGHT,
    width: CONSERVATION_PLACEHOLDER_IMAGE_WIDTH,
    maxWidth: CONSERVATION_PLACEHOLDER_IMAGE_WIDTH
  },
  welcomeTopicPlaceholder: {
    height: WELCOME_TOPIC_PLACEHOLDER_IMAGE_HEIGHT,
    width: WELCOME_TOPIC_PLACEHOLDER_IMAGE_WIDTH,
    maxWidth: WELCOME_TOPIC_PLACEHOLDER_IMAGE_WIDTH
  },
  seaAnimalPlaceholder: {
    height: SEA_ANIMAL_CARD_IMAGE_HEIGHT,
    width: SEA_ANIMAL_CARD_IMAGE_WIDTH
  },
  underHero: {
    padding: theme.spacing(5)
  },
  underPaper: {
    padding: theme.spacing(2)
  },
  card: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(1)
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    maxWidth: 300
  },
  welcomeTopic: {
    marginTop: theme.spacing(7)
  },
  seaAnimal: {
    minHeight: 40
  },
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4)
  },
  subTextMargin: {
    marginBottom: theme.spacing(5)
  },
  section: {
    marginBottom: theme.spacing(5)
  },
  sources: {
    marginBottom: theme.spacing(10)
  },
  gamePaper: {
    padding: theme.spacing(5),
    height: 200,
    marginBottom: theme.spacing(5)
  }
}));

/**
 * Welcome Page Carousel Component styles
 */
export const useWelcomePageCarouselStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(4)
  },
  underHero: {
    padding: theme.spacing(5)
  },
  card: {
    display: 'flex'
  }
}));

/**
 * Welcome Page Topics Component Styles
 */
export const useWelcomeTopicStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(7)
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: 'center'
  },
  welcomeTopicPlaceholder: {
    height: WELCOME_TOPIC_PLACEHOLDER_IMAGE_HEIGHT,
    width: WELCOME_TOPIC_PLACEHOLDER_IMAGE_WIDTH
  },
  card: {
    [theme.breakpoints.down('xl')]: {
      display: 'flex'
    },
    [theme.breakpoints.down('lg')]: {
      display: 'flex'
    },
    [theme.breakpoints.down('md')]: {
      display: 'flex'
    },
    [theme.breakpoints.down('sm')]: {
      display: 'initial'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'initial'
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(1)
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    maxWidth: 450
  }
}));
