import React, { useState } from "react";



export const MatchesForm = ({ setstateDate, stateDate }) => {
  const [formDate, setformDate] = useState(stateDate);

  const handleChange = (e) => {    
    setformDate({
      ...formDate,
      [e.target.name]: e.target.value,
    });
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formDate.since || !formDate.until) {
      alert("Datos incompletos");
      return;
    } else {              
      setstateDate(formDate);
      console.log(formDate)      
    }
  };

  const handleReset = () => {
    setformDate(stateDate)
  };

  return (
    <div className="container">
      <form action="#" className="form-date">
        <div className="panel panel-default">
          <div className="panel-heading">
            <div className="row d-flex">
              <div className="col-6  col-sm-6 col-md-4">
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
              <div className="col-6 col-sm-6 col-md-4">
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
            </div>
            <div className="row d-inline-flex">
              <div className="col-6  col-sm-6 col-md-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Confirmar"
                  onClick={handleSubmit}
                />
              </div>
              <div className="col-6  col-sm-6 col-md-6">
                <input
                  type="submit"
                  className="btn btn-secondary"
                  value="Restablecer"
                  onClick={handleReset}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
