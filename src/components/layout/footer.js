import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { mediaQuery } from '../../util/style';

const FooterWrapper = styled.footer`
  background-color: #2c3e50;
  color: #fff;
  text-align: center;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;
  padding: 4rem 0;

  ${mediaQuery.medium`
  flex-direction: row;
  flex-basis: 28%;
`};
`;

const ContactInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  margin-bottom: 2em;
`;

const ContactInfoBlockHeader = styled.h3`
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-bottom: 0.75em;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialLink = styled.a`
  border: 2px solid white;
  border-radius: 50%;
  box-sizing: content-box;
  height: 1.5em;
  line-height: 1.5em;
  margin: 0 0.5em;
  padding: 0.25em;
  width: 1.5em;
  text-align: center;
`;

const Address = styled.address`
  display: flex;
  flex-direction: column;
`;

const Copyright = styled.div`
  background-color: #1a252f;
  font-size: 1rem;
  padding: 1.5rem 0;
  text-align: center;
`;

const Footer = ({ siteTitle, socialIcons }) => (
  <FooterWrapper>
    <ContactInfo>
      <ContactInfoBlock>
        <ContactInfoBlockHeader>Location</ContactInfoBlockHeader>
        Pittsburgh, PA
      </ContactInfoBlock>
      <ContactInfoBlock>
        <ContactInfoBlockHeader>Social</ContactInfoBlockHeader>
        <Social>
          {socialIcons.map(social => (
            <SocialLink aria-label={social.node.alt} key={social.node.id}>
              <FontAwesomeIcon icon={['fab', `${social.node.icon}`]} />
            </SocialLink>
          ))}
        </Social>
      </ContactInfoBlock>
      <ContactInfoBlock>
        <ContactInfoBlockHeader>Get In Touch</ContactInfoBlockHeader>
        <Address>
          <span>724-944-6627</span>
          <span>mlkendall93@gmail.com</span>
        </Address>
      </ContactInfoBlock>
    </ContactInfo>
    <Copyright>
      Copyright © {siteTitle} {new Date().getFullYear()}
    </Copyright>
  </FooterWrapper>
);

export default Footer;
