import React from "react";
import { DiJavascript1, DiCss3Full, DiHtml5, DiReact } from "react-icons/di";
import {
  FaRegFilePdf,
  FaVideo,
  FaRegLightbulb,
  FaDropbox,
  FaGoogleDrive,
  FaYoutube,
  FaLink,
} from "react-icons/fa";

const FILE_ICONS = {
  js: <DiJavascript1 />,
  css: <DiCss3Full />,
  html: <DiHtml5 />,
  jsx: <DiReact />,
  pdf: <FaRegFilePdf />,
  zoom: <FaVideo />,
  tip: <FaRegLightbulb />,
  dropbox: <FaDropbox />,
  drive: <FaGoogleDrive />,
  yt: <FaYoutube />,
  com: <FaLink />,
};

export default FILE_ICONS;
