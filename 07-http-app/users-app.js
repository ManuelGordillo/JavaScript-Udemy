import { renderAppButton } from "./src/users/presentation/render-app-button/render-app-button";
import { renderButtons } from "./src/users/presentation/render-buttons/render-buttons";
import { renderModal } from "./src/users/presentation/render-modal/render-modal";
import { renderTable } from "./src/users/presentation/render-table/render-table";
import userStore from "./src/users/store/user-store";
import { saveUser } from "./src/users/use-cases/save-user";

/**
 *
 * @param {HTMLDivElement} element
 */
export const UserApp = async (element) => {
  element.innerHTML = "Loading...";
  await userStore.loadNextPage();

  renderTable(element);
  renderButtons(element);
  renderAppButton(element);
  renderModal(element, async (userLike) => {
    const user = await saveUser(userLike);
    userStore.onUserChanged(user);
    renderTable();
  });
};
