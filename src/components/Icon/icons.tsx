/* icons */
import next from 'next';
import Express from './icons/Express';
import Framer from './icons/Framer';
import Nest from './icons/Nest';
import Npm from './icons/Npm';
import React from './icons/React';
import Typescript from './icons/Typescript';
import Next from './icons/Next';
import Tailwind from './icons/Tailwind';
import Sass from './icons/Sass';
import Yarn from './icons/Yarn';
import Vscode from './icons/Vscode';
import Raycast from './icons/Raycast';
import Figma from './icons/Figma';
import Behance from './icons/Bahance';
import Dribbble from './icons/Dribbble';
import Notion from './icons/Notion';
import Spotify from './icons/Spotify';
import Nts from './icons/Nts';
import Cosmos from './icons/Cosmos';
import Cyberghost from './icons/Cyberghost';
import Ovh from './icons/Ovh';

type IconMap = {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};

const icons: IconMap = {
  /* stack */
  express: Express,
  nest: Nest,
  npm: Npm,
  framer: Framer,
  react: React,
  typescript: Typescript,
  next: Next,
  tailwind: Tailwind,
  sass: Sass,
  yarn: Yarn,

  /* tools */
  vscode: Vscode,
  raycast: Raycast,
  figma: Figma,
  behance: Behance,
  dribbble: Dribbble,
  notion: Notion,
  spotify: Spotify,
  nts: Nts,
  cosmos: Cosmos,
  cyberghost: Cyberghost,
  ovh: Ovh,
};

export default icons;
