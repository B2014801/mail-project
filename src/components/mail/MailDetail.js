import classNames from "classnames/bind";

import style from "./mail.module.scss";

import image from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
const cx = classNames.bind(style);
function MailDetail() {
  return (
    <div className={cx("mail-detail-wrapper")}>
      <div className={cx("mail-detail-container")}>
        <div className={cx("mail-detail-header")}>
          <div className={cx("account")}>
            <div className={cx("avt")}>
              <img src={image.avt} alt=""></img>
            </div>
            <div className={cx("account-infor")}>
              <div>
                <h5>Opal Camera</h5>
                <span className={cx("email")}>opalcamera@dot.com</span>
              </div>
              <div>
                <span className={cx("to")}>To: </span>
                <h6>
                  Me <FontAwesomeIcon icon={faAngleDown} />
                </h6>
              </div>
            </div>
          </div>
          <div className={cx("mail-detail-header-right")}>
            <FontAwesomeIcon icon={faPaperclip} />
            <p className={cx("time")}>Dec 23, 09:20PM</p>
            <div className={cx("vertical")}></div>
            <img
              className={cx("arrow-turn-left")}
              src={image.arrow_turn}
              alt=""
            ></img>
            <img
              className={cx("arrow-turn-right")}
              src={image.arrow_turn}
              alt=""
            ></img>
            <FontAwesomeIcon icon={faStar} />
            <img src={image.menu_icon} alt="" />
          </div>
        </div>
        <div className={cx("mail-detail-body")}>
          <h4 className={cx("mail-detail-title")}>Introducing the Tadpole</h4>
          <p className={cx("mb_2")}>
            Introducing the Tadpole the smallest webcam ever built. With a
            category-first directional microphone, a mirrorless Sony sensor, and
            the easiest way to mute your call with a tap it's the perfect webcam
            to take with you everywhere. And now, it works with both Mac and PC.
          </p>
          <div className={cx("mail-detail-img-container")}>
            <img src={image.mail_detail_img1} alt=""></img>
          </div>
          <p className={cx("mb_2")}>
            The Tadpole is the remarkably small, laptop dedicated, camera system
            designed by Opal. It comes with an adjustable clip that fits most
            laptop displays, a bead you can use to safely store your camera or
            wrap it around your wrist, and a premium woven cable.
          </p>
          <div className={cx("attach-header")}>
            <h5>Attachments</h5>
            <h5>Receive All (3)</h5>
          </div>
          <div className={cx("attach-container")}>
            <div className={cx("attach-item")}>
              <div>
                <img src={image.attach1} alt=""></img>
                <div>
                  <p>Clip and Go</p>
                  <p>
                    <span>PNG </span>
                    <span>25,6MB</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={cx("attach-item")}>
              <div>
                <img src={image.attach2} alt=""></img>
                <div>
                  <p>Teenie-Tiny-1</p>
                  <p>
                    <span>PNG </span>
                    <span>25,6MB</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={cx("attach-item")}>
              <div>
                <img src={image.attach3} alt=""></img>
                <div>
                  <p>Teenie- Tiny-2</p>
                  <p>
                    <span>PNG </span>
                    <span>25,6MB</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p>
            The Tadpole is available to order now. It ships in white or black
            and starts at $175.
          </p>
          <a href="abc">Check out Tadpole</a>
          <div className={cx("mail-detail-img-container", { mt_2: true })}>
            <img src={image.mail_detail_img1} alt=""></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailDetail;
