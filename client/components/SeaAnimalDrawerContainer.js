/**
 * Sea Animal Drawer Container Component
 * Shows basic information about an Ocean Animal
 *
 * Digital Media Design - Software Engineering Capstone 2019
 * Under the Sea: An interactive guide to our worlds oceans
 * @author Maggie Crocamo
 * {mjcrocamo@gmail.com, mjc494@g.harvard.edu}
 **/

import React, { useState, useEffect, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { seaAnimalDetailsQuery } from './UnderTheSeaQueries';
import SeaAnimalDetails from './SeaAnimalDetails';
import { useLazyQuery } from '@apollo/react-hooks';

const Drawer = lazy(() => import('@material-ui/core/Drawer'));

/**
 * SeaAnimalDrawerContainer Component
 *
 * @param {*} seaAnimalId
 * @param {*} mainImage
 * @param {*} name
 * @param {*} binomialName
 * @param {*} isOpen
 * @param {*} toggleDrawer
 *
 **/
const SeaAnimalDrawerContainer = ({
  seaAnimalId,
  mainImage,
  name,
  binomialName,
  isOpen,
  toggleDrawer
}) => {
  const [getSeaAnimal, { loading, data, error }] = useLazyQuery(
    seaAnimalDetailsQuery
  );

  const [seaAnimal, setSeaAnimal] = useState({});

  const onSeaAnimalFetch = ({ seaAnimal }) => {
    setSeaAnimal(seaAnimal);
  };

  useEffect(() => {
    if (isOpen) {
      getSeaAnimal({ variables: { seaAnimalId } });
    }
    if (data?.seaAnimal) {
      onSeaAnimalFetch(data);
    }
  }, [data, isOpen]);

  return (
    <Suspense fallback={null}>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true
        }}
      >
        <SeaAnimalDetails
          loading={loading}
          seaAnimal={seaAnimal}
          mainImage={mainImage}
          name={name}
          binomialName={binomialName}
          handleDrawerClose={toggleDrawer(false)}
        />
      </Drawer>
    </Suspense>
  );
};

SeaAnimalDrawerContainer.propTypes = {
  seaAnimalId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  binomialName: PropTypes.string.isRequired,
  mainImage: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default SeaAnimalDrawerContainer;
