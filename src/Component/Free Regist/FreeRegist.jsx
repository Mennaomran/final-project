import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

export default class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        countryOfBirth: '',
        subject: '',
        languages: '',
        phoneNumber: '',
        photo: null,
        profileDescription: '',
        Experience: '',
        motivateStudents: '',
        catchyTitle: '',
      },
      message: '',
      errorMessage: '',
      currentStep: 1,
      showSummary: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      formData: { ...prevState.formData, [name]: value },
    }));
  };

  handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      this.setState((prevState) => ({
        formData: { ...prevState.formData, photo: file },
      }));
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ errorMessage: '' });

    const { currentStep, formData } = this.state;

    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.countryOfBirth || !formData.subject || !formData.languages) {
        this.setState({ errorMessage: 'Please fill in all required fields.' });
        return;
      }
      this.setState({ message: 'Profile information saved successfully!' });
    } else if (currentStep === 2) {
      if (!formData.photo) {
        this.setState({ errorMessage: 'Please upload a photo.' });
        return;
      }
      this.setState({ message: 'Photo uploaded successfully!' });
    } else if (currentStep === 3) {
      if (!formData.profileDescription || !formData.teachingExperience || !formData.motivateStudents || !formData.catchyTitle) {
        this.setState({ errorMessage: 'Please fill in all required fields for the description.' });
        return;
      }
      this.setState({ message: 'Profile description saved successfully!' });
    }
  };

  handleNext = () => {
    if (this.state.message) {
      this.setState((prevState) => ({
        currentStep: prevState.currentStep + 1,
        message: '',
      }));
    } else {
      this.setState({ errorMessage: 'Please save your current step before proceeding.' });
    }
  };

  handleBack = () => {
    if (this.state.currentStep > 1) {
      this.setState((prevState) => ({
        currentStep: prevState.currentStep - 1,
        message: '',
        errorMessage: '',
      }));
    }
  };

  handleFinish = () => {
    this.setState({ showSummary: true });
  };

  render() {
    const { formData, message, errorMessage, currentStep, showSummary } = this.state;

    return (
      <Fragment>
      <div className="profile-form">
        {showSummary ? (
          <div className="summary">
            <h2>Summary of Your Profile</h2>
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Last Name:</strong> {formData.lastName}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Country of Birth:</strong> {formData.countryOfBirth}</p>
            <p><strong>Experience (Years):</strong> {formData.Experience}</p>
            <p><strong>Track:</strong> {formData.subject}</p>
            <p><strong>Languages You Speak:</strong> {formData.languages}</p>
            <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
            <p><strong>Profile Description:</strong> {formData.profileDescription}</p>
            <p><strong>Experience:</strong> {formData.teachingExperience}</p>
            <p><strong>Motivation to Learn:</strong> {formData.motivateStudents}</p>
            <p><strong>Certificates:</strong> {formData.catchyTitle}</p>
            {formData.photo && <p><strong>Photo:</strong> {formData.photo.name}</p>}
            <button onClick={() => this.setState({ showSummary: false })} className="button button-back">Edit</button>
            <NavLink to="/profile" ><button className="button button-done">Done</button></NavLink>
          </div>
        ) : (
          <>
            <ul className="steps">
              <li className={`step ${currentStep === 1 ? 'active' : ''}`}>1 About</li>
              <li className={`step ${currentStep === 2 ? 'active' : ''}`}>2 Photo</li>
              <li className={`step ${currentStep === 3 ? 'active' : ''}`}>3 Description</li>
            </ul>

            <div className="form-container">
              <form onSubmit={this.handleSubmit}>
                {currentStep === 1 && (
                  <>
                    <h2>About You</h2>
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Country of Birth</label>
                      <input
                        type="text"
                        name="countryOfBirth"
                        placeholder="Enter your country"
                        value={formData.countryOfBirth}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Experience (Years)</label>
                      <input
                        type="text"
                        name="Experience"
                        placeholder="Enter your experience in years"
                        value={formData.Experience}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Track</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Front-end, Back-end, AI, Cybersecurity"
                        value={formData.subject}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Languages You Speak (with Level)</label>
                      <input
                        type="text"
                        name="languages"
                        placeholder="English, Spanish"
                        value={formData.languages}
                        onChange={this.handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number (Optional)</label>
                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        value={formData.phoneNumber}
                        onChange={this.handleChange}
                      />
                    </div>
                  </>
                )}

                {currentStep === 2 && (
                  <div className="step-2-background">
                    <h2>Upload Your Photo</h2>
                    <div className="form-group">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={this.handleFileChange}
                        required
                      />
                    </div>
                    {formData.photo && <p>File selected: {formData.photo.name}</p>}
                  </div>
                )}

                {currentStep === 3 && (
                  <>
                    <h2>Profile Description</h2>
                    <div className="form-group">
                      <label>1. Introduce Yourself</label>
                      <textarea
                        name="profileDescription"
                        value={formData.profileDescription}
                        onChange={this.handleChange}
                        placeholder="Hello, my name is..."
                        required
                        rows="5"
                      />
                    </div>
                    <div className="form-group">
                      <label>2. Experience</label>
                      <textarea
                        name="teachingExperience"
                        value={formData.teachingExperience}
                        onChange={this.handleChange}
                        placeholder="Share your experience..."
                        required
                        rows="5"
                      />
                    </div>
                    <div className="form-group">
                      <label>3. Why would you like to learn here?</label>
                      <textarea
                        name="motivateStudents"
                        value={formData.motivateStudents}
                        onChange={this.handleChange}
                        placeholder="Write here..."
                        required
                        rows="5"
                      />
                    </div>
                    <div className="form-group">
                      <label>4. Certificates, if any</label>
                      <input
                        type="text"
                        name="catchyTitle"
                        value={formData.catchyTitle}
                        onChange={this.handleChange}
                        placeholder="Write certificates..."
                        required
                      />
                    </div>
                  </>
                )}

                {message && <div className="success-message">{message}</div>}
                {errorMessage && <div className="error-message">{errorMessage}</div>}

                <div className="button-group">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={this.handleBack}
                      className="button button-back"
                    >
                      Back
                    </button>
                  )}
                  <button type="submit" className="button button-save">
                    Save
                  </button>
                  {currentStep < 3 && (
                    <button
                      type="button"
                      onClick={this.handleNext}
                      className="button button-next"
                    >
                      Next
                    </button>
                  )}
                  {currentStep === 3 && (
                    <button
                      type="button"
                      onClick={this.handleFinish}
                      className="button button-finish"
                    >
                      Finish
                    </button>
                  )}
                </div>
              </form>
            </div>
          </>
        )}
      </div>
      </Fragment>
    );
  }
}




