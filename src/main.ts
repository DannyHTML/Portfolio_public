import { createApp } from "vue";
import "./style.css";
import "./components/CustomStyles.css";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBars,
  faClose,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { createPinia } from "pinia";

const pinia = createPinia();

library.add(
  faBars,
  faClose,
  faArrowUpRightFromSquare,
  faGithubSquare,
  faPaperPlane,
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(pinia).mount("#app");
