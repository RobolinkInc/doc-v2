import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/codroneProLogo.png',
    imageUrl2: 'img/codroneProPic.png',
    cardClassName: <CmdProButtons /> 
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/cdmLogo.png',
    imageUrl2: 'img/cmdPic.png',
    cardClassName: <CmdTwoButtons />
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/zumiLogo.png',
    imageUrl2: 'img/zumiPic.png',
    cardClassName: <CmdTwoButtons />
  },
];

function CmdProButtons() {
  return (
    <div className={styles.columns }>
   <div className={styles.column }>
      <button>Blockly</button>
   </div>
   <div className={styles.column }>
   <button>Python</button>

  </div>
  <div className={styles.column }>
  <button>Arduino</button>
  </div>
</div>
  );
}

function CmdTwoButtons() {
  return (
    <div className={styles.columns }>
   <div className={styles.columnHalf }>
      <button>Blockly</button>
   </div>
  <div className={styles.columnHalf }>
  <button>Python</button>
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
          <img className={styles.featureImage} src={imgUrl} alt={title} />
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
          <h1 className="hero__title">Welcome to DOCS</h1>
          <div className={styles.buttons}>
        
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
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
