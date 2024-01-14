import DeleteIcon from "@mui/icons-material/Delete";

export const ICON_REGISTRIES = [
  {
    icon: "delete",
    element: DeleteIcon,
  },
];

export function getIcon(iconName: string) {
  return iconName
    ? ICON_REGISTRIES.find((item) => item.icon === iconName)?.element
    : undefined;
}
