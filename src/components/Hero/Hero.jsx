import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <video className="video" autoPlay muted loop>
            <source src="https://vod-progressive.akamaized.net/exp=1595588505~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2882%2F17%2F439413024%2F1919710958.mp4~hmac=379d3bef46b35895e4a4419432b71b2b2bfd87c355ab4f6a00be1ebf502bf477/vimeo-prod-skyfire-std-us/01/2882/17/439413024/1919710958.mp4?filename=Ink+-+44593.mp4" />
          </video>
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
