/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from "react-intl";

export const scope = "app.containers.HomePage";

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "IBoard",
  },
  boardTitle: {
    id: `${scope}.boardTitle`,
    defaultMessage: "Inno Board",
  },
  sectionTitle: {
    id: `${scope}.sectionTitle`,
    defaultMessage: "Section Title",
  },
});
