import React, { Component } from 'react';

import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class Delivery extends Component {
  state = { 
    deliveryDataList: [
      {
        resi: "SBY-0001",
        destination: "Sidoarjo",
        type: "One Day Service",
        date: "2018-01-20",
        status: "On Process"
      },
      {
        resi: "SBY-0002",
        destination: "Sumenep",
        type: "Cargo",
        date: "2018-04-10",
        status: "On Process"
      },
      {
        resi: "SBY-0003",
        destination: "Pekalongan",
        type: "Cargo",
        date: "2018-04-10",
        status: "On Delivery"
      },
      {
        resi: "SBY-0003",
        destination: "Jakarta",
        type: "Carter",
        date: "2018-04-10",
        status: "Delivered"
      },
    ]
  }
  render() { 
    return ( 
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Pengiriman</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active"><a>Dashboard</a></div>
              <div className="breadcrumb-item"><a>Transaksi</a></div>
              <div className="breadcrumb-item">Delivery</div>
            </div>
          </div>
          <div className="section-body">
            <h2 className="section-title">Daftar Pengiriman</h2>
            <p className="section-lead">
              Gunakan filter tanggal dan sorting untuk mendapatkan data yang diinginkan
            </p>
            <div className="row">
              <div className="col-12">
                <div className="card">

                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      
                      <div className="form-group">
                        <label>Pencarian</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-search" />
                            </div>
                          </div>
                          <input
                            type="text"
                            placeholder="Cari resi/kota/jenis dll"
                            className="form-control phone-number"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Filter Status</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-comment" />
                            </div>
                          </div>
                          <select class="form-control">
                            <option>On Progress</option>
                            <option>Done</option>
                            <option>Problem</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Filter Tanggal</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <div className="input-group-text">
                              <i className="fas fa-calendar" />
                            </div>
                          </div>
                          <DatePicker
                            selected={new Date()}
                            className="form-control phone-number"
                          />
                        </div>
                      </div>

                      <button className="btn btn-primary">
                        <i className="fas fa-rocket" id="modal-4" /> Input Transaksi Baru
                      </button>
                    </div>
                    
                    <div className="table-responsive">
                      <table className="table table-striped" id="table-1">
                        <thead>
                          <tr>
                            <th className="text-center">
                              #
                            </th>
                            <th>No Resi</th>
                            <th>Kota Tujuan</th>
                            <th>Jenis</th>
                            <th>Pembayaran</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.deliveryDataList.map((item, index) => 
                            <tr key={`DeliveryItem${index}`}>
                              <td>{ index+1 }</td>
                              <td>{ item.resi }</td>
                              <td className="align-middle">
                                { item.destination }
                              </td>
                              <td>{ item.type }</td>
                              <td>{ item.date }</td>
                              <td>
                                <div 
                                  className={`badge badge-${item.status === 'On Process' ? 'danger' : item.status === 'On Delivery' ? 'primary' : 'success'}`}>
                                  { item.status }
                                </div>
                              </td>
                              <td><a className="btn btn-secondary">Detail</a></td>
                            </tr>
                          )}
                        </tbody>
                      </table>
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

export default Delivery;