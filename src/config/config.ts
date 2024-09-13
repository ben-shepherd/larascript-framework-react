import { IConfig } from "../interfaces/IConfig"

const config: IConfig = {
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
                to: 'https://github.com/ben-shepherd/larascript-node',
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
            addtionalClassNames: 'header_container_small',
            visibleParts: {
              showTitle: true,
              showSubTitle: true,
              showBetaWarning: false,
              showArrowDown: false
            },
            buttons: [
                {
                  text: 'Go Back',
                  to: '/',
                  target: '_self',
                }
              ]
          }
    }
}

export default config