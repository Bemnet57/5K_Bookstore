import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookOrderPage = () => {
  const [deliveryOption, setDeliveryOption] = useState('pickup');

  return (
    <div className="container py-5">
      <div className="row">
        {/* Book Cover and Info */}
        <div className="col-md-5 text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/5/51/Dune_first_edition.jpg"
            alt="Dune Book Cover"
            className="img-fluid mb-3"
            style={{ maxHeight: '400px' }}
          />
          <h3 className="fw-bold">Dune</h3>
          <p className="text-muted">Frank Herbert</p>
        </div>

        {/* Delivery Info */}
        <div className="col-md-7">
          <h4 className="text-warning fw-bold">Take it Now!!</h4>
          <h5 className="mt-3">Delivery information</h5>

          {/* Delivery Options */}
          <div className="btn-group my-3" role="group">
            <button
              type="button"
              className={`btn ${deliveryOption === 'pickup' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setDeliveryOption('pickup')}
            >
              I will come take it
            </button>
            <button
              type="button"
              className={`btn ${deliveryOption === 'delivery' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setDeliveryOption('delivery')}
            >
              I want it delivered
            </button>
          </div>

          {/* Form Fields */}
          <form>
            <div className="mb-3">
              <label className="form-label">Campus</label>
              <input type="text" className="form-control" defaultValue="CTBE (5K)" />
            </div>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" defaultValue="John Doe" />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone number</label>
              <input type="password" className="form-control" defaultValue="••••••••••" />
            </div>
            <button type="submit" className="btn btn-warning w-100 fw-bold">
              Find Us Here
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookOrderPage;