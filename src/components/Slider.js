import React, { Component } from 'react';
import _ from 'lodash';

import eye from '../assets/images/eye.png';
import checked from '../assets/images/checked.png';
import checked_white from '../assets/images/checked-white.png';
import person from '../assets/images/person.png';
import profile_img from '../assets/images/profile_img.png';
import social from '../assets/images/social.png';
import phone from '../assets/images/phone.png';
import envelope from '../assets/images/envelope.png';
import star from '../assets/images/star.png';
import star_white from '../assets/images/star-white.png';
import edit_block from '../assets/images/edit-block.png';

// import Experience from './Experience.js';

class Slider extends Component {

  state = {
    isPopup: false,
    currentInput: false,
    name: 'Bas Van Boom',
    jobPosition: 'Web developer',
    date: '1 januari 1990',
    address: 'Scheerstraat 12',
    city: '4580AA Baardenweg',
    phone: '(+31)06 31 69 08 97',
    email: 'basvanboom@gmail.com',
    position1: 'Elektro techniek',
    position2: 'Elektro techniek',
    position3: 'Elektro techniek',
    organization1: 'Hogeschool Utrech',
    organization2: 'Hogeschool Utrech',
    organization3: 'Hogeschool Utrech',
    year1: '1998-2002',
    year2: '1998-2002',
    year3: '1998-2002',
    main_skill1: 'Photoshop',
    main_skill2: 'Illustrator',
    main_skill3: 'Dreamweaver',
  }

  showPopup = () => {
    this.setState({ isPopup: true });
    setTimeout(()=> { this.setState({ isPopup: false }); }, 1000);
  }

  showInput = (e) => {
    if (this.state.currentInput && (!this.state.name || !this.state.jobPosition || !this.state.date || !this.state.address || !this.state.city ||
      !this.state.phone || !this.state.email)) return;
    if (e.target.className) {
      this.setState({ currentInput: e.target.className });
    }
  }

  enterKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (this.state.currentInput && (!this.state.name || !this.state.jobPosition || !this.state.date || !this.state.address || !this.state.city ||
        !this.state.phone || !this.state.email)) return;
      this.setState({ currentInput: false });
    }
  }

  hideInput = (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (this.state.currentInput && (!this.state.name || !this.state.jobPosition || !this.state.date || !this.state.address || !this.state.city ||
      !this.state.phone || !this.state.email)) return;
    if (this.state.currentInput) {
      if (e.target.className === 'name' || e.target.className === 'job-position' || e.target.className === 'date'
      || e.target.className === 'address' || e.target.className === 'city' || e.target.className === 'phone'
      || e.target.className === 'email' || e.target.className === 'position1' || e.target.className === 'position2'
      || e.target.className === 'position3' || e.target.className === 'organization1' || e.target.className === 'organization2'
      || e.target.className === 'organization3' || e.target.className === 'year1' || e.target.className === 'year2'  || e.target.className === 'year3'
      || e.target.className === 'main-skill1' || e.target.className === 'main-skill2' || e.target.className === 'main-skill3') return;
      this.setState({ currentInput: false });
    }
  }

  setInputData = (e) => {
    if (e.target.name === 'name') {
      this.setState({ name: e.target.value });
    } else if (e.target.name === 'job-position') {
      this.setState({ jobPosition: e.target.value });
    } else if (e.target.name === 'date') {
      this.setState({ date: e.target.value });
    } else if (e.target.name === 'address') {
      this.setState({ address: e.target.value });
    } else if (e.target.name === 'city') {
      this.setState({ city: e.target.value });
    } else if (e.target.name === 'phone') {
      this.setState({ phone: e.target.value });
    } else if (e.target.name === 'email') {
      this.setState({ email: e.target.value });
    }
  }

  render() {

    return (
      <div className='wrapper' onClick={this.hideInput}>

        {
          this.state.isPopup &&
          <div className='popup-editable'>
            {'Will be editable'}
          </div>
        }

        <div className='header'>
          <div className='logo'>
            <div className='logo-cv'>{'CV'}</div>
            <div className='logo-gen'>{'GEN'}</div>
          </div>
          <div className='preview-container'>
            <div className='preview'>
              <div className='eye-container'>
                <img src={eye} alt='' />
              </div>
              <div className='preview-title'>
                {'PREVIEW'}
              </div>
            </div>
          </div>
          <div className='progress-container'>
            <div className='progress-bar'></div>
            <div className='checked'>
              <img src={checked} alt='' />
            </div>
          </div>
          <div className='cv-afronden-container'>
            <div className='checked-white'>
              <img src={checked_white} alt='' />
            </div>
            <div className='cv-afronden-title'>{'CV AFRONDEN'}</div>
          </div>
          <div className='vertical-line'></div>
          <div className='person-container'>
            <div className='person-img'>
              <img src={person} alt='' />
            </div>
            <div className='person-titles'>
              <div className='person-title'>{'Bas Van Boom'}</div>
              <div className='person-subtitle'>{`4 gegenereerde cv's`}</div>
            </div>
            <div className='arrow'>
              <div className="arrow-up"></div>
                <div className="arrow-down"></div>
                <div className="arrow-left"></div>
                <div className="arrow-right"></div>
            </div>
          </div>
        </div>
        <div className='person-info-container'>
          <div className='person-info-img'>
            <img src={profile_img} alt='' />
          </div>
          <div className='person-info-data'>
            <div className='person-info-text-wrapper'>
              <div className='person-info-text'>
                {
                  (this.state.currentInput === 'name') ?
                  <div className='name'><input autoFocus type="text" name="name"
                    maxLength="15"
                    value={this.state.name}
                    onChange={this.setInputData}
                    onKeyPress={this.enterKeyPress}
                    placeholder="Enter your name" /></div> :
                    <div className='name' onClick={this.showInput}>{this.state.name}</div>
                }
                {
                  (this.state.currentInput === 'job-position') ?
                  <div className='job-position'><input autoFocus type="text" name="job-position"
                    maxLength="20"
                    value={this.state.jobPosition}
                    onChange={this.setInputData}
                    onKeyPress={this.enterKeyPress}
                    placeholder="Enter your job position" /></div> :
                    <div className='job-position' onClick={this.showInput}>{this.state.jobPosition}</div>
                }
                {
                  (this.state.currentInput === 'date') ?
                  <div className='date'><input autoFocus type="text" name="date"
                    maxLength="20"
                    value={this.state.date}
                    onChange={this.setInputData}
                    onKeyPress={this.enterKeyPress}
                    placeholder="Enter date please" /></div> :
                    <div className='date' onClick={this.showInput}>{this.state.date}</div>
                }
                {
                  (this.state.currentInput === 'address') ?
                  <div className='address'><input autoFocus type="text" name="address"
                    maxLength="20"
                    value={this.state.address}
                    onChange={this.setInputData}
                    onKeyPress={this.enterKeyPress}
                    placeholder="Enter your address" /></div> :
                    <div className='address' onClick={this.showInput}>{this.state.address}</div>
                }
                {
                  (this.state.currentInput === 'city') ?
                  <div className='city'><input autoFocus type="text" name="city"
                    maxLength="20"
                    value={this.state.city}
                    onChange={this.setInputData}
                    onKeyPress={this.enterKeyPress}
                    placeholder="Enter your city" /></div> :
                    <div className='city' onClick={this.showInput}>{this.state.city}</div>
                }
              </div>
              <div className='person-phone-email-wrapper'>
                <div className='person-phone-email-container'>
                  <div className='phone-email-container'>
                    <div className='phone-email-icon'>
                      <img src={phone} alt='' />
                    </div>
                    {
                      (this.state.currentInput === 'phone') ?
                      <div className='phone'><input autoFocus type="text" name="phone"
                        maxLength="20"
                        value={this.state.phone}
                        onChange={this.setInputData}
                        onKeyPress={this.enterKeyPress}
                        placeholder="Enter your phone number" /></div> :
                        <div className='phone' onClick={this.showInput}>{this.state.phone}</div>
                    }
                  </div>
                  <div className='phone-email-container'>
                    <div className='phone-email-icon'>
                      <img src={envelope} alt='' />
                    </div>
                    {
                      (this.state.currentInput === 'email') ?
                      <div className='email'><input autoFocus type="text" name="email"
                        maxLength="25"
                        value={this.state.email}
                        onChange={this.setInputData}
                        onKeyPress={this.enterKeyPress}
                        placeholder="Enter your email" /></div> :
                        <div className='email' onClick={this.showInput}>{this.state.email}</div>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className='social-networks-container'>
              <img src={social} alt='' />
            </div>
          </div>
        </div>

        <div className='experience-skills-container'>
          <div className='experience-container'>
            <div className='experience-list-container'>
              <div className='experience-list-wrapper' onClick={this.showPopup}>
                <div className='edit-block-icon'><img src={edit_block} alt='' /></div>
                <div className='experience-title'>{'Opleidingen'}</div>
                <div className='experience-list'>
                  <div className='skill-item'>
                    <div className='skill-item-title'>
                      <div className='skill-title-container'>
                        <div className='position1'>{this.state.position1}</div>
                        <div className='organization1'>{this.state.organization1}</div>
                      </div>
                    </div>
                    <div className='year1'>{this.state.year1}</div>
                  </div>
                  <div className='skill-item'>
                    <div className='skill-item-title'>
                      <div className='skill-title-container'>
                        <div className='position2'>{this.state.position2}</div>
                        <div className='organization2'>{this.state.organization2}</div>
                      </div>
                    </div>
                    <div className='year2'>{this.state.year2}</div>
                  </div>
                  <div className='skill-item'>
                    <div className='skill-item-title'>
                      <div className='skill-title-container'>
                        <div className='position3'>{this.state.position3}</div>
                        <div className='organization3'>{this.state.organization3}</div>
                      </div>
                    </div>
                      <div className='year3'>{this.state.year3}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='experience-container'>
            <div className='experience-list-container skills'>
              <div className='experience-list-wrapper skills' onClick={this.showPopup}>
                <div className='edit-block-icon'><img src={edit_block} alt='' /></div>
                <div className='experience-title'>{'Skills'}</div>
                <div className='experience-list'>
                  <div className='skill-item'>
                    <div className='skill-item-title right'>
                      <div className='skill-title-container'>
                        <div className='main-skill1'>{this.state.main_skill1}</div>
                      </div>
                    </div>
                    <div className='year1 right'>
                      <img src={star} alt='' />
                      <img src={star} alt='' />
                      <img src={star} alt='' />
                      <img src={star_white} alt='' />
                      <img src={star_white} alt='' />
                    </div>
                  </div>
                  <div className='skill-item'>
                    <div className='skill-item-title right'>
                      <div className='skill-title-container'>
                        <div className='main-skill2'>{this.state.main_skill2}</div>
                      </div>
                    </div>
                    <div className='year2 right'>
                      <img src={star} alt='' />
                      <img src={star} alt='' />
                      <img src={star} alt='' />
                      <img src={star} alt='' />
                      <img src={star_white} alt='' />
                    </div>
                  </div>
                  <div className='skill-item'>
                    <div className='skill-item-title right'>
                      <div className='skill-title-container'>
                        <div className='main-skill3'>{this.state.main_skill3}</div>
                      </div>
                    </div>
                    <div className='year3 right'>
                      <img src={star} alt='' />
                      <img src={star} alt='' />
                      <img src={star_white} alt='' />
                      <img src={star_white} alt='' />
                      <img src={star_white} alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Slider;
