import { ApolloWrapper } from "@/lib/apollo-wrapper";

// const POST_QUERY = gql`
//   query {
//     publication(host: "blog.jimenez.tech") {
//       isTeam
//       title
//       posts(first: 10) {
//         edges {
//           node {
//             title
//             brief
//             url
//           }
//         }
//       }
//     }
//   }
// `;

export default function Blog({ post }) {
  console.log(post);
  return (
    <ApolloWrapper>
      <div>Hello</div>
    </ApolloWrapper>
  );
}
