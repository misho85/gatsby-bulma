import React from 'react';
import { NavigationControl } from 'react-map-gl';
import screenFull from '../../img/screen-full.svg';
import screenNormal from '../../img/screen-normal.svg';

export default ({
  styleChange,
  onViewportChange,
  goFull,
  fullScreen,
  styleId
}) => (
  <>
    <div
      style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        paddingBottom: '40px',
        paddingRight: '15px'
      }}
    >
      <NavigationControl
        showCompass={false}
        onViewportChange={onViewportChange}
      />
    </div>
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        paddingTop: '15px',
        paddingLeft: '15px'
      }}
    >
      <button
        className="button is-small is-outlined is-rounded is-primary"
        onClick={styleChange}
      >
        {styleId === 'light' ? 'dark' : 'light'} theme
      </button>
    </div>
    <div
      className="icon"
      style={{
        position: 'absolute',
        right: 0,
        top: 0,
        paddingTop: '30px',
        paddingRight: '30px'
      }}
    >
      <button
        onClick={goFull}
        style={{
          width: '30px',
          height: '30px',
          outline: 'none',
          border: 0,
          backgroundColor: 'transparent',
          cursor: 'pointer'
        }}
      >
        <span className="icon">
          <img src={fullScreen ? screenNormal : screenFull} alt="fullScreen" />
        </span>
      </button>
    </div>
  </>
);
