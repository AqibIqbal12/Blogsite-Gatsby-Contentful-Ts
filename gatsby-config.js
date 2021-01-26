// module.exports = {
//   plugins: ["gatsby-plugin-typescript"],
// };
require('dotenv').config();
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `kdm0zyjw5uus`,
        accessToken: "EsPnefnsEZD9WfxTi4LM7FW_vWlu_dZehaOGWpqD1FE",
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.apiKey,
          authDomain: process.env.authDomain,
          databaseURL: process.env.databaseURL,
          projectId: process.env.projectId,
          storageBucket: process.env.storageBucket,
          messagingSenderId: process.env.messagingSenderId,
          appId: process.env.appId

        }
      }
    },
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        // allowList: ["MY_VAR", "MY_OTHER_VAR"]
      },
    }
  ],
}