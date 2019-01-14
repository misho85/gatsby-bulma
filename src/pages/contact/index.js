import React, { Component } from 'react';
import { navigate } from 'gatsby';
import PageLayout from '../../components/Layout/PageLayout';

const map =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.9306571106954!2d20.450474095748987!3d44.82297730169373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb73bbff29e600816!2z0J_QvtCx0LXQtNC90LjQug!5e0!3m2!1ssr!2srs!4v1544204965250';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

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
      <PageLayout pageTitle="Contact">
        <iframe
          title="Mapa"
          frameBorder="0"
          style={{
            width: '100%',
            height: '50vh',
            paddingTop: '3rem'
          }}
          src={map}
          allowFullScreen
        />
        <section className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="section">
                <div className="container">
                  <div className="content">
                    <h1>Contact</h1>
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
                          <input
                            name="bot-field"
                            onChange={this.handleChange}
                          />
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
          </div>
        </section>
      </PageLayout>
    );
  }
}
