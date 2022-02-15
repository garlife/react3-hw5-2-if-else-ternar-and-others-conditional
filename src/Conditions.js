import React, { useState } from 'react';
import './style.css';

export function IfElseConditions(props) {
  if (props.selected === 'none') {
    return (
      <div className={'none'} style={{ height: '1000px' }}>
        <div className="season">
          <p></p>
        </div>
      </div>
    );
  } else if (props.selected === 'winter') {
    return (
      <div className={'winter'} style={{ height: '1000px' }}>
        <div className="season">
          <p>Зима</p>
        </div>
      </div>
    );
  } else if (props.selected === 'spring') {
    return (
      <div className={'spring'} style={{ height: '1000px' }}>
        <div className="season">
          <p>Весна</p>
        </div>
      </div>
    );
  } else if (props.selected === 'summer') {
    return (
      <div className={'summer'} style={{ height: '1000px' }}>
        <div className="season">
          <p>Лето</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={'autumn'} style={{ height: '1000px' }}>
        <div className="season">
          <p>Осень</p>
        </div>
      </div>
    );
  }

  return null;
}

export function SwitchConditions(props) {
  switch (props.selected) {
    case 'none':
      return (
        <div className={'none'} style={{ height: '1000px' }}>
          <div className="season">
            <p></p>
          </div>
        </div>
      );

    case 'winter':
      return (
        <div className={'winter'} style={{ height: '1000px' }}>
          <div className="season">
            <p>Зима</p>
          </div>
        </div>
      );

    case 'spring':
      return (
        <div className={'spring'} style={{ height: '1000px' }}>
          <div className="season">
            <p>Весна</p>
          </div>
        </div>
      );

    case 'summer':
      return (
        <div className={'summer'} style={{ height: '1000px' }}>
          <div className="season">
            <p>Лето</p>
          </div>
        </div>
      );

    case 'autumn':
      return (
        <div className={'autumn'} style={{ height: '1000px' }}>
          <div className="season">
            <p>Осень</p>
          </div>
        </div>
      );
  }
}

export function DoubleAmpersand(props) {
  return (
    <>
      {props.selected === 'none' &&
        <div className={'none'} style={{ height: '1000px' }}>
          <div className="season">
            <p></p>
          </div>
        </div>
      }

      {props.selected === 'winter' &&
        <div className={'winter'} style={{ height: '1000px' }}>
          <div className="season">
            <p>Зима</p>
          </div>
        </div>
      }
      {props.selected === 'spring' &&
        <div className={'spring'} style={{ height: '1000px' }}>
          <div className="season">
            <p>Весна</p>
          </div>
        </div>
      }

      {props.selected === 'summer' &&
        <div className={'summer'} style={{ height: '1000px' }}>
          <div className="season">
            <p>Лето</p>
          </div>
        </div>
      }
      {props.selected === 'autumn' &&
        <div className={'autumn'} style={{ height: '1000px' }}>
          <div className="season">
            <p>Осень</p>
          </div>
        </div>
      }
    </>
  );
}

function TernJsxConditions(props) {
  return (
    <>
      <div className="season">
        {props.selected === 'none'
          ? ''
          : props.selected === 'winter'
          ? 'Зима'
          : props.selected === 'spring'
          ? 'Весна'
          : props.selected === 'summer'
          ? 'Лето'
          : 'Осень'}
      </div>
    </>
  );
}

export default TernJsxConditions;
