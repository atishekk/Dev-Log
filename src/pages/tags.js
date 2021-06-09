import React from 'react';
import { Link, graphql } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Theme from '../theme/Theme';

export const query = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
    }
  }
`;

const Container = styled.div`
padding: 5px;
`;

const TagLink = styled(Link)`
 text-decoration: none;
`

const Categories = styled.div`
  display: flex;
  flex-wrap:wrap;
`;

const Tag = styled.div`
padding: 10px;
margin: 10px;
border-radius: 20px;
background-color: ${Theme.nord3};
color: ${Theme.nord6};
 transition: 0.6s;
 :hover {
 color: ${Theme.nord13};
 box-shadow: 0px 0px 10px ${Theme.nord0};
 }
`

const TagsPage = ({
  data: {
    allMdx: { group, totalCount },
  },
}) => (
  <Layout>
    <Container>
      <h2>Categories</h2>
      <p>
        {totalCount} posts are listed in {group.length} categories
      </p>
      <Categories>
        {group.map(({ fieldValue, totalCount }) => (
            <TagLink key={fieldValue} to={`/tags/${kebabCase(fieldValue)}`}>
              <Tag>
              {fieldValue} ({totalCount})
              </Tag>
            </TagLink>
        ))}
      </Categories>
    </Container>
  </Layout>
);

export default TagsPage;
