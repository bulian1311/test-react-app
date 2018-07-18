import React from 'react';

export default props => {
  return (
    <div>
      <div className="row">
        <div className="six columns">
          Выбран пользователь <b>{props.user.firstName}</b>
        </div>
        <div className="six columns">
          <span>
            <label htmlFor="description">Описание:</label>
            <textarea
              className="u-full-width"
              id="description"
              defaultValue={props.user.description}
            />
          </span>
        </div>
      </div>
      <div className="row">
        <div className="three columns">
          <span>Адрес проживания:</span>{' '}
          <b>{props.user.address.streetAddress}</b>
        </div>
        <div className="three columns">
          <span>Город:</span> <b>{props.user.address.city}</b>
        </div>
        <div className="three columns">
          <span>Провинция/штат:</span> <b>{props.user.address.state}</b>
        </div>
        <div className="three columns">
          <span>Индекс:</span> <b>{props.user.address.zip}</b>
        </div>
      </div>
    </div>
  );
};
