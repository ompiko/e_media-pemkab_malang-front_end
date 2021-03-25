import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Shell from '../components/Shell';
import avatar from '../assets/noavatar.png';

class MailDetails extends React.Component {
  componentWillMount() {}

  render() {
    return (
      <Shell>
        <div className="row">
          <div className="col-md-12">
            <div className="pull-right">
              <button
                className="btn btn-green btn-gradient waves-effect waves-light"
                type="button"
                style={{ marginRight: 5 }}
              >
                <span className="gradient">
                  <i className="fa fa-print" />
                </span>
              </button>

              <button className="btn btn-primary btn-gradient waves-effect waves-light" type="button">
                <span className="gradient">
                  <i className="fa fa-share-alt" />
                </span>
              </button>
            </div>
            <div>
              <h2>Informasi Surat</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <th className="text-right" style={{ width: '25%' }}>
                        Nomor Agenda Surat Masuk
                      </th>
                      <td>Jonas</td>
                      <th className="text-right"> Tanggal Penerimaan Surat</th>
                      <td>yyiuyuyiuy</td>
                    </tr>
                    <tr>
                      <th className="text-right" style={{ width: '25%' }}>
                        Nomor Surat
                      </th>
                      <td>Jonas</td>
                      <th className="text-right"> Tanggal Surat</th>
                      <td>yyiuyuyiuy</td>
                    </tr>
                    <tr>
                      <th className="text-right" style={{ width: '25%' }}>
                        Tujuan
                      </th>
                      <td>Jonas</td>
                      <th className="text-right"> Pengirim</th>
                      <td>yyiuyuyiuy</td>
                    </tr>
                  </tbody>
                </table>

                <div className="row" style={{ marginTop: 25 }}>
                  <i className="fa fa-file-text-o" /> &nbsp; Pindaian
                  <table className="table table-stripted">
                    <tbody>
                      <tr>
                        <th className="text-right" style={{ width: '25%' }}>
                          Jenis Nota Dinas
                        </th>
                        <td>Penting</td>
                      </tr>

                      <tr>
                        <th className="text-right" style={{ width: '25%' }}>
                          Kecepatan Penyampaian
                        </th>
                        <td>Penting</td>
                      </tr>

                      <tr>
                        <th className="text-right" style={{ width: '25%' }}>
                          Tingkat Keamanan
                        </th>
                        <td>Penting</td>
                      </tr>

                      <tr>
                        <th className="text-right" style={{ width: '25%' }}>
                          Isi Ringkas
                        </th>
                        <td>Penting</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="row" style={{ marginTop: 25 }}>
                  <i className="fa fa-level-down" /> &nbsp; Detail Disposisi
                  <table className="table table-stripted">
                    <tbody>
                      <tr>
                        <th className="text-right" style={{ width: '25%' }}>
                          Tanggal Disposisi
                        </th>
                        <td>Penting</td>
                        <th className="text-right" style={{ width: '25%' }}>
                          Tanggal Selesai
                        </th>
                        <td>Penting</td>
                      </tr>

                      <tr>
                        <th className="text-right" style={{ width: '25%' }}>
                          Pengirim
                        </th>
                        <td>Penting</td>
                        <th className="text-right" style={{ width: '25%' }}>
                          Penerima
                        </th>
                        <td>Penting</td>
                      </tr>

                      <tr>
                        <th className="text-right" style={{ width: '25%' }}>
                          Tingkat Keamanan
                        </th>
                        <td>Penting</td>
                        <th className="text-right" style={{ width: '25%' }}>
                          Kecepatan Penyampaian
                        </th>
                        <td>Penting</td>
                      </tr>

                      <tr>
                        <th className="text-right" style={{ width: '25%' }}>
                          Instruksi
                        </th>
                        <td>Penting</td>
                        <th className="text-right" style={{ width: '25%' }}>
                          Pesan
                        </th>
                        <td>Penting</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="col-md-12">
                  <div className="row" style={{ marginTop: 25 }}>
                    <i className="fa fa-comment" /> &nbsp; Komentar
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="profile-page-center">
                        <div className="comment-block">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              id="comment-textarea"
                              rows="2"
                              placeholder="Enter your comment here..."
                            />
                            <div className="media-feed-control clearfix">
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm comment-reply float-right waves-effect waves-light"
                              >
                                Post
                              </button>
                              <a href="#" data-toggle="tooltip" title="" data-original-title="Add Picture">
                                <i className="batch-icon batch-icon-image" />
                              </a>
                            </div>
                          </div>
                          <ul className="list-unstyled mt-5">
                            <li className="media">
                              <div className="profile-picture bg-gradient bg-primary mb-4">
                                <img src={avatar} width="44" height="44" />
                              </div>
                              <div className="media-body">
                                <div className="media-title mt-0 mb-1">
                                  <a href="#">Johanna Quinn</a> <small> 1 hour ago</small>
                                </div>
                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin. Cras purus odio.
                                <div className="media-feed-control">
                                  <a href="#">
                                    <i className="batch-icon batch-icon-heart-full" />
                                    Like (4)
                                  </a>{' '}
                                  &nbsp;
                                  <a href="#">
                                    <i className="batch-icon batch-icon-speech-bubble-left-tip" />
                                    Comment (2)
                                  </a>
                                  &nbsp;
                                  <a href="#">
                                    <i className="batch-icon batch-icon-flag" />
                                    Report
                                  </a>
                                </div>
                                <div className="media-body-reply-block">
                                  <ul className="list-unstyled">
                                    <li className="media mt-4">
                                      <div className="profile-picture bg-gradient bg-primary mb-4">
                                        <img src={avatar} width="44" height="44" />
                                      </div>
                                      <div className="media-body">
                                        <div className="media-title mt-0 mb-1">
                                          <a href="#">Samantha Carter</a> <small> 45 mins ago</small>
                                        </div>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio.
                                        <div className="media-feed-control">
                                          <a href="#">
                                            <i className="batch-icon batch-icon-heart-full" />
                                            Like
                                          </a>
                                          &nbsp;
                                          <a href="#">
                                            <i className="batch-icon batch-icon-speech-bubble-left-tip" />
                                            Comment
                                          </a>
                                          &nbsp;
                                          <a href="#">
                                            <i className="batch-icon batch-icon-flag" />
                                            Report
                                          </a>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="media mt-4">
                                      <div className="profile-picture bg-gradient bg-primary mb-4">
                                        <img src={avatar} width="44" height="44" />
                                      </div>
                                      <div className="media-body">
                                        <div className="media-title mt-0 mb-1">
                                          <a href="#">Teal'c Jaffa</a> <small> 7 mins ago</small>
                                        </div>
                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                        sollicitudin. Cras purus odio.
                                        <div className="media-feed-control">
                                          <a href="#">
                                            <i className="batch-icon batch-icon-heart-full" />
                                            Like
                                          </a>
                                          &nbsp;
                                          <a href="#">
                                            <i className="batch-icon batch-icon-speech-bubble-left-tip" />
                                            Comment
                                          </a>
                                          <a href="#">
                                            &nbsp;
                                            <i className="batch-icon batch-icon-flag" />
                                            Report
                                          </a>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="comment-reply-block mt-4">
                                      <div className="form-group clearfix">
                                        <textarea
                                          className="form-control comment-reply-textarea"
                                          rows="2"
                                          placeholder="Enter your comment here..."
                                        />
                                        <button
                                          type="button"
                                          className="btn btn-secondary btn-sm comment-reply float-right waves-effect waves-light"
                                        >
                                          Reply
                                        </button>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                            <li className="media">
                              <div className="profile-picture bg-gradient bg-primary mb-4">
                                <img src={avatar} width="44" height="44" />
                              </div>
                              <div className="media-body">
                                <div className="media-title mt-0 mb-1">
                                  <a href="#">Johanna Quinn</a> <small> 1 hour ago</small>
                                </div>
                                <a href="#">
                                  <img src={avatar} className="img-fluid img-thumbnail" />
                                </a>
                                <div className="media-feed-control">
                                  <a href="#">
                                    <i className="batch-icon batch-icon-heart-full" />
                                    Like (57)
                                  </a>
                                  &nbsp;
                                  <a href="#">
                                    <i className="batch-icon batch-icon-speech-bubble-left-tip" />
                                    Comment
                                  </a>
                                  &nbsp;
                                  <a href="#">
                                    <i className="batch-icon batch-icon-flag" />
                                    Report
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    );
  }
}

const _state = state => ({});
const _actions = dispatch => bindActionCreators({}, dispatch);

export default connect(_state, _actions)(MailDetails);
