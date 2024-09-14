import config from "../../../config/config";
import Modal from "../BaseModal";
import './styles.scss';

type Props = {
    open: boolean;
    onClose: () => void;
}

const GithubStarModal = ({ open, onClose }: Props) => {

    const handleClick = () => {
        window.open(config.githubRepository, '_blank', 'noopener,noreferrer');
        onClose();
    }

    return (
        <Modal
            open={open}
            title="Support our project!"
            className="GithubStarModal"
            content={
                <>
                    <div className="GithubStarModal__text">
                        <p className="GithubStarModal__text_p1">
                            We're excited that you're interested in our Node.js framework. If you find it useful, please consider giving us a star on GitHub!
                        </p>
                        <p className="GithubStarModal__text_p2">
                            Your star helps us grow our community and motivates us to keep improving.
                        </p>
                    </div>
                    <div className="GithubStarModal__image">
                        <img className="GithubStarModal__image_img" src="/images/githubStarCursor.jpg" alt="github star" />
                    </div>
                </>
            }
            buttons={[
                {
                    text: "Maybe Later",
                    className: 'GithubStarModal_button_lg',
                    onClick: handleClick,
                },
                {
                    text: "Maybe Later",
                    className: 'GithubStarModal_button_xs',
                    onClick: onClose,
                },
                {
                    text: 'Yes, Let\'s Star It! ⭐',
                    onClick: handleClick,
                }
            ]}
            onClose={onClose}
        />
    )
}

export default GithubStarModal