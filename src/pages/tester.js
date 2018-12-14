import React from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/Layout';
import Mapbox from '../components/Mapbox/Mapbox';
import Fullscreen from 'react-full-screen';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Test extends React.Component {
  state = {
    isValidated: false,
    isFull: false
  };

  goFull = () => {
    this.setState(prevState => ({ isFull: !prevState.isFull }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <Fullscreen
          enabled={this.state.isFull}
          onChange={isFull => this.setState({ isFull })}
        >
          <div className="full-width-map-container full-screenable-node">
            <Mapbox goFull={this.goFull} fullScreen={this.state.isFull} />
          </div>
        </Fullscreen>
        <section className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <div className="container">
                  <div className="content">
                    <h1>Contact</h1>
                  </div>
                  <form
                    name="contact"
                    method="post"
                    action="/contact/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                      </label>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'name'}>
                        Your name
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'text'}
                          name={'name'}
                          onChange={this.handleChange}
                          id={'name'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'email'}>
                        Email
                      </label>
                      <div className="control">
                        <input
                          className="input"
                          type={'email'}
                          name={'email'}
                          onChange={this.handleChange}
                          id={'email'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label" htmlFor={'message'}>
                        Message
                      </label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name={'message'}
                          onChange={this.handleChange}
                          id={'message'}
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="field">
                      <button className="button is-link" type="submit">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
