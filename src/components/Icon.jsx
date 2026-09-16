import {
  HiOutlineAdjustments,
  HiOutlineBadgeCheck,
  HiOutlineCube,
  HiOutlineDesktopComputer,
  HiOutlineExclamationCircle,
  HiOutlineEye,
  HiOutlineSearch,
  HiOutlineUpload,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import {
  LuBuilding2,
  LuDna,
  LuFocus,
  LuLayers,
  LuMicroscope,
  LuNetwork,
  LuShieldAlert,
  LuWorkflow,
} from 'react-icons/lu';

// Keeps src/data/content.js free of JSX: content refers to icons by name.
const icons = {
  adjustments: HiOutlineAdjustments,
  alert: HiOutlineExclamationCircle,
  building: LuBuilding2,
  check: HiOutlineBadgeCheck,
  cube: HiOutlineCube,
  desktop: HiOutlineDesktopComputer,
  dna: LuDna,
  eye: HiOutlineEye,
  focus: LuFocus,
  layers: LuLayers,
  microscope: LuMicroscope,
  network: LuNetwork,
  search: HiOutlineSearch,
  shield: LuShieldAlert,
  upload: HiOutlineUpload,
  users: HiOutlineUserGroup,
  workflow: LuWorkflow,
};

export default function Icon({ name, className = 'text-xl' }) {
  const Glyph = icons[name];
  if (!Glyph) return null;
  return <Glyph className={className} aria-hidden="true" />;
}
