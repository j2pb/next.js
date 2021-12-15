import { useRouter } from "next/router";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const {post}=props
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const userToken = localStorage.getItem("userToken");

      if (!userToken && post?.premiun) {
        Router.replace(`/login?slug=${post.slug}`);
        return null;
      }

      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default withAuth;