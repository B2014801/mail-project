import classNames from "classnames/bind";

import style from "./mail.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faStar, faVideo } from "@fortawesome/free-solid-svg-icons";
import {
  faImage,
  faStar as faStarRegular,
} from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const cx = classNames.bind(style);
function MailList({ mail_list }) {
  const [active] = useState(4);
  const getStatusIcon = (mail) => {
    let icons = [];
    if (mail.idmail_list?.length > 0) {
      icons.push(
        <FontAwesomeIcon className={cx("mail-repply-icon")} icon={faReply} />
      );
    } else {
      if (!mail.viewed) {
        icons.push(<div className={cx("mail-status-unread")}></div>);
      }
      if (mail.starred) {
        icons.push(
          <FontAwesomeIcon className={cx("mail-starred")} icon={faStar} />
        );
      }
      if (!mail.starred && mail.viewed) {
        icons.push(<FontAwesomeIcon icon={faStarRegular} />);
      }
    }
    return icons;
  };
  return (
    <div className={cx("mail-list")}>
      {mail_list.map((mail, index) => (
        <div
          className={cx("mail-container", { active: active === index })}
          key={`${mail.id}-${index}`}
        >
          <div
            className={cx("mail", {
              viewed: mail.viewed,
              border_none: active === index + 1,
            })}
          >
            <div className={cx("mail-status")}>{getStatusIcon(mail)}</div>
            <div className={cx("mail-content")}>
              <h4>
                {mail.from}
                {mail.idmail_list?.length > 0 ? (
                  <>
                    <span>, Me&nbsp;{mail.idmail_list?.length + 1}</span>&nbsp;
                    <div></div>
                  </>
                ) : (
                  ""
                )}
              </h4>
              <h5>{mail.title}</h5>
              <p>{mail.brief}</p>
              {mail.attached?.length > 0 ? (
                <>
                  <div className={cx("mail-attached",{video:mail.attached[0].type === "video",image:mail.attached[0].type !== "video"})}>
                    <span>
                      {mail.attached[0].type === "video" ? (
                        <FontAwesomeIcon
                          icon={faVideo}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faImage}
                        />
                      )}
                    </span>
                    {mail.attached[0].name}
                  </div>
                  {mail.attached?.length > 1 ? (
                    <span className={cx("mail-attached-total")}>
                      +{mail.attached.length - 1}
                    </span>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
            </div>
            <div className={cx("mail-time")}>{mail.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MailList;
