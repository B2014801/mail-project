import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faInbox,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faClock,
  faFile,
  faPaperPlane,
  faStar,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

import style from "./Home.module.scss";
import image from "../../assets/images";
import Search from "../../components/search/Search";
import mail_list from "../../assets/json/mail_list";
import MailList from "../../components/mail/MailList";
import MailDetail from "../../components/mail/MailDetail";
import { useEffect } from "react";

const cx = classNames.bind(style);
function Home() {
  const navigate = useNavigate();
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  useEffect(() => {
    const userFromCookie = getCookie("current_user");
    const userFromSS = sessionStorage.getItem("current_user");
    if (!userFromCookie && !userFromSS) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className={cx("body-wrapper")}>
      <div className={cx("body-container")}>
        <div className={cx("left-side")}>
          <div className={cx("header")}>
            <div>
              <img className={cx("logo")} src={image.logo} alt=""></img>
              <h4>Mail Box</h4>
            </div>
            <img className={cx("note-icon")} src={image.note_icon} alt=""></img>
          </div>
          <div className={cx("left-side-body")}>
            <div className={cx("hr", { margin_0: true })}>
              <div></div>
            </div>
            <div className={cx("compose-btn")}>
              <button>Compose</button>
            </div>
            <div className={cx("filter-btn-container")}>
              <div className={cx("filter-btn")}>
                <button className={cx("active-selected-btn")}>Inbox</button>
                <button>Messages</button>
              </div>
            </div>
            <div className={cx("left-side-content")}>
              <div className={cx("category")}>
                <div className={cx("category-item", { selected: true })}>
                  <div>
                    <div>
                      <FontAwesomeIcon icon={faInbox} />
                      <span className={cx("title")}>Inbox</span>
                    </div>
                    <span>12,953</span>
                  </div>
                </div>
                <div className={cx("category-item")}>
                  <div>
                    <div>
                      <FontAwesomeIcon icon={faStar} />
                      <span className={cx("title")}>Starred</span>
                    </div>
                    <span>12,953</span>
                  </div>
                </div>
                <div className={cx("category-item")}>
                  <div>
                    <div>
                      <FontAwesomeIcon icon={faClock} />
                      <span className={cx("title")}>Snoozed</span>
                    </div>
                    <span>12,953</span>
                  </div>
                </div>
                <div className={cx("category-item")}>
                  <div>
                    <div>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      <span className={cx("title")}>Sent</span>
                    </div>
                    <span>12,953</span>
                  </div>
                </div>
                <div className={cx("category-item")}>
                  <div>
                    <div>
                      <FontAwesomeIcon icon={faFile} />
                      <span className={cx("title")}>Drafts</span>
                    </div>
                    <span>12,953</span>
                  </div>
                </div>
                <div className={cx("category-item")}>
                  <div>
                    <div>
                      <FontAwesomeIcon icon={faTrashCan} />
                      <span className={cx("title")}>Trash</span>
                    </div>
                    <span>12,953</span>
                  </div>
                </div>
              </div>
              <div className={cx("hr")}>
                <div></div>
              </div>
              <div className={cx("category")}>
                <div className={cx("category-item")}>
                  <div>
                    <span>FOLDERS</span>{" "}
                    <span>
                      <FontAwesomeIcon icon={faPlus} />
                    </span>
                  </div>
                </div>
                <div className={cx("category-item")}>
                  <div>
                    <span>Folder 1</span> <span>2</span>
                  </div>
                </div>
                <div className={cx("category-item")}>
                  <div>
                    <span>Folder 2</span> <span>2</span>
                  </div>
                </div>
              </div>
              <div className={cx("hr")}>
                <div></div>
              </div>
              <div className={cx("category")}>
                <div className={cx("category-item")}>
                  <div>
                    <span>LABELS</span>{" "}
                    <span>
                      <FontAwesomeIcon icon={faPlus} />
                    </span>
                  </div>
                </div>
                <div className={cx("category-item")}>
                  <div>
                    <span>Label 1</span> <span>2</span>
                  </div>
                </div>
                <div className={cx("category-item")}>
                  <div>
                    <span>Label 2</span> <span>2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("footer")}>
              <div className={cx("hr")}>
                <div></div>
              </div>
              <div className={cx("account")}>
                <div>
                  <div className={cx("avt")}>
                    <img src={image.avt} alt=""></img>
                  </div>
                  <div>
                    <h5>Mus</h5>
                    <p>musmuliadyjahi@gmail.c...</p>
                  </div>
                </div>
                <FontAwesomeIcon icon={faAngleDown} />
              </div>
              <div className={cx("hr")}>
                <div></div>
              </div>
              <div className={cx("coppy-right")}>2023 Mailbox.io</div>
            </div>
          </div>
        </div>
        <div className={cx("right-side")}>
          <div className={cx("col-4")}>
            <div className={cx("header", { border_bottom: true })}>
              <div>
                <h4>Inbox</h4>{" "}
                <span className={cx("total-unread")}>422 Unread</span>
              </div>
              <Search />
            </div>
            <div className={cx("right-side-body")}>
              <MailList mail_list={mail_list} />
            </div>
          </div>
          <div className={cx("col-6", { mail_detail: true })}>
            <div className={cx("header", { border_bottom: true })}>
              <div className={cx("action-icon")}>
                <img src={image.back_icon} alt=""></img>
                <div className={cx("vertical")}></div>
                <img src={image.bin_icon} alt=""></img>
                <img src={image.warning_icon} alt=""></img>
                <img src={image.trash_icon} alt=""></img>
                <div className={cx("vertical")}></div>
                <img src={image.message_icon} alt=""></img>
                <img src={image.clock_icon} alt=""></img>
                <img src={image.file_icon} alt=""></img>
                <div className={cx("vertical")}></div>
                <img src={image.folder_icon} alt=""></img>
                <img src={image.tag_icon} alt=""></img>
                <img src={image.menu_icon} alt=""></img>
              </div>
            </div>
            <div className={cx("right-side-body")}>
              <MailDetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
