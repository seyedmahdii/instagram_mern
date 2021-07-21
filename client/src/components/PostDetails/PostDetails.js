import React, { useEffect } from "react";
import "./PostDetails.css";
import profileImage from "../../images/profile.jpg";

import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../actions/posts";
import moment from "moment";
import { deletePost, likePost } from "../../actions/posts";
import { useGlobalContext } from "../../Context";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
// import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import SendIcon from "@material-ui/icons/Send";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditRoundedIcon from "@material-ui/icons/EditRounded";

function PostDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const {
        post: { data: post },
        isLoading,
    } = useSelector((state) => {
        return state.posts;
    });
    const user = JSON.parse(localStorage.getItem("profile"));
    const { setCurrentId } = useGlobalContext();

    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    if (isLoading) {
        return (
            <div className="container">
                <h1>Loading...</h1>
            </div>
        );
    }

    const LikeIcon = () => {
        if (post?.likes?.length > 0) {
            return post?.likes?.find((like) => like === user?.result?._id) ? (
                <FavoriteIcon className="post-details__icon post-details__icon--liked" />
            ) : (
                <FavoriteBorderIcon className="post-details__icon" />
            );
        }

        return <FavoriteBorderIcon className="post-details__icon mr" />;
    };

    const LikeText = () => {
        if (post?.likes?.length > 0) {
            return post?.likes?.find((like) => like === user?.result?._id) ? (
                <>
                    {post.likes.length > 2 ? (
                        <span>
                            Liked by&nbsp;
                            <span className="bold">You</span>&nbsp;and&nbsp;
                            <span className="bold">
                                {`${post.likes.length - 1}`} others
                            </span>
                        </span>
                    ) : (
                        `${post.likes.length} like${
                            post.likes.length > 1 ? "s" : ""
                        }`
                    )}
                </>
            ) : (
                <>
                    &nbsp;{post.likes.length}{" "}
                    {post.likes.length === 1 ? "Like" : "Likes"}
                </>
            );
        }

        return <>0&nbsp;Like</>;
    };

    return (
        <div className="container">
            <article className="post-details">
                <header className="post-details__header--sm">
                    <div className="post-details__profile">
                        <a href={`/${post?.username}`}>
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="post-details__profile-image"
                            />
                        </a>

                        <div className="post-details__profile-data">
                            <a
                                href={`/${post?.username}`}
                                className="post-details__profile-username"
                            >
                                {post?.username}
                            </a>
                            <span className="post-details__profile-location">
                                Iran
                            </span>
                        </div>
                    </div>
                    <div>
                        <MoreHorizIcon className="post-details__more" />
                        {user?.result?._id === post?.creatorId && (
                            <>
                                <DeleteOutlineIcon
                                    onClick={() =>
                                        dispatch(
                                            post?._id,
                                            post?.username,
                                            history
                                        )
                                    }
                                />
                                <EditRoundedIcon
                                    onClick={() => {
                                        setCurrentId(post?._id);
                                        history.push(`/post/${post?._id}/edit`);
                                    }}
                                />
                            </>
                        )}
                    </div>
                </header>

                <div className="post-details__image-container">
                    <div className="post-details__image-wrapper">
                        <img
                            src={post?.selectedFile}
                            alt="Post"
                            className="post-details__image"
                        />
                    </div>
                </div>

                <aside className="post-details__info">
                    <header className="post-details__header--lg">
                        <div className="post-details__profile">
                            <a href={`/${post?.username}`}>
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="post-details__profile-image"
                                />
                            </a>

                            <div className="post-details__profile-data">
                                <a
                                    href={`/${post?.username}`}
                                    className="post-details__profile-username"
                                >
                                    {post?.username}
                                </a>

                                <span className="post-details__profile-location">
                                    Iran
                                </span>
                            </div>
                        </div>
                        <div>
                            <MoreHorizIcon className="post-details__more" />

                            {user?.result?._id === post?.creatorId && (
                                <>
                                    <DeleteOutlineIcon
                                        onClick={() =>
                                            dispatch(
                                                post?._id,
                                                post?.username,
                                                history
                                            )
                                        }
                                    />
                                    <EditRoundedIcon
                                        onClick={() => {
                                            setCurrentId(post?._id);
                                            history.push(
                                                `/post/${post?._id}/edit`
                                            );
                                        }}
                                    />
                                </>
                            )}
                        </div>
                    </header>

                    <div className="post-details__post-info">
                        <div className="post-details__profile post-details__profile--align-base">
                            <a href={`/${post?.username}`}>
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="post-details__profile-image"
                                />
                            </a>

                            <div className="post-details__profile-data">
                                <a
                                    href={`/${post?.username}`}
                                    className="post-details__profile-username"
                                >
                                    {post?.username}
                                </a>
                                <span className="post-details__profile-location">
                                    Iran
                                </span>

                                <div>
                                    <p className="post-details__caption">
                                        {post?.caption}
                                    </p>
                                    <span className="post-details__createdAt">
                                        {moment(post?.createdAt).fromNow()}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer className="post-details__footer">
                        <div className="post-details__buttons">
                            <div className="post-details__l-buttons">
                                <button
                                    className="post-details__button mr"
                                    onClick={() => dispatch(likePost(post._id))}
                                >
                                    <LikeIcon />
                                </button>

                                <button className="post-details__button mr">
                                    <SendIcon className="post-details__icon" />
                                </button>
                            </div>

                            <div className="post-details__r-buttons">
                                <button className="post-details__button">
                                    <BookmarkBorderIcon className="post-details__icon" />
                                </button>
                            </div>
                        </div>

                        <div className="post-detais__like-info">
                            <LikeText />
                        </div>
                        <div className="post-details__date">
                            NOVEMBER 20, 2020
                        </div>
                    </footer>
                </aside>
            </article>
        </div>
    );
}

export default PostDetails;
