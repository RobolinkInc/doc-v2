import React, { useState } from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'coDronePro',
    imageUrl: 'img/codroneProLogo.png',
    imageUrl2: 'img/codroneProPic.png',
    cardClassName: <CmdProButtons /> 
  },
  {
    title: 'coDroneMini',
    imageUrl: 'img/cdmLogo.png',
    imageUrl2: 'img/cmdPic.png',
    cardClassName: <CmdTwoButtons />
  },
  {
    title: 'coDronezumi',
    imageUrl: 'img/zumiLogo.png',
    imageUrl2: 'img/zumiPic.png',
    cardClassName: <ZumiTwoButtons />
  },
];

function CmdProButtons() {
  return (
    <div className={styles.columns }>
   <div className={styles.column }>
      <button onClick={goUrlCodronePro}>Blockly</button>
   </div>
   <div className={styles.column }>
   <button onClick={goUrlCodroneProPython}>Python</button>

  </div>
  <div className={styles.column }>
  <button onClick={goUrlCodroneProArduino}>Arduino</button>
  </div>
</div>
  );
}

function goUrlCodronePro(e) {
  window.location.href = 'docs/codrone-pro/blockly/reference_blockly';
}

function goUrlCodroneProPython(e) {
  window.location.href = 'docs/codrone-pro/python/reference/library';
}

function goUrlCodroneProArduino(e) {
  window.location.href = 'docs/codrone-pro/arduino/reference/library';
}

function goUrlCmd(e) {
  window.location.href = 'docs/codrone-mini/blockly/reference_blockly';
}

function goUrlCmdPython(e) {
  window.location.href = 'docs/codrone-mini/python/reference/library';
}

function goUrlZumi(e) {
  window.location.href = 'docs/zumi/blockly/reference/library-junior';
}

function goUrlZumiPython(e) {
  window.location.href = 'docs/zumi/python/reference/library';
}

function CmdTwoButtons() {
  return (
    <div className={styles.columns }>
   <div className={styles.columnHalf }>
      <button onClick={goUrlCmd}>Blockly</button>
   </div>
  <div className={styles.columnHalf }>
  <button onClick={goUrlCmdPython}>Python</button>
  </div>
</div>
  );
}

function ZumiTwoButtons() {
  return (
    <div className={styles.columns }>
   <div className={styles.columnHalf }>
      <button onClick={goUrlZumi}>Blockly</button>
   </div>
  <div className={styles.columnHalf }>
  <button onClick={goUrlZumiPython}>Python</button>
  </div>
</div>
  );
}

function Feature({imageUrl, imageUrl2, title, cardClassName}) {
  const imgUrl = useBaseUrl(imageUrl);
  const imgUrl2 = useBaseUrl(imageUrl2);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      <div className={styles.featureInner }  >
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage}  src={imgUrl} alt={title} />
          <img className={styles.featureImagePic} src={imgUrl2} alt={title} />
        </div>
      )}
      {cardClassName } 
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Welcome to Robolink Docs</h1>
          <h4 className="hero__subtitle">Learn about how to use the library functions and blocks for the coding platforms of our robots</h4>
          <div className={styles.buttons}>
        
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container" id="landingContainer">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
