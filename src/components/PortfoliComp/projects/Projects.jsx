import React, { useState } from 'react';
import Columns from './data';
import classes from './style.module.css';

const ColumnComponent = ({ title, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: selected ? 'blue' : 'white' }}
      className={classes.column}
    >
      <h3 className={classes.title}>{title}</h3>
    </div>
  );
};

const Projects = () => {
  const [selectedColumn, setSelectedColumn] = useState(0);
  const [imagesToShow, setImagesToShow] = useState(10); // Number of images to show at once

  const handleShowMore = () => {
    if (selectedColumn !== null) {
      const columnPhotos = Columns[selectedColumn].photos;
      const nextImagesToShow = imagesToShow + 10;
      setImagesToShow(Math.min(nextImagesToShow, columnPhotos.length));
    }
  };

  return (
    <div>
      <div className={classes.row}>
        {Columns.map((column, index) => (
          <ColumnComponent
            key={index}
            title={column.title}
            selected={selectedColumn === index}
            onClick={() => {
              setSelectedColumn(index);
              setImagesToShow(10); 
            }}
          />
        ))}
      </div>
      <div className={classes['row-child']}>
        {selectedColumn !== null &&
          Columns[selectedColumn].photos.slice(0, imagesToShow).map((photo, index) => (
            <img
              key={index}
              src={photo.link}
              alt={`Photo ${index}`}
              width='100%'
              height='100%'
            />
          ))}
        <div className={classes.showMoreButton}>
          {imagesToShow < Columns[selectedColumn].photos.length && (
            <button onClick={handleShowMore}>Show More</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
