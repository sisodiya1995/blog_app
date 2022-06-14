import React from "react";
//import { ROOT_URL } from '../utils/constant';
import { withRouter } from "react-router";
//import Loader from './Loader';
import { Link } from "react-router-dom";
class ProfileBanner extends React.Component {
  state = {
    profile: null,
    error: null,
    follow: false,
  };

  componentDidMount() {
    let { username } = this.props;

    fetch(
      "https://mighty-oasis-08080.herokuapp.com/api/" + `profiles/${username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Token ${this.props.user.token}`,
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          return Promise.reject("Unable to fetch profile!");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data.profile);
        this.setState({
          profile: data.profile,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
        });
      });
  }

  render() {
    if (!this.state.profile) return <h2>loading ...</h2>;
    let { username, image, bio } = this.state.profile;
    return (
      <>
        <section className="containe">
          <div className="banner">
            {" "}
            <div className="banner-1" >
              <div className="banner-img">
                <img
                  src={image || "./images/Smiley.jpg"}
                  alt={username}
                  className="user-imga"
                />
                <h2>{username}</h2>
                <h3>{bio}</h3>
              </div>
              <div className="btn-4">
                {this.props.user.username === username ? (
                  <button className="button-1">
                    <Link
                      to="/setting"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Edit profile setting
                    </Link>
                  </button>
                ) : (
                  <button className="button-1">
                    {" "}
                    + Follow <span>{username}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(ProfileBanner);
