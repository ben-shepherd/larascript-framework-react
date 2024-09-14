import { IConfig } from "../interfaces/IConfig";

const githubProfile = 'https://github.com/ben-shepherd/';
const githubLarascript = `${githubProfile}larascript/`;

const config: IConfig = {
  author: 'Benjamin S',
  githubProfile,
  headers: {
    homepage: {
      title: 'Larascript Node',
      subTitle: 'A Node.js framework inspired by Laravel, built with TypeScript.',
      visibleParts: {
        showTitle: true,
        showSubTitle: true,
        showBetaWarning: true,
        showArrowDown: true
      },
      buttons: [
        {
          text: 'View on GitHub',
          to: githubLarascript,
          target: '_blank'
        },
        {
          text: 'View Documentation',
          to: '/#documentation',
          target: '_self',
        },
        {
          text: 'Developer Blog',
          to: '/blog',
          target: '_self',
        }
      ]
    },
    blog: {
    
      title: 'Developer Blog',
      subTitle: 'Insights, updates, and tips for Larascript Node developers',
      addtionalClassNames: 'header_developer_blog',
      visibleParts: {
        showTitle: true,
        showSubTitle: true,
        showBetaWarning: false,
        showArrowDown: false,
        showAbstractLines: false,
      },
      buttons: []
    }
  }
}

export default config