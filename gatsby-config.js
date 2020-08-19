module.exports = {
  siteMetadata: {
    title: `Saul Maldonado`,
    description: `Full Stack Web Developer`,
    author: `Saul Maldonado`,
    socials: {
      linkedin: {
        username: '@saulmaldonado4',
        link: 'https://www.linkedin.com/in/saulmaldonado4/',
      },
      twitter: {
        username: '@saul_mal',
        link: 'https://twitter.com/saul_mal',
      },
      stackoverflow: {
        username: '@saulmaldonado',
        link: 'https://stackoverflow.com/users/12286015/saulmaldonado',
      },
      github: {
        username: '@saulmaldonado',
        link: 'https://github.com/saulmaldonado',
      },
      email: {
        username: 'email',
        link: 'mailto:samaldonado4@gmail.com',
      },
      resume: {
        username: 'resume',
        link: 'https://drive.google.com/file/d/12rKxgzj4BJvUVwZao_UMmB52sSFaN2ni/view?usp=sharing',
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-anchor-links`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
