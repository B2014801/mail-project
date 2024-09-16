import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./search.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
function Search() {
  return (
    <div className={cx("search-container")}>
      <FontAwesomeIcon icon={faSearch} className={cx("search-icon")} />
      <input placeholder="Search"></input>
      <span className={cx("command-icon")}>⌘</span>
      <span>K</span>
    </div>
  );
}

export default Search;
