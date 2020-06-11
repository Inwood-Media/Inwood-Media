import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <div>
      <footer className='footer mt-1 pt-3'>
        <div className='container'>
          <div className='row mt-4'>
            <div className='col-md-2'></div>
            <div className='col-md-5'>
              <h6> Services</h6>
            </div>
            <div className='col-md-5'>
              <h6> Find Us</h6>
            </div>
          </div>
          <div className='row mt-5'>
            {/* <div className='col-md-2'></div> */}
            <div className='col-md-6'>
              <ul>
                <li className='mt-1'>Services 1</li>
                <li className='mt-1'>Services 2</li>
                <li className='mt-1'>Services 3</li>
                <li className='mt-1'>Services 4</li>
              </ul>
            </div>
            <div className='col-md-6'>
              <ul>
                <li className='mt-1'>Instagram</li>
                <li className='mt-1'>Facebook</li>
                <li className='mt-1'>Email</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
