import {graphql, useStaticQuery} from 'gatsby';

export const useSiteMetadata = () => {
  const {site} = useStaticQuery(
    graphql`
    query SITE_META {
      site {
        siteMetadata {
          description
          authorName
          siteLanguage
          siteLocale
          siteUrl
          title
        }
      }
    }`
  );
  return site.siteMetadata;
}
