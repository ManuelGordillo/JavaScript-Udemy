import modalHTML from "./render-modal.html?raw";
import "./render-modal.css";
import { User } from "../../models/user";
import { getUserById } from "../../use-cases/get-user-by-id";
let modal;
let form;
let loadedUser;

/**
 * @param {String|Number} id
 */
export const showModal = async (id) => {
  modal?.classList.remove("hide-modal");
  if (!id) return;
  const user = await getUserById(id);
};

export const hideModal = () => {
  modal?.classList.add("hide-modal");
  form?.reset();
};

/**
 *
 * @param {User} user
 */
const setFormValues = (user) => {};

/**
 *
 * @param {HTMLDivElement} element
 * @param {(userLike)=> Promise<void>} callback
 */
export const renderModal = (element, callback) => {
  if (modal) return;
  modal = document.createElement("div");
  modal.innerHTML = modalHTML;
  modal.className = "modal-container hide-modal";
  form = modal.querySelector("form");

  modal.addEventListener("click", (event) => {
    if (event.target.className === "modal-container") {
      hideModal();
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const userLike = {};

    for (const [key, value] of formData) {
      if (key === "balance") {
        userLike[key] = +value; //convirtiendo a numero
        continue;
      }

      if (key === "isActive") {
        userLike[key] = value === "on" ? true : false;
        continue;
      }

      // userLike[key] = value;
      await callback(userLike);
      hideModal();
    }
    console.log(userLike);
  });

  element.append(modal);
};
