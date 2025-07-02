export const allPostsQuery = `
  *[
    _type == "post" &&
    defined(slug.current) &&
    !(_id in path("drafts.**"))
  ] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    description,
    image {
      asset->{url}
    },
    tags[]->{
      title,
      slug
    },
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->{url},
        alt,
        caption
      }
    }
  }
`;

export const postBySlugQuery = (slug) => `
  *[_type == "post" && slug.current == "${slug}"][0] {
    _id,
    title,
    publishedAt,
    image {
      asset->{url}
    },
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->{url}
      }
    },
    tags[]->{
      title,
      slug
    }
  }
`;

export const topThree = `
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    publishedAt,
    image {
      asset->{url}
    },
    tags[]->{
      title,
      slug
    }
  }
`;
