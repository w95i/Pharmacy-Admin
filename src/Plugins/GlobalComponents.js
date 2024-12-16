import { InputForm , AutoComplete , MultiSelectDrop } from "@/components/index";
import { FontAwesomeIcon } from "../assets/Fontawesome/FontAwesome";


const GlobalComponents = {
    install(Vue) {
        Vue.component("font-awesome-icon", FontAwesomeIcon)
        Vue.component("f-input" , InputForm)
        Vue.component("f-autoComplete" , AutoComplete)
        Vue.component("f-multiSelect" , MultiSelectDrop)
    },
};

export default GlobalComponents;