const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-5">
      <a
        className="hover:opacity-50 transition duration-500 w-9"
        href="https://www.linkedin.com/in/tyrone-orrego/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 w-8
        "
        href="https://github.com/TyroneOrrego"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" size="30px" src="../assets/github.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
