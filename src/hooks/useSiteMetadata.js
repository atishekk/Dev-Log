import {graphql, useStaticQuery} from 'gatsby';

export const useSiteMetadata = () => {
  const {site} = useStaticQuery(
    graphql`
      query Site_Metadata {
        site {
          siteMetadata {
            description
            title
          }
        }
      }`
  );
  return site.siteMetadata;
}
