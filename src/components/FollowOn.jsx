import { FaInstagram, FaXTwitter, FaGithub } from "react-icons/fa6"

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.github.com/KuntalRathod">
          <FaGithub size={20} />
        </a>
        <a href="https://www.instagram.com/kuntal_rathod_07">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.twitter.com/KuntalRathod77">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  )
}

export default FollowOn
