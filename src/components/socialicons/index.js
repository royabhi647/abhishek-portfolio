import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank
} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.leetcode && (
          <li>
            <a href={socialprofils.leetcode}>
              <SiLeetcode />
            </a>
          </li>
        )}
        {socialprofils.gfg && (
          <li>
            <a href={socialprofils.gfg}>
              <SiGeeksforgeeks />
            </a>
          </li>
        )}
        {socialprofils.hackerrank && (
          <li>
            <a href={socialprofils.hackerrank}>
              <FaHackerrank />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
