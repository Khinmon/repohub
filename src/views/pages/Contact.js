import { Helmet } from "react-helmet";
import Logo from "../../repohub_logo.png";
import Img from "../../assets/img/img.png";

const Contact = (props) => {
  return (
    <div>
      <Helmet>
        <title>Contact | RepoHub</title>
        <link rel="icon" href={Logo} />
        <meta name="title" content="RepoHub" />
        <meta name="description" content="This is my learning react pj." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="RepoHub" />
        <meta
          property="og:description"
          content="This is my learning react pj."
        />
        <meta property="og:image" content={Img} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="RepoHub" />
        <meta
          property="twitter:description"
          content="This is my learning react pj."
        />
        <meta property="twitter:image" content={Img} />
      </Helmet>
      <h1 className="text-primary">Contact</h1>
    </div>
  );
};

export default Contact;
