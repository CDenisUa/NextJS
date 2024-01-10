import { NextPage } from "next";

const SingleBlogPage: NextPage = ({ params }: any) => {
    return <div>Single Blog Page {params.slug}!</div>;
  };
  
  export default SingleBlogPage;