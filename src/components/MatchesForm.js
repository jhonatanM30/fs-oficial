import React, { useState } from "react";

const dateInitial = {
  since: new Date().toISOString().slice(0, 10),
  until: new Date().toISOString().slice(0, 10),
}

export const MatchesForm = ({ setstateDate }) => {
  const [formDate, setformDate] = useState(dateInitial);

  const handleChange = (e) => {
    setformDate({
      ...formDate,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formDate.since > formDate.until) {
      alert("La fecha desde la cual quieres buscar no puede ser mayor a la fecha final que buscas, Verifica!");
      return;
    } else {
      setstateDate(formDate);
    }
  };

  const handleReset = () => {
    setformDate(dateInitial);
    setstateDate(dateInitial);
  };

  return (
    <div>
      <form action="#" className="form-date">
        <div className="row panel-heading">
          <div className="col-12 col-sm-6 col-lg-3">
            <label htmlFor="since" className="form-label">
              Desde el día.
            </label>
            <input
              type="date"
              name="since"
              className="form-control"
              value={formDate.since}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <label htmlFor="until" className="form-label">
              Hasta el día.
            </label>
            <input
              type="date"
              name="until"
              className="form-control"
              value={formDate.until}
              onChange={handleChange}
            />
          </div>
          <div className="col-12 col-sm-12 col-lg-12 mt-2">
            <div className="btn-group" role="group">
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                <i className="fas fa-calendar-check"></i> Buscar
              </button>
              <button type="button" className="btn btn-secondary" onClick={handleReset}>
                <i className="fas fa-spinner"></i> Restablecer
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
