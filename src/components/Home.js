import React, { Component } from 'react';

import LineDemo from './LineDemo';
import BalanceChart from './BalanceChart';

import avatar from './../avatar/avatar-1.png';

class Home extends Component {
  state = { 
    myData: [
      {
        "label": "Apples",
        "value": 10
      },
      {
        "label": "Oranges",
        "value": 17
      },
    ]
  }
  render() { 
    return ( 
      <div className="main-content">
        <section className="section">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card card-statistic-2">
                <div className="card-stats">
                  <div className="card-stats-title">Order Statistics - 
                    <div className="dropdown d-inline">
                      <a className="font-weight-600 dropdown-toggle" data-toggle="dropdown" href="#" id="orders-month">August</a>
                      <ul className="dropdown-menu dropdown-menu-sm">
                        <li className="dropdown-title">Select Month</li>
                        <li><a className="dropdown-item">January</a></li>
                        <li><a className="dropdown-item">February</a></li>
                        <li><a className="dropdown-item">March</a></li>
                        <li><a className="dropdown-item">April</a></li>
                        <li><a className="dropdown-item">May</a></li>
                        <li><a className="dropdown-item">June</a></li>
                        <li><a className="dropdown-item">July</a></li>
                        <li><a className="dropdown-item active">August</a></li>
                        <li><a className="dropdown-item">September</a></li>
                        <li><a className="dropdown-item">October</a></li>
                        <li><a className="dropdown-item">November</a></li>
                        <li><a className="dropdown-item">December</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-stats-items">
                    <div className="card-stats-item">
                      <div className="card-stats-item-count">24</div>
                      <div className="card-stats-item-label">Pending</div>
                    </div>
                    <div className="card-stats-item">
                      <div className="card-stats-item-count">12</div>
                      <div className="card-stats-item-label">Shipping</div>
                    </div>
                    <div className="card-stats-item">
                      <div className="card-stats-item-count">23</div>
                      <div className="card-stats-item-label">Completed</div>
                    </div>
                  </div>
                </div>
                <div className="card-icon shadow-primary bg-primary">
                  <i className="fas fa-archive" />
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Total Orders</h4>
                  </div>
                  <div className="card-body">
                    59
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card card-statistic-2">
                <div className="card-chart">
                  <BalanceChart/>
                </div>
                <div className="card-icon shadow-primary bg-primary">
                  <i className="fas fa-dollar-sign" />
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Keuntungan</h4>
                  </div>
                  <div className="card-body">
                    Rp. 6.4jt
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card card-statistic-2">
                <div className="card-chart">
                  <BalanceChart/>
                </div>
                <div className="card-icon shadow-primary bg-primary">
                  <i className="fas fa-shopping-bag" />
                </div>
                <div className="card-wrap">
                  <div className="card-header">
                    <h4>Barang Terkirim</h4>
                  </div>
                  <div className="card-body">
                    4,732
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-body">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="card card-statistic-1">
                  <div className="card-icon bg-primary">
                    <i className="fas fa-exchange-alt" />
                  </div>
                  <div className="card-wrap">
                    <div className="card-header">
                      <h4>Pengiriman</h4>
                    </div>
                    <div className="card-body">
                      45
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="card card-statistic-1">
                  <div className="card-icon bg-danger">
                    <i className="fas fa-biking" />
                  </div>
                  <div className="card-wrap">
                    <div className="card-header">
                      <h4>Driver</h4>
                    </div>
                    <div className="card-body">
                      34
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="card card-statistic-1">
                  <div className="card-icon bg-warning">
                    <i className="fas fa-truck" />
                  </div>
                  <div className="card-wrap">
                    <div className="card-header">
                      <h4>Kendaraan</h4>
                    </div>
                    <div className="card-body">
                      44
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                <div className="card card-statistic-1">
                  <div className="card-icon bg-success">
                    <i className="fas fa-users" />
                  </div>
                  <div className="card-wrap">
                    <div className="card-header">
                      <h4>Pelanggan</h4>
                    </div>
                    <div className="card-body">
                      222
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-8 col-md-12 col-12 col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Statistics</h4>
                  </div>
                  <div className="card-body">
                    <LineDemo/>
                    <div className="statistic-details mt-sm-4">
                      <div className="statistic-details-item">
                        <span className="text-muted"><span className="text-primary"><i className="fas fa-caret-up" /></span> 7%</span>
                        <div className="detail-value">$243</div>
                        <div className="detail-name">Today's Sales</div>
                      </div>
                      <div className="statistic-details-item">
                        <span className="text-muted"><span className="text-danger"><i className="fas fa-caret-down" /></span> 23%</span>
                        <div className="detail-value">$2,902</div>
                        <div className="detail-name">This Week's Sales</div>
                      </div>
                      <div className="statistic-details-item">
                        <span className="text-muted"><span className="text-primary"><i className="fas fa-caret-up" /></span>9%</span>
                        <div className="detail-value">$12,821</div>
                        <div className="detail-name">This Month's Sales</div>
                      </div>
                      <div className="statistic-details-item">
                        <span className="text-muted"><span className="text-primary"><i className="fas fa-caret-up" /></span> 19%</span>
                        <div className="detail-value">$92,142</div>
                        <div className="detail-name">This Year's Sales</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-12 col-sm-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Aktifitas Terbaru</h4>
                  </div>
                  <div className="card-body">
                    <ul className="list-unstyled list-unstyled-border">
                      <li className="media">
                        <img className="mr-3 rounded-circle" width={50} src={avatar} alt="avatar" />
                        <div className="media-body">
                          <div className="float-right text-primary">Now</div>
                          <div className="media-title">Farhan A Mujib</div>
                          <span className="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
                        </div>
                      </li>
                      <li className="media">
                        <img className="mr-3 rounded-circle" width={50} src={avatar} alt="avatar" />
                        <div className="media-body">
                          <div className="float-right">12m</div>
                          <div className="media-title">Ujang Maman</div>
                          <span className="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
                        </div>
                      </li>
                      <li className="media">
                        <img className="mr-3 rounded-circle" width={50} src={avatar} alt="avatar" />
                        <div className="media-body">
                          <div className="float-right">17m</div>
                          <div className="media-title">Rizal Fakhri</div>
                          <span className="text-small text-muted">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
                        </div>
                      </li>
                    </ul>
                    <div className="text-center pt-1 pb-1">
                      <button className="btn btn-primary btn-lg">
                        View All
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
     );
  }
}
 
export default Home;